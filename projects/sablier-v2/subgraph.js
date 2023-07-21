const { request, gql } = require("graphql-request");

const AssetFragment = gql`
  fragment AssetFragment on Asset {
    address
    symbol
  }
`;

const AssetQuery = gql`
  query assets {
    assets {
      ...AssetFragment
    }
  }
  ${AssetFragment}
`;

async function getAssets(endpoint) {
  const query = await request(endpoint, AssetQuery, {});
  if (!query || !query.assets) return [];
  return query.assets;
}

module.exports = {
  getAssets,
};
