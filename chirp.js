function numberOfChirps (num, str) {
  var x = 0;
  var chirpArray = [];

  if (str == null){
    str = "chirp"
  }

  if (num%1 === 0 && num > 0){
    while(chirpArray.length < num){
        chirpArray.push(str);
    }
    return chirpArray.join(' ');

  } else {
    return "Please enter positive whole numbers and/or integers ONLY";
  }
}
