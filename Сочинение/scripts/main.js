let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bg.jpeg') {
      myImage.setAttribute('src','images/i.jpg');
    } else {
      myImage.setAttribute('src','images/bg.jpeg');
	
    }

}
	let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hi, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();s
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hi, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}