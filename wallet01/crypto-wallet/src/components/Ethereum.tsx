import { useState, useEffect, useContext } from "react";
import { SeedContext } from "./context/SeedContext";
import { Wallet, HDNodeWallet } from "ethers";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import KeypairCard from "./KeypairCard";

interface keyPairInterface {
  publicKey: string;
  privateKey: string;
  walletIndex: number;
}
const Ethereum = () => {
  let [mnemonicPresent, setMnemonicPresent] = useState(false);
  let { mnemonicGlobal, seed } = useContext(SeedContext);
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
  function generateWalletHandler() {
    const path = `m/44'/60'/${index}'/0'`;
    console.log(path);
    // const hdNode = HDNodeWallet.fromSeed(seed);
    //           const child = hdNode.derivePath(derivationPath);
    //           const privateKey = child.privateKey;
    //           const wallet = new Wallet(privateKey);
    //           setCurrentIndex(currentIndex + 1);
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(path);
    const PRIVATEKEY = child.privateKey;
    const wallet = new Wallet(PRIVATEKEY);
    setIndex(index + 1);

    //           setAddresses([...addresses, wallet.address])
    // const derivedSeed = derivePath(path, seed.toString("hex")).key;
    // const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    // const keypair = Keypair.fromSecretKey(secret);
    // setIndex(index + 1);

    setKeyPairArray([
      ...keyPairArray,
      {
        privateKey: PRIVATEKEY,
        publicKey: wallet.address,
        walletIndex: index + 1,
      },
    ]);
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

export default Ethereum;

/////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from "react";
// import { mnemonicToSeed } from "bip39";
// import { Wallet, HDNodeWallet } from "ethers";

// export const EthWallet = ({ mnemonic }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [addresses, setAddresses] = useState([]);

//   return (
//     <div>
//       <button
//         onClick={async function () {
//           const seed = await mnemonicToSeed(mnemonic);
//           const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
//           const hdNode = HDNodeWallet.fromSeed(seed);
//           const child = hdNode.derivePath(derivationPath);
//           const privateKey = child.privateKey;
//           const wallet = new Wallet(privateKey);
//           setCurrentIndex(currentIndex + 1);
//           setAddresses([...addresses, wallet.address]);
//         }}
//       >
//         Add ETH wallet
//       </button>

//       {addresses.map((p) => (
//         <div>Eth - {p}</div>
//       ))}
//     </div>
//   );
// };
