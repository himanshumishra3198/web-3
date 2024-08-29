import React, { useState, createContext, FC } from "react";
import { Buffer } from "buffer";
// Define the context type
interface SeedContextType {
  mnemonicGlobal: string;
  setMnemonicGlobal: React.Dispatch<React.SetStateAction<string>>;

  seed: Buffer;
  setSeed: React.Dispatch<React.SetStateAction<Buffer>>;
}

// Create a context with an initial value of undefined for the type
const SeedContext = createContext<SeedContextType>({
  mnemonicGlobal: "",
  setMnemonicGlobal: () => {},
  seed: Buffer.alloc(0),
  setSeed: () => {},
});

interface SeedProviderProps {
  children: React.ReactNode;
}

const SeedProvider: FC<SeedProviderProps> = ({ children }) => {
  const [mnemonicGlobal, setMnemonicGlobal] = useState<string>("");
  const initial = Buffer.alloc(0);
  const [seed, setSeed] = useState<Buffer>(initial);
  return (
    <SeedContext.Provider
      value={{ mnemonicGlobal, setMnemonicGlobal, seed, setSeed }}
    >
      {children}
    </SeedContext.Provider>
  );
};

export { SeedContext, SeedProvider };
