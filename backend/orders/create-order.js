const RPC_URL = 'http://localhost:8545';
const CHAIN_ID = '1';
const LOP_CONTRACT = '0x3ef51736315F52d568D6D2cf289419b9CfffE782';

const ABC_CONTRACT = '0x90dF38ed2C057da6d86EE25874C319f9DA8dB928'; // DAI
const XYZ_CONTRACT = '0xBDA07531efc8DDA0922d7189339AaE78B4846363'; // WETH

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

const LimitOrderBuilder = require('@1inch/limit-order-protocol').LimitOrderBuilder;
const PrivateKeyProviderConnector = require('@1inch/limit-order-protocol/connector/private-key-provider.connector').PrivateKeyProviderConnector;

module.exports = async function (makerAmount) {
    console.log(`New order request ${makerAmount} DAI -> WETH`);

    makerAmount = makerAmount.toString();

    const connector = new PrivateKeyProviderConnector('', web3);
    const limitOrderBuilder = new LimitOrderBuilder(LOP_CONTRACT, CHAIN_ID, connector);

    let predicate = lop.methods.or([MM_CONTRACT], [microMaker.methods.isNotVolatile().encodeABI()]).encodeABI();
    let gma = lop.methods.arbitraryStaticCall(MM_CONTRACT, microMaker.methods.getMakerAmountChainLink(makerAmount).encodeABI()).encodeABI();
    let gta = lop.methods.arbitraryStaticCall(MM_CONTRACT, microMaker.methods.getTakerAmountChainLink(makerAmount).encodeABI()).encodeABI();

    const limitOrder = limitOrderBuilder.buildLimitOrder({
        makerAssetAddress: ABC_CONTRACT,
        takerAssetAddress: XYZ_CONTRACT,
        makerAddress: MM_CONTRACT,
        makerAmount: makerAmount,
        takerAmount: makerAmount,
        predicate: predicate,
        permit: '0x',
        interaction: '0xFF',
        getMakerAmount: gma,
        getTakerAmount: gta,
    });

    limitOrder.makerAmount = makerAmount;
    console.log(`New order created - ${JSON.stringify(limitOrder)}`);
    console.log();
    return;
}