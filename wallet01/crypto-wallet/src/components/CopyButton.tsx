import React, { useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";

interface CopyButtonProps {
  textToCopy: string;
  setNotification: React.Dispatch<React.SetStateAction<any>>;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  setNotification,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setNotification("Coppied!");
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center space-x-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition ease-in-out duration-150 ${
        copied ? "bg-green-500" : ""
      }`}
    >
      <ClipboardIcon className="h-5 w-5" />
      {/* <span>{copied ? "Copied!" : "Copy"}</span> */}
    </button>
  );
};

export default CopyButton;
