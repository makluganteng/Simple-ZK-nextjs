#!/bin/bash

# This script will generate following files:
# circuit.r1cs
# circuit.sym
# circuit.wasm
# *.ptau
# circuit_0000.zkey
# circuit_final.zkey
# verification_key.json

# constants
TARGET_CIRCUIT=publicKeyHash.circom
PTAU_FILE=powersOfTau28_hez_final_20.ptau

cd "$(dirname "$0")"
pwd
cd ..
pwd
echo $TARGET_CIRCUIT
# generate phase 1 
circom $TARGET_CIRCUIT --r1cs --wasm --sym || { exit 1; }
[ $? -eq 0 ] && echo "success: circuit.r1cs & circuit.sym & circuit.wasm"

# skip downloading ptau file 
snarkjs --help
# generate circuit_0000.zkey
# snarkjs zkey new circuit.r1cs $PTAU_FILE circuit_0000.zkey || { exit 1; }
# [ $? -eq 0 ] && echo "success: circuit_0000.zkey"