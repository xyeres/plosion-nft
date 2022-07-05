// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Card is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Card", "CARD") {}

    function draw(address player, string memory tokenURI)
        public onlyOwner
        returns (uint256)
    {
      uint256 newCardId = _tokenIds.current();
      _mint(player, newCardId);
      _setTokenURI(newCardId, tokenURI);
      _tokenIds.increment();
      return newCardId;
    }
}
