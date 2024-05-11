function rollDice() {
    // Generate a random number between 1 and 6
    let randomNumber = Math.floor(Math.random() * 6) + 1;
  
    // Update the image source based on the random number
    let imageSource = 'img/' + randomNumber + '.png';
    document.getElementById('ludo').src = imageSource;
  }