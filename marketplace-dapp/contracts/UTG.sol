// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract UnsatiableGuy is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    mapping(string => uint8) existingURIs;

    constructor() ERC721("UnsatiableGuy", "UTG") {}

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function isContentOwned(string memory _uri) public returns (bool) {
        return existingURIs[_uri] == 1;
    }

    function payToMint(
        address recipient,
        string memory _metadataURI
        ) public payable returns (uint256) {
            require(existingURIs[_metadataURI] != 1, "NFT already minted");
            require(msg.value >= 0.5 ether, "Need to pay up");

            uint256 newItemId = _tokenIdCounter.current();
            _tokenIdCounter.increment();

            _mint(recipient, newItemId);
            _setTokenURI(newItemId, _metadataURI);

            existingURIs[_metadataURI] == 1;
        }

}