const BDT = artifacts.require("WSDG");
const ERC20Pool = artifacts.require("ERC20StakingPool")


module.exports = async function (deployer) {
  const wsdg = await WSDG.deployed()
  const ercPool = await deployer.deploy(ERC20Pool, wsdg.address,"0x423047a21249a8Be9b55Ba0f36e3F1BF8A334449",  "10000000000000000", "100000000000000000")
};
