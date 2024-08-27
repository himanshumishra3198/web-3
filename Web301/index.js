const crypto = require("crypto");
let input = "";
for (let i = 0; ; i++) {
  input = "100xdevs" + String(i);
  const hash = crypto.createHash("sha256").update(input).digest("hex");
  if (hash.substr(0, 5) === "00000") {
    console.log(hash);
    console.log(input);
    break;
  }
}
