pragma circom 2.0.0;
include "./lib/poseidon.circom";
template PoseidenPublic(){
    signal input publicKey;
    signal output out;
    
    //the parameter is base on the inputs we have
    component poseidon = Poseidon(1);
    poseidon.inputs[0] <== publicKey;
    out <== poseidon.out;
    
}

component main = PoseidenPublic();