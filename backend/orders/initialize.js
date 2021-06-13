const RPC_URL = 'http://localhost:8545';
const CHAIN_ID = '1';
const LOP_CONTRACT = '0x3ef51736315F52d568D6D2cf289419b9CfffE782';

const ABC_CONTRACT = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // '0x90dF38ed2C057da6d86EE25874C319f9DA8dB928'; // DAI
const XYZ_CONTRACT = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'; // '0xBDA07531efc8DDA0922d7189339AaE78B4846363'; // WETH

const MM_CONTRACT = '0x438af366276b9bC2fd2C47F9797Bb77d5C1491B2';
const TAKER_KEY = '0xeffbe889a0e1e069062a407b0b22516816313bbb428f100130d9408c641a741b';
const TAKER_ADDRESS = '0x51481C3299473d10570b2280344FD327B4f99da1';

const TESTER_KEY = '7cab4a5fff59276b43d1b726a3005470c74e7b8c0750ca40962e305c558d062c';
const TESTER_ADDRESS = '0xb75dfcccbfbd420a1d5c3a6c28459b817456bf97';

const abi = require('./erc20.abi.json');
const lopAbi = require('./lop.abi.json');
const mmAbi = require('./abi.micromaker.json');
const Web3 = require('web3');
const web3 = new Web3(RPC_URL);
web3.eth.accounts.wallet.add(TAKER_KEY);
web3.eth.accounts.wallet.add(TESTER_KEY);

const lop = new web3.eth.Contract(lopAbi, LOP_CONTRACT);
const tokenABC = new web3.eth.Contract(abi, ABC_CONTRACT);
const tokenXYZ = new web3.eth.Contract(abi, XYZ_CONTRACT);
const microMaker = new web3.eth.Contract(mmAbi, MM_CONTRACT);

module.exports = async function () {
    await microMaker.methods.approveABC('1000000000000000000').send({
        gas: 70000,
        gasPrice: 10000000000,
        from: TESTER_ADDRESS
    });

    await microMaker.methods.approveXYZ('1000000000000000000').send({
        gas: 70000,
        gasPrice: 10000000000,
        from: TESTER_ADDRESS
    });

    let balanceABC = await tokenABC.methods.balanceOf(MM_CONTRACT).call();
    let allowanceABC = await tokenABC.methods.allowance(MM_CONTRACT, LOP_CONTRACT).call();
    console.log(`MicroMaker(DAI): `, balanceABC, allowanceABC);

    let balanceXYZ = await tokenXYZ.methods.balanceOf(MM_CONTRACT).call();
    let allowanceXYZ = await tokenXYZ.methods.allowance(MM_CONTRACT, LOP_CONTRACT).call();
    console.log(`MicroMaker(WETH): `, balanceXYZ, allowanceXYZ);
    console.log();
}