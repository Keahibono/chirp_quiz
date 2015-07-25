function numberOfChirps(num, str, chirpArray) {
  if (str === void(0)){
    str = "chirp";
  }

  if (chirpArray === void(0)){
    chirpArray = [];
  }

  if (num%1 === 0 && num >= 0){

    if (num <= 0){
      return chirpArray.join(" ");

    } else {
      chirpArray.push(str);
      return numberOfChirps(num-1, str, chirpArray);
    }
  } else {
    return "Please enter positive whole numbers and/or integers ONLY";
  }
}
