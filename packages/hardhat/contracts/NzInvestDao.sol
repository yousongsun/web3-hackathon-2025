// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleDao {
    // Struct to represent a proposal
    struct Proposal {
        uint256 id;
        string description;
        uint256 voteCount;
        bool executed;
    }

    // Mapping to store proposals
    mapping(uint256 => Proposal) public proposals;

    // Mapping to track whether an address has voted on a proposal
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    // Total number of proposals
    uint256 public proposalCount;

    // Mapping to store member balances (governance tokens)
    mapping(address => uint256) public balances;

    // Event to log proposal creation
    event ProposalCreated(uint256 id, string description);

    // Event to log a vote
    event Voted(uint256 proposalId, address voter, uint256 voteWeight);

    // Event to log proposal execution
    event ProposalExecuted(uint256 proposalId);

    // Modifier to check if the caller is a member (has governance tokens)
    modifier onlyMembers() {
        require(balances[msg.sender] > 0, "Not a member");
        _;
    }

    // Constructor to initialize the Dao with initial members and balances
    constructor(address[] memory _initialMembers, uint256[] memory _initialBalances) {
        require(_initialMembers.length == _initialBalances.length, "Arrays length mismatch");

        for (uint256 i = 0; i < _initialMembers.length; i++) {
            require(_initialBalances[i] > 0, "Balance must be greater than 0");
            balances[_initialMembers[i]] = _initialBalances[i];
        }
    }

    // Function to create a new proposal
    function createProposal(string memory _description) public onlyMembers {
        proposalCount++;
        proposals[proposalCount] = Proposal({
            id: proposalCount,
            description: _description,
            voteCount: 0,
            executed: false
        });
        emit ProposalCreated(proposalCount, _description);
    }

    // Function to vote on a proposal
    function vote(uint256 _proposalId) public onlyMembers {
        require(_proposalId > 0 && _proposalId <= proposalCount, "Invalid proposal ID");
        require(!hasVoted[_proposalId][msg.sender], "Already voted");

        // Record the vote
        hasVoted[_proposalId][msg.sender] = true;
        proposals[_proposalId].voteCount += balances[msg.sender];

        emit Voted(_proposalId, msg.sender, balances[msg.sender]);
    }

    // Function to execute a proposal (for simplicity, this just marks it as executed)
    function executeProposal(uint256 _proposalId) public onlyMembers {
        require(_proposalId > 0 && _proposalId <= proposalCount, "Invalid proposal ID");
        require(!proposals[_proposalId].executed, "Proposal already executed");

        // Check if the proposal has enough votes (e.g., simple majority)
        if (proposals[_proposalId].voteCount > totalSupply() / 2) {
            proposals[_proposalId].executed = true;
            emit ProposalExecuted(_proposalId);
        }
    }

    // Helper function to get the total supply of governance tokens
    function totalSupply() public view returns (uint256) {
        return address(this).balance;
    }
}
