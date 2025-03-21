// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Use openzeppelin for ERC20 token and Ownable (if needed)
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract RealEstate {
    // State Variables
    address public immutable owner;
    uint256 public propertyPrice;
    uint256 public totalPropertiesSold;
    mapping(address => uint256) public investorRealEstateCount;

    // Address of the DAO token
    IERC20 public daoToken;

    // Events
    event PropertyPurchased(address indexed investor, uint256 propertyId, uint256 value);
    event TokensIssued(address indexed investor, uint256 amount);

    // Constructor to initialize owner and token address
    constructor(address _owner, address _daoToken, uint256 _propertyPrice) {
        owner = _owner;
        daoToken = IERC20(_daoToken);
        propertyPrice = _propertyPrice;
    }

    // Modifier to ensure the caller is the owner
    modifier isOwner() {
        require(msg.sender == owner, "Not the Owner");
        _;
    }

    // Modifier to ensure enough Ether is sent to purchase the property
    modifier hasEnoughFunds() {
        require(msg.value >= propertyPrice, "Not enough funds to purchase property");
        _;
    }

    /**
     * Function that allows an investor to purchase real estate
     */
    function purchaseRealEstate() external payable hasEnoughFunds {
        // Increment property counter
        totalPropertiesSold += 1;
        investorRealEstateCount[msg.sender] += 1;

        // Trigger event for real estate purchase
        emit PropertyPurchased(msg.sender, totalPropertiesSold, msg.value);

        // Issue tokens from the DAO as a reward for the real estate purchase
        uint256 tokensToIssue = calculateTokens(msg.value);
        require(daoToken.transfer(msg.sender, tokensToIssue), "Token transfer failed");

        // Emit event for token issuance
        emit TokensIssued(msg.sender, tokensToIssue);
    }

    /**
     * Function to calculate the number of tokens to issue
     * This can be customized to any logic you prefer
     */
    function calculateTokens(uint256 value) internal pure returns (uint256) {
        // For simplicity, let's say 1 Ether = 100 tokens
        return value * 100;
    }

    /**
     * Function that allows the owner to withdraw Ether from the contract
     */
    function withdraw() external isOwner {
        (bool success, ) = owner.call{ value: address(this).balance }("");
        require(success, "Failed to send Ether");
    }

    /**
     * Function that allows the contract to receive ETH
     */
    receive() external payable {}
}
