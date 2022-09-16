const { expect } = require("chai");
const { ethers } = require("hardhat");

//describe for deploy the smart contract
describe("This Is MarketPlace", function () {

  let NFTMarket;
  let NFT;

it("Deploy Contract", async function () {
  
[per1,per2,per3,per4] = await ethers.getSigners()
   
  NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  NFT = await NFTMarket.deploy(60,30,10);
  await NFT.deployed(); 
  console.log(
      "This is SmartContract",NFT.address);  
  }),
//call mint function first time to owner side & its work owner mint NFT
it("call Mint Function first time & addr1(owner) call it", async function(){
console.log("Owner address(per1) that deplopy the contract",per1.address);
let mintToken = await NFT.safeMint(per1.address,1,"0x00","Mohsin");
balance = await NFT.balanceOf(per1.address);
console.log("after Mint NFT: ",balance.toString());
}),

//call for random address,
//its give error because public sale not active because when public sale not
//active only whitelisted addresses can mint nft
it("call Mint Function second time & addr2 call it", async function(){
  console.log("random address (per2)",per2.address);
  let mintToken = await NFT.connect(per2).safeMint(per2.address,2,"0x00","Ali");
  balance = await NFT.balanceOf(per2.address);
  console.log("after Mint NFT: ",balance.toString());
  }),

//now random address (per2) add to white list for allow whitelisted minting 
it("Add to whiteList addr2", async function(){
  let Cwhitelsit = await NFT.whiteListed(per2.address);
  console.log("address2 white listed cheek ?: ",Cwhitelsit);
  let addtowhitelist = await NFT.addAndRemoveWhiteList(per2.address,true);
  let whitelsit = await NFT.whiteListed(per2.address);
  console.log("after add adreess to white list cheek ?:",whitelsit);
  }),

//again add random number (per3) to white list for allow minting 
  it("Add to whiteList addr3", async function(){
    let Cwhitelsit = await NFT.whiteListed(per3.address);
    console.log("address3 white listed cheek ?",Cwhitelsit);
    let addtowhitelist = await NFT.addAndRemoveWhiteList(per3.address,true);
    let whitelsit = await NFT.whiteListed(per3.address);
    console.log("after add address 3 to white list cheek ? :",whitelsit);
    }),


//now call the from radom number (per2) after add white list and its work 
//because its add to white list 
it("call Mint Function after add white list address2", async function(){
  console.log("random number (per2) after add whitelist",per2.address);
  let mintToken = await NFT.connect(per2).safeMint(per2.address,2,"0x00","Ali");
  balance = await NFT.balanceOf(per2.address);
  console.log("after Mint NFT: ",balance.toString());
  }),

////now call the from radom number (per3) after add white list and its work 
//because its add to white list 
it("call Mint Function after add white list address3", async function(){
    console.log("############",per3.address);
    let mintToken = await NFT.connect(per3).safeMint(per3.address,3,"0x00","SRJ");
    balance = await NFT.balanceOf(per3.address);
    console.log("after Mint NFT: ",balance.toString());
    })

//now cheek the pause function for pause minting and other functions 
it("Pause Call for stop mintig", async function () {
 
  //for pause the minting 
  let pause = await NFT.pause();
  let paused = await NFT.paused();
  console.log("Minting Paused",paused);
 }),

// after call pause function now lets try to NFT mint from admin side
//& its not work because psuse funtion is activated
it("owner call Mint Function after pause ", async function(){
  console.log("owner address(per1) mint after pause",per1.address);
  let mintToken = await NFT.safeMint(per1.address,4,"0x00","Kami");
  balance = await NFT.balanceOf(per1.address);
  console.log("after Mint NFT: ",balance.toString());
  });

//as we see becuas of pause function active minting can not possible 
//so call unpause for minting enable 
it("UnPause call for start minting", async function () {
 
    //for pause the minting 
    let unpause = await NFT.unpause();
    let paused = await NFT.paused();
    console.log("Minting Paused",paused);
   });
//after unpause now we call try to mint nft 
//owner call this function & its work
it("owner call Mint Function after unpause", async function(){
    console.log("owner address call after unpause",per1.address);
    let mintToken = await NFT.safeMint(per1.address,4,"0x00","Kami");
    balance = await NFT.balanceOf(per1.address);
    console.log("after Mint NFT: ",balance.toString());
    });

//now cheek the remain token from owner side 
it("Cheek Remnain Token From owner before Public sale Active ", async function(){
      let AdminToken = await NFT.admin();
      console.log("Before public sale active : ",AdminToken);
    });

//now cheek the remain token from whitelisted  
it("Cheek Remnain Token From WhiteList before Public sale Active", async function(){
      let whitelistToken = await NFT.whiteListmint();
      console.log("Before public sale active : ",whitelistToken);
    });

//now cheek the remain token from Public side
//becuase public sale is not active that why no body can mint public allow functions     
it("Cheek Remnain Token From Public before Public sale Active", async function(){
      let PublicTokens = await NFT.Public();
      console.log("Before public sale active : ",PublicTokens);
    });
  
//now active public sale for minting pulic token
//after active public sale whitedlisted allow token also plus to 
//public mintig     
it("Active the Public Sale", async function(){ 
    let publicSale = await NFT.PublicSale(true);
    let Sale = await NFT.publicSale();
    console.log("public sale active? : ",Sale);
  });

//call per2 white listed address after public sales active 
it("call Mint Function after public sales active", async function(){
    console.log("address (per2)",per2.address);
    let mintToken = await NFT.connect(per2).safeMint(per2.address,5,"0x00","Mohsin");
    balance = await NFT.balanceOf(per2.address);
    console.log("after Mint NFT: ",balance.toString());
    });

//call per3 white listed address after public sales active     
it("call mint Function after public sales active", async function(){
      console.log("per3 address",per3.address);
      let mintToken = await NFT.connect(per3).safeMint(per3.address,6,"0x00","ALi");
      balance = await NFT.balanceOf(per3.address);
      console.log("after Mint NFT: ",balance.toString());
  });
  
//cheek all allow tokens after public sale active 
it("Cheek Remnain Token From Admin after Public Sale Active ", async function(){      
    let AdminToken = await NFT.admin();
    console.log("After public sale active : ",AdminToken);
  });
it("Cheek Remnain Token From WhiteList after Public Sale Active", async function(){
    let whitelistToken = await NFT.whiteListmint();
    console.log("After public sale active : ",whitelistToken);
  });
it("Cheek Remnain Token From Public after Public Sale Active", async function(){
    let PublicTokens = await NFT.Public();
    console.log("After public sale active : ",PublicTokens);
  });

it("Cheek Remnain Token From total after Public Sale Active", async function(){
    let totalTokens = await NFT.total();
    console.log("After public sale active : ",totalTokens);
  });

});
  