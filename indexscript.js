var choices = ['rock', 'paper','scissors'];
var userChoice;
var computerChoice;
// var userPoints;
// var compPoints;
var userStyle = {
  border: "10px solid #00b894",
  width: "240px",
  height: "240px"
}
var compStyle = {
  border: "10px solid #e84393",
  width: "240px",
  height: "240px"
}
// ---------- start game ------------------------

function gameStart() {
  computerChoose();
  userChoose();
}

// =============== game functions =====================
function userChoose() {
  $('img').on("click", function(){
    $(this).css(userStyle)
    $("h1").hide();
    $("h4").hide();
    userChoice = this.id;
    checkWin();
    return userChoice;

  })
}

function computerChoose() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)]
  return computerChoice;
}

function checkWin() {
  if (userChoice === 'rock'){
    $('#userMessage').text("You chose the steady rock!");
      if (computerChoice === 'paper'){
        $('#compMessage').text("Computer chose paper!")
        $('#scissors').hide();
        $('#outcome').text("PAPER SMOTHERS YOU! YOU LOSE!")}
      else if (computerChoice === 'scissors'){
        $('#compMessage').text("Computer chose: scissors!")
        $('#outcome').text("YOU CRUSH THE SCISSORS! YOU WIN!");
        $('#paper').hide();}
      else 
        {$('#compMessage').text("But so did the computer!");
        $('#outcome').text("A TIE!");
        $('#scissors').hide();
        $('#paper').hide();}}
      
  else if (userChoice === 'paper'){
      $('#userMessage').text("You chose beloved paper!");
      if (computerChoice === 'scissors'){
        $('#compMessage').text("Computer chose scissors!")
        $('#rock').hide();
        $('#scissors').css(compStyle);
        $('#outcome').text("SCISSORS CUT YOU TO BITS! YOU LOSE!")}
      else if (computerChoice === 'rock'){
        $('#rock').css(compStyle);  
        $('#compMessage').text("Computer chose: rock!")
        $('#outcome').text("YOU SMOTHER THE ROCK! YOU WIN!");
        $('#scissors').hide();}
      else 
        {$('#compMessage').text("But so did the computer!");
        $('#outcome').text("A TIE!");
        $('#scissors').hide();
        $('#rock').hide();}
      }
  else if (userChoice === 'scissors'){
      $('#userMessage').text("You chose trusty scissors!");
      if (computerChoice === 'rock'){
        $('#compMessage').text("Computer chose rock!");
        $('#rock').css(compStyle);
        $('#paper').hide();
        $('#outcome').text("ROCK SMASHES YOU TO BITS! YOU LOSE!")

      }
      else if (computerChoice === 'paper'){
        $('#paper').css(compStyle);  
        $('#rock').hide();
        $('#compMessage').text("Computer chose: paper!")
        $('#outcome').text("YOU CUT PAPER TO BITS! YOU WIN!")
      }
      else 
        {$('#compMessage').text("But so did the computer!")
        $('#outcome').text("A TIE!");
        $('#paper').hide();
        $('#rock').hide();
      }
  } 
}

// function reset() {
//   userChoice = null;
//   computerChoice = null;
//   $("img").show();
// }


// ------------- call game start ----------------
gameStart();

