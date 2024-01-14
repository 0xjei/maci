import { type CircomkitConfig, type CircuitConfig, Circomkit } from "circomkit";

import { execSync } from "child_process";
import fs from "fs";
import path from "path";

import type { CircuitConfigWithName } from "./types";

/**
 * Compile MACI's circuits using circomkit
 * and setup the dir structure
 * @param cWitness - whether to compile to the c witness generator
 * or not
 * @param outputPath - the path to the output folder
 * @returns the build directory
 */
export const compileCircuits = async (cWitness?: boolean, outputPath?: string): Promise<string> => {
  // read circomkit config files
  const configFilePath = path.resolve(__dirname, "..", "circomkit.json");
  const circomKitConfig = JSON.parse(fs.readFileSync(configFilePath, "utf-8")) as CircomkitConfig;
  const circuitsConfigPath = path.resolve(__dirname, "..", "circom", "circuits.json");
  const circuitsConfigContent = JSON.parse(fs.readFileSync(circuitsConfigPath, "utf-8")) as unknown as Record<
    string,
    CircuitConfig
  >;
  const circuitsConfigs: CircuitConfigWithName[] = Object.entries(circuitsConfigContent).map(([name, config]) => ({
    name,
    ...config,
  }));

  const outputPathUpdated = outputPath ? path.resolve(outputPath) : undefined;
  // set the config based on whether to compile the c witness or no
  if (cWitness) {
    circomKitConfig.cWitness = true;
  } else {
    circomKitConfig.cWitness = false;
  }

  // update the build directory if we have an output path
  if (outputPathUpdated) {
    circomKitConfig.dirBuild = outputPathUpdated;
    circomKitConfig.dirPtau = outputPathUpdated;
  }

  const circomkitInstance = new Circomkit({
    ...circomKitConfig,
    verbose: false,
  });

  // loop through each circuit config and compile them
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < circuitsConfigs.length; i += 1) {
    const circuit = circuitsConfigs[i];
    // eslint-disable-next-line no-await-in-loop
    const outPath = await circomkitInstance.compile(circuit.name, circuit);

    // if the circuit is compiled with a c witness, then let's run make in the directory
    if (cWitness) {
      try {
        // build
        execSync(`cd ${outPath}/${circuit.name}_cpp && make`);
        // move the binary and dat out
        fs.renameSync(`${outPath}/${circuit.name}_cpp/${circuit.name}`, `${outPath}/${circuit.name}`);
        fs.renameSync(`${outPath}/${circuit.name}_cpp/${circuit.name}.dat`, `${outPath}/${circuit.name}.dat`);
      } catch (error) {
        throw new Error(`Failed to compile the c witness for ${circuit.name}`);
      }
    } else {
      // move the wasm out
      fs.renameSync(`${outPath}/${circuit.name}_js/${circuit.name}.wasm`, `${outPath}/${circuit.name}.wasm`);
    }

    // read the content of the directory and move the files to the output folder
    // don't do it recursively because we would have moved any useful files
    // inside the folder already from the steps above
    if (outputPathUpdated) {
      const files = fs.readdirSync(outPath, { recursive: false });
      files.forEach((file) => {
        const fileStr = file.toString();
        if (fs.statSync(`${outPath}/${fileStr}`).isFile() && path.extname(`${outPath}/${fileStr}`) !== ".r1cs") {
          fs.renameSync(`${outPath}/${fileStr}`, `${outputPathUpdated}/${fileStr}`);
        }
      });
    }
  }

  return circomKitConfig.dirBuild;
};

if (require.main === module) {
  (async () => {
    const cWitness = process.argv.includes("--cWitness");
    const outputPathIndex = process.argv.indexOf("--outPath");
    if (outputPathIndex === -1) {
      await compileCircuits(cWitness);
    } else {
      const outputFolder = process.argv[outputPathIndex + 1];
      await compileCircuits(cWitness, outputFolder);
    }
  })();
}
