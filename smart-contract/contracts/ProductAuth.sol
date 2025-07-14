// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract ProductAuth {
    uint256 public productCounter;

    struct Product {
        string name;
        string description;
        string tokenURI;
        address owner;
    }

    mapping(uint256 => Product) public products;

    event ProductRegistered(uint256 indexed tokenId, string name, address indexed owner);

    function registerProduct(
        string calldata name,
        string calldata description,
        string calldata tokenURI
    ) external {
        productCounter++;
        products[productCounter] = Product(name, description, tokenURI, msg.sender);
        emit ProductRegistered(productCounter, name, msg.sender);
    }

    function verifyProduct(uint256 tokenId) external view returns (Product memory) {
        require(tokenId != 0 && tokenId <= productCounter, "Bad tokenId");
        return products[tokenId];
    }
}
