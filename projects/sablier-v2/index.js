const { NETWORK } = require("./constants.js");
const { getTVL, getTVV } = require("./queries.js");

const networks = {};
Object.keys(NETWORK).forEach((name) => {
  networks[name] = { tvl: getTVL, vesting: getTVV };
});

module.exports = {
  methodology:
    "Queries the Sablier V2 Lockup contracts for token balances (value is split between vesting and classic assets as per the official streamingHelper)",
  start: 1689120000,
  timetravel: false,
  ...networks,
};
