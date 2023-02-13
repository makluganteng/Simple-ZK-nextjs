import { Inter } from '@next/font/google'
import Script from 'next/script'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const [proofed,setProofed] = useState('')
const [input,setInput] = useState<string>('')
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setInput(e.target.value);
}

const handleClick = async() => {
  const {proof, publicSignals} = await makeProof({ publicKey: `${input}` },"publicKeyHash.wasm","circuit_0000.zkey")
  console.log(proof)
  
}
const makeProof = async (_proofInput: any, _wasm: string, _zkey: string) => {
  debugger
  const { proof, publicSignals } = await window.snarkjs.groth16.fullProve(_proofInput, _wasm, _zkey);
  return { proof, publicSignals };
};

const verifyProof = async (_verificationkey: string, signals: string, proof: string) => {
  const vkey = await fetch(_verificationkey).then(function (res) {
    return res.json();
  });

  const res = await window.snarkjs.groth16.verify(vkey, signals, proof);
  return res;
};
  return (
    <>
       <h1 className="text-3xl font-bold underline text-[red]">
      Hello world!
      </h1>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>Submit</button>
      {
        proofed ? <p>{proofed}</p> : <></>
      }
    </>
  )
}
