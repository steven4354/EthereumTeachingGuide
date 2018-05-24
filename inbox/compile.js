const path = require("path");
const fs = require("fs");
const solc = require("solc");

// @dev we use path.resolve for
// instead of putting "./../.."
// in fs.readFileSync
// so that it's the path is same for both unix and windows machines

// @source is the string version of our contract
const contractPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(contractPath, "utf8");

// @output the 1 has no major significance
const output = solc.compile(source, 1);
// => { contracts: { ':Inbox': { bytecode: "...", interface: '...'}}}
// @dev interface || abi
// @dev bytecode || bytecode

module.exports = output.contracts[":Inbox"];
