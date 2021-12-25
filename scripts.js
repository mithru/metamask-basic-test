
const ethereumButton = document.querySelector('#key');


async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  document.getElementById('key').innerHTML = account + '';
  document.getElementById('key').style.fontSize = '0.7em'
  document.getElementById('details').innerHTML = "The above is your MetaMask wallet's public key. It is safe to share this key with people or services you wish to interact with. ";
}


if (typeof window.ethereum !== 'undefined') {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "red";

  console.log(ethereum.isMetaMask)
  console.log(ethereum.networkVersion)
  // ethereum.request({ method: 'eth_requestAccounts' });
  console.log(ethereum.selectedAddress)

  if(ethereum.selectedAddress === null){
    ethereumButton.addEventListener('click', () => {
      getAccount();
    });
  }

  document.getElementsByTagName("BODY")[0].style.backgroundColor = "green";

  document.getElementById('mainText').innerHTML = "This page tests if your browser has MetaMask installed and running. Looks like a MetaMask wallet is already connected. ✅"
  document.getElementById('key').innerHTML = "Click <u>here</u> to connect to your MetaMask Wallet and reveal your public key."

} else {
  console.log("ethereum is not defined");
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "maroon";
  document.getElementById('mainText').innerHTML = "This page tests if your browser has MetaMask installed and running. At the moment, the page did not detect any MetaMask wallet connected. ❌ <br> <br> The easiest way to use Metamask is by opening the Chrome desktop web browser and <a href='https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn'> downloading the MetaMask Extension by clicking this link</a>."

}
