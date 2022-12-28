class RandomValue {
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    field(min, max, field) {
        let text = "",
          upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          lowerCase = "abcdefghijklmnopqrstuvwxyz",
          numbers = "123456789",
          symbols;
    
        const quantity = this.getRandomInt(min, max);
    
        if (field === "name" || field === "city") {
          symbols = upperCase + lowerCase;
        } else if (field === "zipcode") {
          symbols = upperCase + numbers + " ";
        } else if (field === "telephone" || field === "fax") {
          symbols = "123456789";
        } else if (field === "address" || field === "company") {
          symbols = upperCase + lowerCase + numbers + ".'-#@/ ";
        } else if (field === "login") {
          symbols = upperCase + lowerCase + numbers + ".-_";
        } else if (field === "password") {
          symbols =
            upperCase + lowerCase + numbers + "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";
        }
    
        for (let i = 0; i < quantity; i++)
          text += symbols.charAt(Math.floor(Math.random() * symbols.length));
    
        return text;
      }
    
      email(min1, max1, min2, max2, min3, max3) {
        const quantityOne = this.getRandomInt(min1, max1),
          quantityTwo = this.getRandomInt(min2, max2),
          quantityThree = this.getRandomInt(min3, max3);
    
        let textOne = "",
          textTwo = "",
          textThree = "",
          textTotal = "",
          symbolsOne = "abcdefghijklmnopqrstuvwxyz0123456789._",
          symbolsTwo = "abcdefghijklmnopqrstuvwxyz0123456789",
          symbolsThree = "abcdefghijklmnopqrstuvwxyz";
    
        function createText(text, quantity, symbols) {
          for (let i = 0; i < quantity; i++) {
            text += symbols.charAt(Math.floor(Math.random() * symbols.length));
          }
          return text;
        }
    
        textOne = createText(textOne, quantityOne, symbolsOne);
        textTwo = createText(textTwo, quantityTwo, symbolsTwo);
        textThree = createText(textThree, quantityThree, symbolsThree);

        textTotal = `${textOne}@${textTwo}.${textThree}`
    
        return textTotal;
      }
}

export default RandomValue;