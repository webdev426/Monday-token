require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  network: {
    hardhat: {
      initialBaseFeePerGas: 0
    },
    rinkeby: {
      url: 'https://rinkeby.etherscan.io/',
      accounts: '1bd9ac627bd93b42d447a2dbf8f2bddb4c15ed01f29e48c3e3bb63ff6cca385b'
    }
  }
}