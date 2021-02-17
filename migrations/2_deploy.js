const Token = artifacts.require("WSDG");

module.exports = function (deployer) {
  deployer.deploy(Token);
};
