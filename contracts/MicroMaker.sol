pragma solidity ^0.8.0;

import "./ERC20.sol";

interface AggregatorV3Interface {

  function decimals() external view returns (uint8);
  function description() external view returns (string memory);
  function version() external view returns (uint256);

  function getRoundData(uint80 _roundId)
    external
    view
    returns (
      uint80 roundId,
      int256 answer,
      uint256 startedAt,
      uint256 updatedAt,
      uint80 answeredInRound
    );
  function latestRoundData()
    external
    view
    returns (
      uint80 roundId,
      int256 answer,
      uint256 startedAt,
      uint256 updatedAt,
      uint80 answeredInRound
    );

}

contract MicroMaker {

    AggregatorV3Interface internal priceFeed;

    address BANK_ADDRESS = 0xB75DFCccbfBD420A1D5c3a6C28459b817456Bf97;
    address LOP_ADDRESS = 0x3ef51736315F52d568D6D2cf289419b9CfffE782;
    address ABC_ADDRESS;
    address XYZ_ADDRESS;

    ERC20 tokenABC;
    ERC20 tokenXYZ;

    int private _lastPrice = 0;

    constructor(address abcAddress, address xyzAddress) {
        ABC_ADDRESS = abcAddress;
        tokenABC = ERC20(abcAddress);

        XYZ_ADDRESS = xyzAddress;
        tokenXYZ = ERC20(xyzAddress);

        priceFeed = AggregatorV3Interface(0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9);
    }

    function isValidSignature(bytes32 hash, bytes memory signature) public view returns(bytes4) {
        return this.isValidSignature.selector;
    }

    function approveABC(uint256 amount) public returns (bool) {
        return tokenABC.approve(LOP_ADDRESS, amount);
    }

    function approveXYZ(uint256 amount) public returns (bool) {
        return tokenXYZ.approve(LOP_ADDRESS, amount);
    }

    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len;
        while (_i != 0) {
            k = k-1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }

    function concatenate(string memory s1, string memory s2) public pure returns (string memory) {
        return string(abi.encodePacked(s1, s2));
    }

    function getMakerAmountChainLink(uint256 takerAmount) public view returns (uint256) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData(); // 1 maker == <price> taker
        uint256 ma = (takerAmount * (10**8)) / uint256(price);
        
        return (takerAmount * (10**8)) / uint256(price);
    }

    function getTakerAmountChainLink(uint256 makerAmount) public view returns (uint256) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData(); // 1 maker == <price> taker

        return (makerAmount / (10**8)) * uint256(price);
    }

    function isNotVolatile() public view returns (bool) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();

        int[] memory prices = new int[](10);
        for (uint80 i = 1; i < 10; i++) {
            (uint80 a, int p, uint b, uint c, uint80 d) = priceFeed.getRoundData(roundID - i);
            prices[i] = p;
        }

        int sum = 0;
        int max = -1;
        int min = -1;
        for (uint80 i = 0; i < 10; i++) {
            sum += prices[i];

            if (max == -1) max = prices[i];
            if (min == -1) min = prices[i];

            if (prices[i] > max) max = prices[i];
            if (prices[i] < min) min = prices[i];
        }
        int256 average = sum / 10;

        int volatility = 0;
        for (uint80 i = 0; i < 10; i++) {
            volatility += (average - prices[i])*(average - prices[i]);
        }
        volatility /= 9;

        // string memory mess = "message: ";
        // mess = concatenate(mess, uint2str(uint(price)));
        // mess = concatenate(mess, " : ");
        // mess = concatenate(mess, uint2str(uint(prices[9])));
        // mess = concatenate(mess, " : ");
        // mess = concatenate(mess, uint2str(uint(average)));
        // mess = concatenate(mess, " : ");
        // mess = concatenate(mess, uint2str(uint(max)));
        // mess = concatenate(mess, " : ");
        // mess = concatenate(mess, uint2str(uint(volatility)));

        return volatility < max * max / 5;
    }

    function notifyFillOrder(address makerAsset, address takerAsset, uint256 makingAmount, uint256 takingAmount, bytes memory interaction) public {
        ERC20 asset = ERC20(makerAsset);
        uint256 bal = asset.balanceOf(address(this));
        if (bal < makingAmount) {
            asset.transferFrom(BANK_ADDRESS, address(this), makingAmount - bal);
        }
    }
}