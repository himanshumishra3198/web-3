import { useState, useEffect, useContext } from "react";
import { SeedContext } from "./context/SeedContext";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import KeypairCard from "./KeypairCard";
import bs58 from "bs58";
import nacl from "tweetnacl";
import { KeyContext } from "./context/KeyContext";
interface keyPairInterface {
  publicKey: string;
  privateKey: string;
  walletIndex: number;
}
const Solona = () => {
  let { mnemonicGlobal, seed } = useContext(SeedContext);
  let { solArray, setSolArray } = useContext(KeyContext);
  let [mnemonicPresent, setMnemonicPresent] = useState(false);
  let [index, setIndex] = useState(0);
  let [keyPairArray, setKeyPairArray] = useState<keyPairInterface[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 1000); // Notification will disappear after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [notification]);

  useEffect(() => {
    if (mnemonicGlobal) {
      setMnemonicPresent(true);
    }
  }, [mnemonicGlobal]);

  useEffect(() => {
    setKeyPairArray(solArray);
  }, [solArray]);

  function generateWalletHandler() {
    const path = `m/44'/501'/${index}'/0'`;

    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);

    setSolArray([
      ...solArray,
      {
        privateKey: bs58.encode(keypair.secretKey),
        publicKey: keypair.publicKey.toBase58(),
        walletIndex: solArray.length,
      },
    ]);
    setIndex(index + 1);
    setNotification("New wallet added");
  }
  return (
    <div className="flex justify-center mt-8 w-full mx-auto">
      {(() => {
        if (mnemonicPresent) {
          return (
            <div className="w-full mx-auto">
              <div className="flex justify-center">
                <button
                  onClick={generateWalletHandler}
                  className="mb-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  Add Wallet
                </button>
              </div>
              <br />
              <div className="justify-center">
                {keyPairArray.map((curr) => {
                  if (curr.walletIndex != 0)
                    return (
                      <KeypairCard
                        privateKey={curr.privateKey}
                        publicKey={curr.publicKey}
                        walletIndex={curr.walletIndex}
                      />
                    );
                })}
              </div>
              {notification && (
                <div className="flex fixed bottom-4 right-4 bg-black-600 text-white py-2 px-4 rounded-lg shadow-lg border border-white">
                  <CheckCircleIcon className="h-5 w-5 mx-1" /> {notification}
                </div>
              )}
            </div>
          );
        } else {
          return (
            <div className="text-neutral-100">
              Generate a seed Phrase first from the home page then You will get
              the option of generating wallets
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Solona;
