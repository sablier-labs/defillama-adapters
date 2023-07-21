module.exports = {
  NETWORK: {
    arbitrum: {
      contracts: [
        "0x197d655f3be03903fd25e7828c3534504bfe525e", // SablierV2LockupLinear
        "0xa9efbef1a35ff80041f567391bdc9813b2d50197", // SablierV2LockupDynamic
      ],
      subgraph:
        "https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-arbitrum",
    },
    avax: {
      contracts: [
        "0x610346e9088afa70d6b03e96a800b3267e75ca19", // SablierV2LockupLinear
        "0x665d1c8337f1035cfbe13dd94bb669110b975f5f", // SablierV2LockupDynamic
      ],
      subgraph:
        "https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-avalanche",
    },
    bsc: {
      contracts: [
        "0x3fe4333f62a75c2a85c8211c6aefd1b9bfde6e51", // SablierV2LockupLinear
        "0xf2f3fef2454dca59eca929d2d8cd2a8669cc6214", // SablierV2LockupDynamic
      ],
      subgraph:
        "https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-bsc",
    },

    ethereum: {
      contracts: [
        "0xb10daee1fcf62243ae27776d7a92d39dc8740f95", // SablierV2LockupLinear
        "0x39efdc3dbb57b2388ccc4bb40ac4cb1226bc9e44", // SablierV2LockupDynamic
      ],
      subgraph:
        "https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2",
    },
    optimism: {
      contracts: [
        "0xb923abdca17aed90eb5ec5e407bd37164f632bfd", // SablierV2LockupLinear
        "0x6f68516c21e248cddfaf4898e66b2b0adee0e0d6", // SablierV2LockupDynamic
      ],
      subgraph:
        "https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-optimism",
    },
    polygon: {
      contracts: [
        "0x67422c3e36a908d5c3237e9cffeb40bde7060f6e", // SablierV2LockupLinear
        "0x7313addb53f96a4f710d3b91645c62b434190725", // SablierV2LockupDynamic
      ],
      subgraph:
        "https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-polygon",
    },
    xdai: {
      contracts: [
        "0x685e92c9ca2bb23f1b596d0a7d749c0603e88585", // SablierV2LockupLinear
        "0xeb148e4ec13aaa65328c0ba089a278138e9e53f9", // SablierV2LockupDynamic
      ],
      subgraph:
        "https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-gnosis",
    },
  },
  ABI_SHORT: {
    symbol: "erc20:symbol",
  },
};
