const TokenABC = artifacts.require('TokenABC');
const TokenXYZ = artifacts.require('TokenXYZ');

module.exports = async function (deployer) {
  await deployer.deploy(TokenABC);
  await deployer.deploy(TokenXYZ);
};
