const cl = console.log;

const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const cleaner = (str) => {
  const regex = /[\s~`'"_\-+=!@#$%^&*(){}|\\\/?.>,<:;]/g;

  str = str.replace(regex, '');
  return str;
};

const lowercaseAll = (str) => {
  str = str.toLowerCase();
  return str;
};

const reverseValue = (str) => {
  const stringReversed  = [...str].reverse().join('');

  str = stringReversed;
  return str;
};

const resetInput = () => textInput.textContent = "";

// Main function to handle everything
const palindromeCheck = () => {
  result.classList.remove("hide");

  let str = textInput.value;

  let strCopy = [...str].join('');

  if (str) {
    strCopy = cleaner(strCopy);
    strCopy = lowercaseAll(strCopy);
    
    let strCopyReversed = reverseValue(strCopy);
    let isMatch = strCopy === strCopyReversed;

    if (isMatch) {
      result.innerHTML = `<span style="font-weight:bold;">${str}</span> is a palindrome`;
    } else { 
      result.innerHTML = `<span style="font-weight:bold;">${str}</span> is not a palindrome`;
    };

    resetInput();
  } else {
    const errMsg = "Please input a value";
    alert(errMsg);
  }
  return;
}

checkButton.addEventListener('click', palindromeCheck);