const WSDG = artifacts.require("WSDG");
const ERC20Pool = artifacts.require("ERC20StakingPool")


module.exports = async function (deployer) {
  const wsdg = await WSDG.deployed()
  const ercPool = await ERC20Pool.deployed()
  await ethPool.stake({value: "100000000000000000"})
  await wsdg.approve(ercPool.address, "20000000000000000000")
  await ercPool.stake("20000000000000000000");
};
