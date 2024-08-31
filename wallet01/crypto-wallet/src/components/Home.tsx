import { useContext, useEffect, useState } from "react";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import SeedPhrase from "./SeedPhrase";
import CopyButton from "./CopyButton";
import { SeedContext } from "./context/SeedContext";

function Home() {
  // generate mnemonic
  let [mnemonic, setMnemonic] = useState("");
  let { mnemonicGlobal, setMnemonicGlobal, setSeed } = useContext(SeedContext);
  if (mnemonicGlobal && mnemonic.length == 0) {
    setMnemonic(mnemonicGlobal);
  }
  useEffect(() => {
    if (mnemonicGlobal) {
      setMnemonic(mnemonicGlobal);
      const seed = mnemonicToSeedSync(mnemonic);
      setSeed(seed);
    }
  }, [mnemonicGlobal]);

  async function createSeedPhrase() {
    const mn = await generateMnemonic();
    setMnemonicGlobal(mn);
  }

  return (
    <div className="mx-auto w-1/2 max-w-7xl shadow-md rounded-lg bg-black">
      <h1 className="text-5xl text-left text-white mt-12">
        Welcome to SeedCoin
      </h1>
      <h3 className="text-3xl text-left text-white mt-7 mb-6">
        Manage Your Ethereum and Solana Coins with Ease
      </h3>
      <SeedPhrase mnemonic={mnemonic} />
      <div className="flex justify-between">
        <div>
          <button
            className="basis-1/2 ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            onClick={createSeedPhrase}
          >
            Generate Seed Phrase
          </button>
        </div>
        <div className="mr-4">
          <CopyButton textToCopy={mnemonic} />
        </div>
      </div>
      <h3 className="text-2xl text-left  text-white mt-7 mb-6">
        SeedCoin supports multiple blockchains <br />
        Generate your seedPhrase and then choose a blockchain from the top right
        corner to get started
      </h3>
    </div>
  );
}

export default Home;
