const { NETWORK } = require("./constants.js");
const { sumTokens2 } = require("../helper/unwrapLPs");
const { isWhitelistedToken } = require("../helper/streamingHelper");
const { getAssets } = require("./subgraph");

async function getProtocolTokens(api, isVesting) {
  const assets = await getAssets(NETWORK[api.chain].subgraph);

  const check = ({ symbol, address }) =>
    isWhitelistedToken(symbol, address, isVesting);

  return assets.filter(check).map((asset) => asset.address.toLowerCase());
}

/**
 * Get the Total Value of Locked tokens used for
 * non-vesting related payments (e.g. USDC, WETH)
 */
async function getTVL(_timestamp, _block, _deprecated, { api }) {
  const owners = NETWORK[api.chain].contracts;
  const tokens = await getProtocolTokens(api, false);

  return sumTokens2({ api, owners, tokens });
}

/**
 * Get the Total Value of Vested (still locked) tokens used for
 * vesting (e.g. governance tokens) as per DefiLlama's methodology
 */
async function getTVV(_timestamp, _block, _deprecated, { api }) {
  const owners = NETWORK[api.chain].contracts;
  const tokens = await getProtocolTokens(api, true);
  return sumTokens2({ api, owners, tokens });
}

module.exports = {
  getTVL,
  getTVV,
};
