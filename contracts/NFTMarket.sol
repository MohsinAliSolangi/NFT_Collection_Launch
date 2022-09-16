// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract NFTMarket is ERC721, ERC721URIStorage, Pausable, Ownable, ERC721Burnable {
    constructor(uint256 _publicMinting, uint256 _whiteListMinting, uint _PlatformMinting) ERC721("IEC", "IT") {
        require(_publicMinting+_whiteListMinting + _PlatformMinting == 100,"You Enter morethan supply");
        Public= _publicMinting;
        whiteListmint =_whiteListMinting;
        admin = _PlatformMinting;
        total = Public+ whiteListmint;
        whiteListed[msg.sender];
    }
    bool public publicSale;
    mapping (uint=>string) public NFTName;
    mapping (address=>bool) public whiteListed;

    uint256 public totalSupply=100;
    uint256 public Public;
    uint256 public whiteListmint;
    uint256 public  admin;
    uint256 public total;
    
    /**
    * @dev PublicMinting is used to update values of minting .
    * @param _publicMinting - public minting value
    * @dev This functions is used to update values of public minting .
    */
     function PublicMinting (uint256 _publicMinting) external onlyOwner {
        Public= _publicMinting;
        }
    
    /**
    * @dev whiteListMinting is used to update values of minting .
    * @param _whiteListMinting - _whiteListMinting user minting value
    * @dev This functions is used to update values of whiteListMinting.
    */
    function whiteListMinting (uint256 _whiteListMinting) external onlyOwner {
        whiteListmint =_whiteListMinting;
        }
    

     /**
    * @dev PlatformMinting is used to update values of minting .
    * @param _PlatformMinting - _PlatformMinting user minting value
    * @dev This functions is used to update values of PlatformMinting.
    */
    function PlatformMinting (uint256 _PlatformMinting) external onlyOwner {
       admin = _PlatformMinting;
       }
    
    /**
     * @dev SetbaseURI for computing {tokenURI}. If set, the resulting URI for each
     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty
     * by default, can be overridden in child contracts.
     * @param _url - its tokin base uri before hash its attech and help to open website
     */
    function SetbaseURI(string memory _url) external view returns(string memory){
        require(whiteListed[msg.sender] == true || owner() == msg.sender,"Your are Not in WhiteList"); 
        _url=_baseURI();
        return _url;}
    
    /**
    * @dev PublicSale is used to update values of minting .
    * @param _value - public sale type (true) for active public sale
    * @dev This function is decide to when start public sale & when it start
    * whitle list minting is off 
    */
    function PublicSale (bool _value) public onlyOwner {
        publicSale=_value;}
    
    /**
    * @dev addAndRemoveWhiteList is allow & deny to address for mintings 
    * @param _value - whiteList address (true) for allow to mintings
    * @dev This function is decide how can minting the nft
    */
    function addAndRemoveWhiteList (address to, bool _value) public onlyOwner {
        whiteListed[to]=_value;}
    
    /**
    * @dev pause is allow for mintings
    * @dev This function is allow to minting the nfts
    */
    function pause() public onlyOwner {
        _pause();
    }

    /**
    * @dev unpause is deny for mintings
    * @dev This function is deny to minting the nfts
    */
    function unpause() public onlyOwner {
        _unpause();
    }

    /**
    * @dev safeMint is use for minting the nfts.
    * @param tokenId - this for which token you want to mint
    * @param uri - this is the uri of nfts
    * @param name - in this you put the name 
    * @dev This function is for minting the NFts  
    */
    function safeMint(address to, uint256 tokenId, string memory uri, string memory name )
        public
    
    {
        if( publicSale == false){
        require(whiteListed[to] == true || owner() == msg.sender,"Your are Not in WhiteList");
        require(whiteListmint!=0,"white listed minted all");
        require(balanceOf(to) | balanceOf(msg.sender) <=5,"Morethan 5 are notAllowed");
        NFTName[tokenId]=name;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        if(owner() == msg.sender)
        {
            admin--;
        }
        else 
        {
            whiteListmint--;
        }
    }
    
    else{ 

        require(balanceOf(to) <=5,"Morethan 5 are notAllowed");
        require(balanceOf(msg.sender)<=5,"Morethan 5 are notAllowed"); 
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        NFTName[tokenId]=name;
        
        if(owner() == msg.sender)
        {
            admin--;
        }
        else 
        {
                
            total--;
        }
        }
       
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, tokenId);
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
}