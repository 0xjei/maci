// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

// 2019 OKIMS

pragma solidity ^0.5.0;

library Pairing {

    uint256 constant PRIME_Q = 21888242871839275222246405745257275088696311157297823662689037894645226208583;

    struct G1Point {
        uint256 X;
        uint256 Y;
    }

    // Encoding of field elements is: X[0] * z + X[1]
    struct G2Point {
        uint256[2] X;
        uint256[2] Y;
    }

    /*
     * @return The negation of p, i.e. p.plus(p.negate()) should be zero. 
     */
    function negate(G1Point memory p) internal pure returns (G1Point memory) {

        // The prime q in the base field F_q for G1
        if (p.X == 0 && p.Y == 0) {
            return G1Point(0, 0);
        } else {
            return G1Point(p.X, PRIME_Q - (p.Y % PRIME_Q));
        }
    }

    /*
     * @return The sum of two points of G1
     */
    function plus(
        G1Point memory p1,
        G1Point memory p2
    ) internal view returns (G1Point memory r) {

        uint256[4] memory input;
        input[0] = p1.X;
        input[1] = p1.Y;
        input[2] = p2.X;
        input[3] = p2.Y;
        bool success;

        // solium-disable-next-line security/no-inline-assembly
        assembly {
            success := staticcall(sub(gas, 2000), 6, input, 0xc0, r, 0x60)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }

        require(success,"pairing-add-failed");
    }

    /*
     * @return The product of a point on G1 and a scalar, i.e.
     *         p == p.scalar_mul(1) and p.plus(p) == p.scalar_mul(2) for all
     *         points p.
     */
    function scalar_mul(G1Point memory p, uint256 s) internal view returns (G1Point memory r) {

        uint256[3] memory input;
        input[0] = p.X;
        input[1] = p.Y;
        input[2] = s;
        bool success;
        // solium-disable-next-line security/no-inline-assembly
        assembly {
            success := staticcall(sub(gas, 2000), 7, input, 0x80, r, 0x60)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }
        require (success,"pairing-mul-failed");
    }

    /* @return The result of computing the pairing check
     *         e(p1[0], p2[0]) *  .... * e(p1[n], p2[n]) == 1
     *         For example,
     *         pairing([P1(), P1().negate()], [P2(), P2()]) should return true.
     */
    function pairing(
        G1Point memory a1,
        G2Point memory a2,
        G1Point memory b1,
        G2Point memory b2,
        G1Point memory c1,
        G2Point memory c2,
        G1Point memory d1,
        G2Point memory d2
    ) internal view returns (bool) {

        G1Point[4] memory p1 = [a1, b1, c1, d1];
        G2Point[4] memory p2 = [a2, b2, c2, d2];

        uint256 inputSize = 24;
        uint256[] memory input = new uint256[](inputSize);

        for (uint256 i = 0; i < 4; i++) {
            uint256 j = i * 6;
            input[j + 0] = p1[i].X;
            input[j + 1] = p1[i].Y;
            input[j + 2] = p2[i].X[0];
            input[j + 3] = p2[i].X[1];
            input[j + 4] = p2[i].Y[0];
            input[j + 5] = p2[i].Y[1];
        }

        uint256[1] memory out;
        bool success;

        // solium-disable-next-line security/no-inline-assembly
        assembly {
            success := staticcall(sub(gas, 2000), 8, add(input, 0x20), mul(inputSize, 0x20), out, 0x20)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }

        require(success,"pairing-opcode-failed");

        return out[0] != 0;
    }
}

contract QuadVoteTallyVerifier {

    using Pairing for *;

    uint256 constant SNARK_SCALAR_FIELD = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    uint256 constant PRIME_Q = 21888242871839275222246405745257275088696311157297823662689037894645226208583;

    struct VerifyingKey {
        Pairing.G1Point alpha1;
        Pairing.G2Point beta2;
        Pairing.G2Point gamma2;
        Pairing.G2Point delta2;
        Pairing.G1Point[11] IC;
    }

    struct Proof {
        Pairing.G1Point A;
        Pairing.G2Point B;
        Pairing.G1Point C;
    }

    function verifyingKey() internal pure returns (VerifyingKey memory vk) {
        vk.alpha1 = Pairing.G1Point(uint256(8444130216212310188056720274528985965612626166724883130609110389537183497670),uint256(11828304867482345309236536357737447272078696244121774998016190912010745482521));
        vk.beta2 = Pairing.G2Point([uint256(6320305598560597914641573522059088198374837904009535855454244920391428682212),uint256(11534589317846050002819160780899965154465290418093989388113942100719011011554)], [uint256(18416212112440768875015137852901618800075591577449780077975191533280656951126),uint256(20700631531759881947946464424951914630806295291491568582144592624902495937328)]);
        vk.gamma2 = Pairing.G2Point([uint256(7555036102615132737261834996141674925040375750444998999416183875541335228209),uint256(2767409933650606843287778059266968471719511469217504725816492863862252942864)], [uint256(1150838787392231986211079553582702869456348932032126834791621375268848214249),uint256(21748901678633778174502283234809157063743764686060198511976214052597998704709)]);
        vk.delta2 = Pairing.G2Point([uint256(18598400483407059468483533333401532788276123944037702593027550902231217403569),uint256(11436424577483179311417130367171524579158978224399307879727922855246940519525)], [uint256(15030497152690058768511679081538385629728604291292005712862314549892717903076),uint256(4626275448965914883558320624363579432371129829225416125351597443355886215000)]);
        vk.IC[0] = Pairing.G1Point(uint256(2160469539053463991732788433840856150908671165151713947025743876139026892396),uint256(17942566447956052004449504063111753319048998396157077934275807844548007896971));
        vk.IC[1] = Pairing.G1Point(uint256(155937053839210426217800417998376112552012664513030642546325789408935500478),uint256(8267803586531178414740217171470298546741172471584220426655631524976023457866));
        vk.IC[2] = Pairing.G1Point(uint256(5776477664628037302039691829228748603975873308044603875407253443918758324855),uint256(2794481411896500542830012574754196995826339494340387644050805510081380128431));
        vk.IC[3] = Pairing.G1Point(uint256(3036944075648269555145375216905401746121864760822957661477100968273779280598),uint256(21392851246581276574463130058223993241246047851908598438115324736721170853373));
        vk.IC[4] = Pairing.G1Point(uint256(24615876358807848401105650565107564942072185130879299034419197803017183212),uint256(19707343039607165759352174662291891373015008524538120301464342168608909034895));
        vk.IC[5] = Pairing.G1Point(uint256(8474552618888336115404158012545352938850767626068314301874395225747942704796),uint256(9721113555359430089459353067731994665216877073915653408875412378307613867510));
        vk.IC[6] = Pairing.G1Point(uint256(1980240596126453162082209615748458363562035729843818499175938255871232150370),uint256(8804732169126196372011675887627877437183880618669380413589653404468142533288));
        vk.IC[7] = Pairing.G1Point(uint256(8135350289955463999376111658531994394934315398186726638747755615466078212170),uint256(20381069288851704066308390435698547258927062511759496440423910046251684329645));
        vk.IC[8] = Pairing.G1Point(uint256(448880940311521974782464479355416030136843868744512603251883684182276849615),uint256(19524935242598038401628289604200706239584154924248909789059877156823243792606));
        vk.IC[9] = Pairing.G1Point(uint256(11509796878939772399910818077759537687909360260672003887207109077582236296886),uint256(3431448727256838315278713774844596453599939062169048403342096170592802660211));
        vk.IC[10] = Pairing.G1Point(uint256(7093523445284045387796793732660494863267335527596593117854012243953742991561),uint256(6024089789198895009472169729148826902533145765241080969115004680552015238088));

    }
    
    /*
     * @returns Whether the proof is valid given the hardcoded verifying key
     *          above and the public inputs
     */
    function verifyProof(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[] memory input
    ) public view returns (bool) {

        Proof memory proof;
        proof.A = Pairing.G1Point(a[0], a[1]);
        proof.B = Pairing.G2Point([b[0][0], b[0][1]], [b[1][0], b[1][1]]);
        proof.C = Pairing.G1Point(c[0], c[1]);

        VerifyingKey memory vk = verifyingKey();

        // Compute the linear combination vk_x
        Pairing.G1Point memory vk_x = Pairing.G1Point(0, 0);

        // Make sure that proof.A, B, and C are each less than the prime q
        require(proof.A.X < PRIME_Q, "verifier-aX-gte-prime-q");
        require(proof.A.Y < PRIME_Q, "verifier-aY-gte-prime-q");

        require(proof.B.X[0] < PRIME_Q, "verifier-bX0-gte-prime-q");
        require(proof.B.Y[0] < PRIME_Q, "verifier-bY0-gte-prime-q");

        require(proof.B.X[1] < PRIME_Q, "verifier-bX1-gte-prime-q");
        require(proof.B.Y[1] < PRIME_Q, "verifier-bY1-gte-prime-q");

        require(proof.C.X < PRIME_Q, "verifier-cX-gte-prime-q");
        require(proof.C.Y < PRIME_Q, "verifier-cY-gte-prime-q");

        // Make sure that every input is less than the snark scalar field
        //for (uint256 i = 0; i < input.length; i++) {
        for (uint256 i = 0; i < 10; i++) {
            require(input[i] < SNARK_SCALAR_FIELD,"verifier-gte-snark-scalar-field");
            vk_x = Pairing.plus(vk_x, Pairing.scalar_mul(vk.IC[i + 1], input[i]));
        }

        vk_x = Pairing.plus(vk_x, vk.IC[0]);

        return Pairing.pairing(
            Pairing.negate(proof.A),
            proof.B,
            vk.alpha1,
            vk.beta2,
            vk_x,
            vk.gamma2,
            proof.C,
            vk.delta2
        );
    }
}
