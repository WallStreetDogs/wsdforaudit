const Migrations = artifacts.require("../contracts/Migrations.sol");
const WSDGToken = artifacts.require("../contracts/WSDGToken.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(WSDGToken);
};
