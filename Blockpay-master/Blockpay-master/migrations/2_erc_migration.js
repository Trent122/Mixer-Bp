const Migrations = artifacts.require("ERC20");

require('dotenv').config();

console.log(process.env.TOKEN_NAME);

const tokenName = process.env.TOKEN_NAME;
const tokenSymbol = process.env.TOKEN_SYMBOL;
const tokenDecimals = process.env.TOKEN_DECIMALS;
const tokenTotalSupply = process.env.TOKEN_TOTALSUPLY;

console.log("🚀 ~ file: 2_erc_migration.js ~ line 9 ~ tokenSymbol", tokenSymbol)
console.log("🚀 ~ file: 2_erc_migration.js ~ line 11 ~ tokenDecimals", tokenDecimals)
console.log("🚀 ~ file: 2_erc_migration.js ~ line 13 ~ tokenTotalSupply", tokenTotalSupply)

module.exports = function (deployer) {
  deployer.deploy(Migrations, tokenName, tokenSymbol, tokenDecimals, tokenTotalSupply);
};
