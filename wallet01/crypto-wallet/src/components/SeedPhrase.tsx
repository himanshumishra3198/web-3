interface SeedPhraseProps {
  mnemonic: string;
}
const SeedPhrase: React.FC<SeedPhraseProps> = ({ mnemonic }) => {
  console.log(mnemonic);
  const seedPhrase = mnemonic.split(" ");
  const rows = 3; // Total number of rows
  const cols = 4; // Total number of columns

  return (
    <div className="max-w-2xl mx-auto p-4">
      <table className="min-w-full bg-gray-800 border-gray-700 rounded-xl shadow-2xl">
        <thead>
          {/* Single Header Row Spanning All Columns */}
          <tr>
            <th
              colSpan={cols}
              className="py-4 text-gray-200 text-center text-2xl border-b border-gray-700"
            >
              Seed Phrase Words
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }, (_, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${rowIndex === rows - 1 ? "bg-gray-700" : ""}`}
            >
              {seedPhrase
                .slice(rowIndex * cols, rowIndex * cols + cols)
                .map((word, colIndex) => (
                  <td
                    key={colIndex}
                    className={`py-2 px-3 border-gray-700 ${
                      rowIndex < rows - 2 ? "border-b" : ""
                    }`}
                  >
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-transform transform hover:scale-105"
                      value={word}
                      onChange={() => {}}
                    />
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeedPhrase;
