const WSDG = artifacts.require("WSDG");
const ERC20Pool = artifacts.require("ERC20StakingPool")


module.exports = async function (deployer) {
  const ercPool = await ERC20Pool.deployed()
};
