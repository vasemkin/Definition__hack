const MicroMaker = artifacts.require('MicroMaker');
const TokenABC = artifacts.require('TokenABC');
const TokenXYZ = artifacts.require('TokenXYZ');

module.exports = async function (deployer) {
  await deployer.deploy(MicroMaker, TokenABC.address, TokenXYZ.address);
};
