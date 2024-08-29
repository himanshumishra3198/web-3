import { useState, useEffect, useContext } from "react";
import { SeedContext } from "./context/SeedContext";

// interface SolonaProps {
//   mnemonic: string;
// }
const Solona = () => {
  let [mnemonicPresent, setMnemonicPresent] = useState(false);
  let { mnemonicGlobal, seed } = useContext(SeedContext);
  useEffect(() => {
    if (mnemonicGlobal) {
      setMnemonicPresent(true);
    }
  }, [mnemonicGlobal]);
  function generateWalletHandler() {}
  return (
    <div className="flex justify-center mt-8">
      {(() => {
        if (mnemonicPresent) {
          return (
            <button
              onClick={generateWalletHandler}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Generate Wallet
            </button>
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
