




let network;
let contract_address;
let connection;
let mainAccount;
let accounts;
let thisURL = window.location.origin.toString();

let Accounttype = "0";

let contractAddress = "0x16E0d40521116990469863F39ed67d8D6C17c691";


  

let abi = [
    {
        "constant": true,
        "inputs": [],
        "name": "PERCENTS_DIVIDER",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserDownlineCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserDividends",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "plan",
                "type": "uint8"
            }
        ],
        "name": "compound",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserTotalCompoundedNum",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserAvailable",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "INVESTMENT_PROJECT_FEE",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "TIME_STEP",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserReferrer",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserReferralTotalBonus",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalWithdrawn",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserTotalCompounded",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalCompounded",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "PERCENT_STEP",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "referrer",
                "type": "address"
            },
            {
                "name": "plan",
                "type": "uint8"
            }
        ],
        "name": "invest",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "plan",
                "type": "uint8"
            },
            {
                "name": "deposit",
                "type": "uint256"
            }
        ],
        "name": "getResult",
        "outputs": [
            {
                "name": "percent",
                "type": "uint256"
            },
            {
                "name": "profit",
                "type": "uint256"
            },
            {
                "name": "finish",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "REFERRAL_PERCENTS",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalRefBonus",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserReferralWithdrawn",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getContractBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserTotalDeposits",
        "outputs": [
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalStaked",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "commissionWallet",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "plan",
                "type": "uint8"
            }
        ],
        "name": "getPercent",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserAmountOfDeposits",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "plan",
                "type": "uint8"
            }
        ],
        "name": "getPlanInfo",
        "outputs": [
            {
                "name": "time",
                "type": "uint256"
            },
            {
                "name": "percent",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            },
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getUserDepositInfo",
        "outputs": [
            {
                "name": "plan",
                "type": "uint8"
            },
            {
                "name": "percent",
                "type": "uint256"
            },
            {
                "name": "amount",
                "type": "uint256"
            },
            {
                "name": "profit",
                "type": "uint256"
            },
            {
                "name": "start",
                "type": "uint256"
            },
            {
                "name": "finish",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "startUNIX",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "plan",
                "type": "uint8"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserTotalWithdrawnNum",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserCheckpoint",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "INVEST_MIN_AMOUNT",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserReferralBonus",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserTotalWithdrawn",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "COMPOUND_PROJECT_FEE",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "wallet",
                "type": "address"
            },
            {
                "name": "startDate",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "user",
                "type": "address"
            }
        ],
        "name": "Newbie",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "plan",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "percent",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "profit",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "start",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "finish",
                "type": "uint256"
            }
        ],
        "name": "NewDeposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Withdrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "referrer",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "referral",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "level",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "RefBonus",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "totalAmount",
                "type": "uint256"
            }
        ],
        "name": "FeePayed",
        "type": "event"
    }
]



let mainContract = undefined

let zeroAddress = '0x8e30426cc4355aEd2B36550d0E8Cd7eB7A2ED2Ff'

let plan = {
	time:"time",
	percent:"percent"
}
let deposit = {
	plan: "plan",
	percent: "percent",
	amount: "amount",
	profit: "profit",
	start: "start",
	finish: "finish"
}



let user = {
	ref: undefined,
	deposits: 0,
	checkpoint: 0,
	address: '',
	levels: 0,
	bonus: "bonus",
	tBonus: "totalBonus"
};

$(function() {
	
	createCookie()
	beginLogins()
})

function plancompound(planvalue){
	document.getElementById("plancompound").value= planvalue;
	}









let attempts = 0
async function beginLogins(){
	window.ethereum.enable()
	await userLoginAttempt()
	setTimeout(() => {
		if(user.address == undefined && attempts < 3){
			setTimeout(() => {
				if(user.address == undefined && attempts < 3){
					attempts++
					beginLogins()
				}
			}, 1000)
		}
	}, 1000)
}

async function userLoginAttempt(){
	let isConnected = false;
	await window.addEventListener('load', async function () {
		
		if (window.ethereum){
			window.web3 = new Web3(ethereum);
			isConnected = true;
		}else if(window.web3){
			window.web3 = new Web3(web3.currentProvider);
		}
		try {
			await ethereum.enable() // Request access
			
			await web3.eth.getAccounts().then(function (result) {
				user.address = result[0]
				//console.log("User " + user.address + " connected.")
				
				initContract()
			})

		}catch(error){
			console.error(error)
		}
	})
}

async function initContract(){
	try{
		await (mainContract = new web3.eth.Contract(abi,contractAddress));
		if(mainContract != undefined){

			startUp()
		}else{

			setTimeout(() => {
				initContract()
			}, 2000)
		}
	}catch(e){

		setTimeout(() => {
			initContract()
		}, 2000)
	}setInterval(function(){ 
			startUp();
	}, 5000);
}

async function startUp(){
	$('#reflink')[0].innerHTML = thisURL+"/upline/?ref="+ user.address;
	contractBalances()
    planPercents()
	await getTotalNumberOfDeposits()
	getUserReferrer()
	getUserCheckpoint()
	getUserReferralTotalBonus()
	getUserDownlineCount()
	getUserTotalDeposits()
	getUserAvailable()
	getUserReferralWithdrawn()
	getUserReferralBonus()
	getBalanceOfAccount()
	
	 
	

	let p2 = user.address.slice(42 - 5)

    $('#walletConnet')[0].innerHTML = user.address.slice(0, 4) + "..." + p2
    $('#walletConnet2')[0].innerHTML = user.address.slice(0, 4) + "..." + p2
	
	if (user.address != undefined) {
		connection="Metamask is unlocked";
		$("#metamaskConnection").text(connection);

	}else{
		connection="Metamask is locked";
		$("#metamaskConnection").text(connection);
	}
}
async function Connect() {
    var walletInfo = document.getElementById("walletConnet").text
    if (walletInfo.charAt(0) !="0"){
    Swal.fire({
        icon: 'question',
        title: "Can't connect?",
        text: 'Please switch to the Polygon network and refresh the page before trying to connect.',
        footer: '<strong><a target="_blank" href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/">How to add Polygon Network to Metamask?</a></strong>',
        timer: 8000,
        timerProgressBar: true,
      })
    }
	if (window.ethereum) {
        console.log(walletInfo)
		window.web3 = new Web3(ethereum)
		try {
			await ethereum.enable()
			let accounts = await web3.eth.getAccounts()
			currentAddr = accounts[0]
			return
		} catch (error) {
			console.error(error)
		}
	} else if (window.web3) {
		window.web3 = new Web3(web3.currentProvider)
		let accounts = await web3.eth.getAccounts()
		currentAddr = accounts[0]
		console.log(contract)
		return
	}
}

async function Connect2() {
    var walletInfo = document.getElementById("walletConnet2").text
    if (walletInfo.charAt(0) !="0"){
    Swal.fire({
        icon: 'question',
        title: "Can't connect?",
        text: 'Please switch to the Polygon network and refresh the page before trying to connect.',
        footer: '<strong><a target="_blank" href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/">How to add Polygon Network to Metamask?</a></strong>',
        timer: 8000,
        timerProgressBar: true,
      })
    }
	if (window.ethereum) {
        console.log(walletInfo)
		window.web3 = new Web3(ethereum)
		try {
			await ethereum.enable()
			let accounts = await web3.eth.getAccounts()
			currentAddr = accounts[0]
			return
		} catch (error) {
			console.error(error)
		}
	} else if (window.web3) {
		window.web3 = new Web3(web3.currentProvider)
		let accounts = await web3.eth.getAccounts()
		currentAddr = accounts[0]
		console.log(contract)
		return
	}
}

function isLocked() {
  window.web3.eth.getAccounts(function (err, accounts) {
    if (err != null) {
      //console.log(err);
      $("#lock").text(err);
    } else if (accounts.length === 0) {
      //console.log("MetaMask is locked");
      $("#lock").text("MetaMask is locked.");
    } else {
      //console.log("MetaMask is unlocked");
      $("#lock").text("MetaMask is unlocked.");
    }
  });
}
function getBalanceOfAccount() {
  window.web3.eth.getBalance(user.address, (err, wei) => {
    myBalance = web3.utils.fromWei(wei, 'ether')
    myBalanceAbr = abbreviate_number(myBalance,4)
    //console.log("Balance===>",myBalance);
    $("#getBalance").text("Account Balance:"+myBalanceAbr+" "+"POL");
})
}

 //Write functions




 
function toHexString(number){
	return '0x'+number.toString(16)
}





async function stake(planId){
    var epoch2 = Date.now();

    var InputAmountCheck = document.getElementById("InputAmount").value
//console.log(epoch2);
//epochtime
    if(InputAmountCheck >=1 && epoch2 > 1643400000000){

    let ref
      if(validateErcAddress(user.ref))
          ref = user.ref
      else if(user.ref == user.address)
          ref = zeroAddress
      else 
          ref = zeroAddress
      
      let inputAmount = toHexString($('#InputAmount')[0].value * 1e18)
    
      let res = await mainContract.methods.invest(ref, planId).send({
          from: user.address,
          value: inputAmount
      }).on("transactionHash", async (hash) => {

        Swal.fire({

            icon: 'success',
            text: 'Transaction Link: \n https://polygonscan.com/tx/'+hash,
            title: 'Investment Submitted!',
            showConfirmButton: true,
            padding: '2em',
            width: 600
          })

      
    });;
  }else{

    Swal.fire({

        icon: 'error',
        text: 'You must enter at least 1 POL in order to make an investment.',
        title: 'Investment Failed!',
        showConfirmButton: true,
        padding: '2em',
        width: 600
      })


  }

}
    

async function getUserAvailable() {
  
	return new Promise(async (resolve, reject) => {
	  let data=await mainContract.methods.getUserAvailable(user.address).call();
	  dataTrunc = data / 1e18;
	  //console.log("available",data);
	  $("#getUserAvailable").text(abbreviate_number(dataTrunc, 2));
	})
  }



async function withdraw(){  

	let planId = 1


	if(planId = 1){
	return new Promise(async (resolve, reject) => {
		 mainContract.methods.withdraw(planId-1).send({
		   from:user.address
		 }).on("transactionHash", async (hash) => {


      
              Swal.fire({
      
                  icon: 'success',
                  text: 'Transaction Link: \n https://polygonscan.com/tx/'+hash,
                  title: 'Claim Submitted!',
                  footer: '<strong>Reminder: 10% of your claim has been automatically compounded.</strong>',
                  showConfirmButton: true,
                  padding: '2em',
                  width: 600
                })

       

            
		  });;
	})
}


}

var gasPrice = '10000000000'



$("#compound").click(()=>{
	



	if(mainContract){
		mainContract.methods.compound("0").send({
			value:0,
			from:user.address,
			gasPrice:gasPrice,
		}).on("transactionHash", async (hash) => {


      
            Swal.fire({
    
                icon: 'success',
                text: 'Transaction Link: \n https://polygonscan.com/tx/'+hash,
                title: 'Compound Submitted!',
                showConfirmButton: true,
                padding: '2em',
                width: 600
              })

     

          
        });;


	}

})
 
 
 
 










  //Read Function
  async function getUserDividends() {
    
    return new Promise(async (resolve, reject) => {
      let reward=await mainContract.methods.getUserDividends(user.address).call();
      $("#getUserDividends").text("Dividend:" +web3.utils.fromWei(reward),"ether"+"  "+ "POL");
    })}

    async function getPercent() {
      let planId=1;
      
      return new Promise(async (resolve, reject) => {
        let percent=await mainContract.methods.getPercent(planId).call();

        $("#totalpreturn").text("percentage:" +percent/100+"%");
      })
      
}

let totalUserDeposits
async function getTotalNumberOfDeposits() {
    totalUserDeposits = await mainContract.methods.getUserAmountOfDeposits(user.address).call();
    $("#TotalNumberOfDeposits").text("Total Stakes: "+totalUserDeposits);
}

async function getUserReferralBonus() {
  
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserReferralBonus(user.address).call();
	dataTrunc = data / 1e18;
    //console.log("data",data);
    $("#getUserReferralBonus").text(abbreviate_number(dataTrunc, 2));
  })
}
async function getUserReferralWithdrawn() {
  
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserReferralWithdrawn(user.address).call();
	dataTrunc = data / 1e18;
    //console.log("data",data);
    $("#getUserReferralWithdrawn").text(abbreviate_number(dataTrunc, 2));
  })
}
async function getUserTotalDeposits() {
    let depositData = await mainContract.methods.getUserTotalDeposits(user.address).call();
	depositDataTrunc = depositData / 1e18;
    //console.log("depositTotal",depositData);
    $("#getUserTotalDeposits").text(abbreviate_number(depositDataTrunc, 2));
}
async function getUserDownlineCount() {
  
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserDownlineCount(user.address).call();
    //console.log("Downline",data);
    downline= $('#getUserDownlineCount')[0].innerHTML = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
    
    $("#getUserDownlineCountIndex1").text("uint:" +data[0]);
    $("#getUserDownlineCountIndex2").text("uint:" +data[1]);
    $("#getUserDownlineCountIndex3").text("uint:" +data[2]);
  })
}


async function getUserReferrer() {
  
  return new Promise(async (resolve, reject) => {
    let data = await mainContract.methods.getUserReferrer(user.address).call();
    $("#getUserReferrerAddress").text("refferer:" +data);
  })
}
async function getUserCheckpoint() {
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserCheckpoint(user.address).call();
    $("#getUserCheckpointdata").text("getUserCheckpoint:" +data);
    checkpoint = data;
  })
}
async function getUserReferralTotalBonus() {
  
  return new Promise(async (resolve, reject) => {
    let dataFull = (await mainContract.methods.getUserReferralTotalBonus(user.address).call() / 1e18);
	let data = abbreviate_number(dataFull, 2)
    $("#getUserReferralTotalBonus").text(data);
  })
}


 
function copyToClipboard(reflink) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(reflink).innerHTML);
	document.body.appendChild(aux);
	aux.select();
    aux.focus({preventScroll:true});
	document.execCommand("copy");
	document.body.removeChild(aux);

    Swal.fire({

        icon: 'success',
        text: 'Your referral link has been copied.',
        title: 'Success!',
        showConfirmButton: false,
        timer: 1750,
        padding: '2em',
        width: 600
      })


}







function clearSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges()
    } else if (document.selection) {
        document.selection.empty()
    }
}


let contractLink = 'https://polygonscan.com/address/'+ contractAddress
$('#contractLink').attr("href", ""+contractLink)



async function contractBalances(){

	let contractBalanceFull = (await mainContract.methods.getContractBalance().call() / 1e18)
	let contractBalance = abbreviate_number(contractBalanceFull, 2)

if(contractBalance > 0){

	$('#balanceContract').html(`Liquidity:  <span style='color: #8248e5; padding-left: 0.7ch;'> ${contractBalance} POL</span>` )
}




	let totalStakedFull = (await mainContract.methods.totalStaked().call() / 1e18)
	let totalStaked = abbreviate_number(totalStakedFull, 2 )
	$('#totalStaked').text(totalStaked )

    let getUserTotalCompoundedNumFull = await mainContract.methods.getUserTotalCompoundedNum(user.address).call() ;
	getUserTotalCompoundedNum = (getUserTotalCompoundedNumFull / 1e18) ;

    let getUserTotalWithdrawnNumFull = await mainContract.methods.getUserTotalWithdrawnNum(user.address).call();
	getUserTotalWithdrawnNum = (getUserTotalWithdrawnNumFull / 1e18) ;

    let getUserTotalWithdrawnFull = await mainContract.methods.getUserTotalWithdrawn(user.address).call();
	getUserTotalWithdrawn = (getUserTotalWithdrawnFull / 1e18);
    $("#totalclaimed").text (abbreviate_number(getUserTotalWithdrawn, 2));

    if (getUserTotalWithdrawnNumFull >1){
    $("#totalclaimedNum").text ( "You've claimed "+ getUserTotalWithdrawnNumFull + " times."     );
    }else if (getUserTotalWithdrawnNumFull ==1){
    $("#totalclaimedNum").text ( "You've claimed "+ getUserTotalWithdrawnNumFull + " time."     );
    }

    let getUserTotalCompoundedFull = await mainContract.methods.getUserTotalCompounded(user.address).call();
	getUserTotalCompounded = (getUserTotalCompoundedFull / 1e18);
    $("#totalcompounded").text (abbreviate_number(getUserTotalCompounded, 2));

    if (getUserTotalCompoundedNumFull >1){
        $("#totalcompoundedNum").text ( "You've manually compounded "+ getUserTotalCompoundedNumFull+ " times."     );
        }else if (getUserTotalCompoundedNumFull ==1){
        $("#totalcompoundedNum").text ( "You've manually compounded "+ getUserTotalCompoundedNumFull+ " time."     );
        }

    let userDepositsFull = await mainContract.methods.getUserTotalDeposits(user.address).call();
	userDeposits = ((userDepositsFull / 1e18) *25.00    ) ;
    $("#maxPayout").text(abbreviate_number(userDeposits, 2));

    let investmentStatus =  (getUserTotalWithdrawn/userDeposits)*100
    $("#investmentStatus").text(abbreviate_number(investmentStatus, 2));
    $('#theprogressbar').width(investmentStatus + "%").attr('aria-valuenow', investmentStatus);

    if ((investmentStatus <100) && (investmentStatus >0)){
    $("#progressnumber").text("You have claimed " + abbreviate_number(investmentStatus, 2) + "% of your total payout.");
    }else if (investmentStatus >=100) {
        $("#progressnumber").text("You have claimed all of your Total Payout!");
        }else if (investmentStatus <=0) {
            $("#progressnumber").text("");
        }

	let totalWithdrawnFull = (await mainContract.methods.totalWithdrawn().call() / 1e18)
	let totalWithdrawn = abbreviate_number(totalWithdrawnFull, 2 )
	$('#totalWithdrawn').text(totalWithdrawn )

	let totalCompoundedFull = (await mainContract.methods.totalCompounded().call() / 1e18)
	let totalCompounded = abbreviate_number(totalCompoundedFull, 2 )
	$('#totalCompounded').text(totalCompounded )


}

async function planPercents() {

    var InputAmountCalc = document.getElementById("InputAmount").value

    if (InputAmountCalc>0){

		let percent = (await mainContract.methods.getPercent(0).call())
        let percentText = parseFloat(percent/1000)+ "%"
		$('#dailypreturn')[0].innerHTML = "Daily % Return: "+  `<span style='color: #8248e5;'>${parseFloat(percentText)}%</span> `
        let totalPercent = percent*100
        $('#totalpreturn')[0].innerHTML = "Total % Return: "+`<span style='color: #8248e5;'>${parseFloat(totalPercent/1000)}%</span> `

        let totalreturn = abbreviate_number((InputAmountCalc/100*totalPercent/1000),4)
        let dailyreturn = totalreturn/100
        let dailymreturnAbr = abbreviate_number(dailyreturn,4)
        $('#totalmreturn')[0].innerHTML ="Total POL Return: "+ `<span style='color: #8248e5;'>${parseFloat(totalreturn)}</span> `
		$('#dailymreturn')[0].innerHTML = "Daily POL Return: "+  `<span style='color: #8248e5;'>${parseFloat(dailymreturnAbr)}</span> `
        
        

console.log(percent/1000);


        var today = new Date();
        var recEpoch = new Date();
        var recDateDays = (InputAmountCalc / (dailymreturnAbr))
        var recDateDaysAbr = abbreviate_number(recDateDays,2)
        var recDate = new Date(   (recEpoch.setDate(today.getDate()+recDateDays))  );
        var recDateDisplay = recDate.toLocaleDateString('en-US') 


    $("#finishdate").html(`Initial Return Date (${recDateDaysAbr} Days): `+  `<span style='color: #8248e5;'>${recDateDisplay}</span> `   )




    }
}

//COOKIE CREATION
function createCookie() {
    if (window.location.href.indexOf("ref=") < 0) {
        user.ref = zeroAddress
    }else{
        const index = window.location.href.indexOf("ref=") + 4
		let ref = window.location.href.slice(index, index + 42)
		if(window.localStorage) {
			localStorage.setItem('referrerAddress', ref);
		}

		let date = new Date();
		date.setTime(date.getTime() + (10000 * 24 * 60 * 60 * 1000))
		document.cookie = "ref=" + ref + "; expires=" + date.toGMTString()
	}
	accessCookie("ref")
}

//ACCESS COOKIE
function accessCookie(cookieName) {
    let name = cookieName + "=";
	let accessedCookie
    let allCookieArray = document.cookie.split(';');
    for (let i = 0; i < allCookieArray.length; i++) {
        let temp = allCookieArray[i].trim();
        if (temp.indexOf(name) == 0){
			accessedCookie = temp.substring(name.length, temp.length)
			if(validateErcAddress(accessedCookie))
				user.ref = accessedCookie
			//console.log("Referrer: " + user.ref)
		}
    }
}

function validateErcAddress(address) {
    if (typeof address !== 'string')
        return false;

    if (address[0] === "0" && address[1] === "x"&& address.length == 42)
         return true;

    return false;
}

function abbreviate_number(_num, fixed) {
    let num = parseFloat(_num)
    if (num === null) {
        return null;
    } // terminate early
    if (num === 0) {
        return '0';
    } // terminate early
    fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
    var b = (num).toPrecision(2).split("e"), // get power
        k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
        c = k <= 1000 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
        d = c < 0 ? c : Math.abs(c); // enforce -0 is 0
        e = d// + ['', 'K', 'M', 'B', 'T'][k]; // append power

    return e;
}


const countdownTimer =()=> {
	const difference = +new Date("2024-11-07T19:59:59Z") - +new Date();
    var countDiv = document.getElementById('timer-full');
		const days= Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours= Math.floor((difference / (1000 * 60 * 60)) % 24);
		const minutes= Math.floor((difference / 1000 / 60) % 60);
		const seconds= Math.floor((difference / 1000) % 60);
        document.getElementById("day").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if(difference < 0){
countDiv.style.display = 'none';

        }
    };
  setInterval(countdownTimer, 1000);


  




setInterval(() => {

        
  
    //console.log("ping")

    var InputAmountCalc = document.getElementById("InputAmount").value

    if(InputAmountCalc > 0){


    var dailymreturnFull = InputAmountCalc / 150
	let dailymreturn = abbreviate_number(dailymreturnFull, 6 )

    var totalmreturnFull = InputAmountCalc * 1.00
    let totalmreturn = abbreviate_number(totalmreturnFull, 4 )

    var days = 6
    var epoch = Date.now();
    var today = new Date();
    var recEpoch = new Date();
    var compEpoch = new Date();

    var recDateDays = 6

    var recDate = new Date(   (recEpoch.setDate(today.getDate()+recDateDays))  );
    var recDateDisplay = recDate.toLocaleDateString('en-US') 
    var compDate = new Date(   (compEpoch.setDate(today.getDate() +(days)   ))  );
    var compDateDisplay = compDate.toLocaleDateString('en-US')



//$("#dailymreturn").html(`Daily POL Return: <span style='color: #8248e5;'>${dailymreturn}</span>`)
//$("#totalmreturn").html(`Total POL Return: <span style='color: #8248e5;'>${totalmreturn}</span>`)
//$("#totalpreturn").html(`Total % Return: <span style='color: #8248e5;'>150%</span>`)
//$("#finishdate").html(`Initial Return Date (6 Days): `+  `<span style='color: #8248e5;'>${recDateDisplay}</span> `   )
$("#returndate").html(`Finish Date (6 Days): `+  `<span style='color: #8248e5;'>${compDateDisplay}</span> `         )

//console.log(epoch)
 //epochtime
if (epoch < 1643400000000
            ){
    
    $("#investmatic").click(()=>{
              
        Swal.fire({

            icon: 'error',
            text: 'Please wait until we have launched before Investing.',
            title: 'We have not launched yet!',
            showConfirmButton: true,
            padding: '2em',
            width: 600
          })
    });
}





    }




}, 1000);

$("#minMaxQ").click(()=>{
              
    Swal.fire({

        icon: 'question',
        text: 'The base daily return rate starts at 25%. This increases by 0.001% everyday since we launched and only applies to new investments. For example, if you invest on day 1, your total payout is 150%. - The minimum total payout is based off investing on day 1.',
        title: 'Minimum Total Payout',
        showConfirmButton: true,
        padding: '2em',
        width: 600
      })
})