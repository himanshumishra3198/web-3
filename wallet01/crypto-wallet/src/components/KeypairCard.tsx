import React, { useState } from "react";

interface KeyCardProps {
  privateKey: string;
  publicKey: string;
  walletIndex: number;
}

const KeypairCard: React.FC<KeyCardProps> = ({
  privateKey,
  publicKey,
  walletIndex,
}) => {
  const [showPrivateKey, setShowPrivateKey] = useState<boolean>(false);

  const togglePrivateKeyVisibility = () => {
    setShowPrivateKey(!showPrivateKey);
  };

  return (
    <div className="w-3/4 ml-36 inline-block my-8 bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-full mx-auto px-6 py-4">
        <div className="font-bold text-xl mb-4">
          Wallet Index: {walletIndex}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Public Key</label>
          <input
            type="text"
            value={publicKey}
            readOnly
            className="w-full px-3 py-2 text-gray-800 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">
            Private Key
          </label>
          <input
            type={showPrivateKey ? "text" : "password"}
            value={privateKey}
            readOnly
            className="w-full px-3 py-2 text-gray-800 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={togglePrivateKeyVisibility}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {showPrivateKey ? "Hide Private Key" : "Show Private Key"}
        </button>
      </div>
    </div>
  );
};

export default KeypairCard;
