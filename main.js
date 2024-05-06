function newquote() {
  // Make an Array of Strings or Quotes in this Case
  const quotes = [
    "You are the shuckiest shuck faced shuck in the world! ― James Dashner, The Maze Runner",
    "I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do. ― C. JoyBell C.",
    "“Insane means fewer cameras!” ― Ally Carter, Only the Good Spy Young",
    "AAAAAAAAAAAAHHHRHGHHHGH thump ― Tarhiel, Elder Scrolls 3: Morrowind ",
    "I WILL KILL YOUR DICKS! ― Trishka Novak, Bulletstorm ",
    "... ― Link, The Legend of Zelda",
  ];
  // Make JS Generate a Random Number the Object quotes.length counts the Strings in the Array
  var randomnumber = Math.floor(Math.random() * quotes.length);
  //Get Div by ID and past RandomString from Array in There
  document.getElementById("Display").innerHTML = quotes[randomnumber];
}
