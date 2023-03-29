class ShiftCipher {
  constructor(shift) {
    this.shift = shift;
  }

  encrypt(plainString) {
    let encryptString = "";
    let tempString = plainString.toUpperCase();

    for (let i=0; i < tempString.length; i++) {
      let charNum = tempString.charCodeAt(i);

      if (charNum <= 90 && charNum >= 65) {
        charNum += this.shift;
        if (charNum > 90) {
          charNum -= 26;
        }
      }
      encryptString += String.fromCharCode(charNum);
    }
    return encryptString;
  }

  decrypt(encryptString) {
    let decryptedString = "";
    const lowerCaseString = encryptString.toLowerCase();

    for (let i =0; i < lowerCaseString.length; i++) {
      let charCode = lowerCaseString.charCodeAt(i);
      if (charCode <= 122 && charCode >= 97) {
      charCode -= this.shift;
       if (charCode < 97) {
        charCode += 26;
        }
      }
      decryptedString += String.fromCharCode(charCode);
      }
      return decryptedString;
  }
};

const cipher = new ShiftCipher(1);
console.log(cipher.encrypt('I love to code!'));
console.log(cipher.decrypt('J MPWF UP DPEF!'))