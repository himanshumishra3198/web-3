import { createContext, FC, useState } from "react";

interface keyPairInterface {
  publicKey: string;
  privateKey: string;
  walletIndex: number;
}

interface KeyContextType {
  solArray: Array<keyPairInterface>;
  ethArray: Array<keyPairInterface>;
  setSolArray: React.Dispatch<React.SetStateAction<Array<keyPairInterface>>>;
  setEthArray: React.Dispatch<React.SetStateAction<Array<keyPairInterface>>>;
}

const KeyContext = createContext<KeyContextType>({
  solArray: [],
  ethArray: [],
  setSolArray: () => {},
  setEthArray: () => {},
});

interface KeyProviderProps {
  children: React.ReactNode;
}

const KeyProvider: FC<KeyProviderProps> = ({ children }) => {
  let [solArray, setSolArray] = useState([
    { publicKey: "", privateKey: "", walletIndex: 0 },
  ]);
  let [ethArray, setEthArray] = useState([
    { publicKey: "", privateKey: "", walletIndex: 0 },
  ]);

  return (
    <KeyContext.Provider
      value={{ solArray, setSolArray, ethArray, setEthArray }}
    >
      {children}
    </KeyContext.Provider>
  );
};

export { KeyProvider, KeyContext };
