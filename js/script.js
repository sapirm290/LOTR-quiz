const gameControlButton = document.getElementById("controlButton");
const introductionDiv = document.getElementById("introductionDiv");
const questionDiv = document.getElementById("questionDiv");
var readyToPlay = false;
var gameInProgress = false;
var numOfQuestions = 5;
var questionsAndAnswers;
var numQuestionsAnswered;
var cunningnessCurrentScore;
var mysticismCurrentScore;

function submitBeforePlaying() {
  $("#introductionDiv").addClass("no-display");
  gameControlButton.innerHTML = "Start a game!";
  $(gameControlButton).removeClass("no-border");
  $("#questionDiv").removeClass("no-display");
  window.readyToPlay = true;

  if (document.getElementById("male").checked) {
    var genderText = "boy";
  } else {
    var genderText = "girl";
  }

  var excitementLevel = document.getElementById("excitementLevel").value;
  var excitmentText;
  if (excitementLevel > 90) {
    excitmentText = "Wow, this is just a game. chill!";
  } else if (excitementLevel > 60) {
    excitmentText = "Man... you are excited. nice :) ";
  } else if (excitementLevel > 30) {
    excitmentText = "Well.. this game can't be that bad, right?...";
  } else {
    excitmentText =
      "O.k. if you have some issue with Sapir, don't blame me. I am just a stupid game";
  }
  questionDiv.innerHTML = `${
    document.getElementById("userName").value
  }!<br> Wonerful of you to join us. As I recall you were ${
    document.getElementById("userAge").value
  } Years 
    old and a ${genderText}.<br> ${excitmentText}<br> Press "Start a game" when you are ready`;
}

function controlButton() {
  if (readyToPlay && !gameInProgress) startGame();
  else if (readyToPlay && gameInProgress) endGame();
}

function startGame() {
  if (window.readyToPlay) {
    $("#questionDiv").removeClass("no-display");
    $("#answersDiv").removeClass("no-display");
    window.gameInProgress = true;
    gameControlButton.innerHTML = "End game prematurely";

    function arrayShuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    var questionsOrder = [];
    for (let index = 0; index < numOfQuestions; index++) {
      questionsOrder.push(index);
    }
    arrayShuffle(questionsOrder);
    var questionsAndAnswers = [5];
    for (let index = 0; index < numOfQuestions; index++) {
      questionsAndAnswers[index] = {};
    }
    questionsAndAnswers[questionsOrder[0]].question =
      "You see a bunch of orcs from afar, what do you do?";
    questionsAndAnswers[questionsOrder[0]].answer1 = {
      cunningnessScore: 5,
      mysticismCurrentScore: 3,
      value: "Find a way to hide or disapper"
    };
    questionsAndAnswers[questionsOrder[0]].answer2 = {
      cunningnessScore: 0,
      mysticismCurrentScore: 0,
      value: "Fight them with a sword, they are just a bunch of orcs"
    };
    questionsAndAnswers[questionsOrder[0]].answer3 = {
      cunningnessScore: 3,
      mysticismCurrentScore: 5,
      value: "Depends on the signs I get from above"
    };
    questionsAndAnswers[questionsOrder[0]].answer4 = {
      cunningnessScore: 1,
      mysticismCurrentScore: 5,
      value: "Smite them with a spell!"
    };
    questionsAndAnswers[questionsOrder[1]].question =
      "Are you worried of the future?";
    questionsAndAnswers[questionsOrder[1]].answer1 = {
      cunningnessScore: 1,
      mysticismCurrentScore: 1,
      value: "Of course not. I will deal with whatever comes"
    };
    questionsAndAnswers[questionsOrder[1]].answer2 = {
      cunningnessScore: 1,
      mysticismCurrentScore: 5,
      value: "Not really. things have a way of working out naturally"
    };
    questionsAndAnswers[questionsOrder[1]].answer3 = {
      cunningnessScore: 0,
      mysticismCurrentScore: 2,
      value: "Who thinks about the future???"
    };
    questionsAndAnswers[questionsOrder[1]].answer4 = {
      cunningnessScore: 5,
      mysticismCurrentScore: 0,
      value: "Yes. very often"
    };
    questionsAndAnswers[questionsOrder[2]].question =
      "What do you value in life?";
    questionsAndAnswers[questionsOrder[2]].answer1 = {
      cunningnessScore: 0,
      mysticismCurrentScore: 0,
      value: "The simple things: food, love, the sun"
    };
    questionsAndAnswers[questionsOrder[2]].answer2 = {
      cunningnessScore: 5,
      mysticismCurrentScore: 1,
      value: "The oportunities we get to advance this world and ourselves"
    };
    questionsAndAnswers[questionsOrder[2]].answer3 = {
      cunningnessScore: 2,
      mysticismCurrentScore: 5,
      value: "Nothing i can really express with words"
    };
    questionsAndAnswers[questionsOrder[2]].answer4 = {
      cunningnessScore: 1,
      mysticismCurrentScore: 4,
      value: "The chance to follow my heart"
    };
    questionsAndAnswers[questionsOrder[3]].question =
      "How, in your view, the world was created?";
    questionsAndAnswers[questionsOrder[3]].answer1 = {
      cunningnessScore: 1,
      mysticismCurrentScore: 3,
      value: "It was always like this"
    };
    questionsAndAnswers[questionsOrder[3]].answer2 = {
      cunningnessScore: 0,
      mysticismCurrentScore: 0,
      value: "I really don't think about this often"
    };
    questionsAndAnswers[questionsOrder[3]].answer3 = {
      cunningnessScore: 3,
      mysticismCurrentScore: 5,
      value: "The gods who preceded us made everything"
    };
    questionsAndAnswers[questionsOrder[3]].answer4 = {
      cunningnessScore: 5,
      mysticismCurrentScore: 1,
      value: "Science is the only relative answer we have"
    };
    questionsAndAnswers[questionsOrder[4]].question =
      "What, in your eyes, is the cause of Sauron's betrayal";
    questionsAndAnswers[questionsOrder[4]].answer1 = {
      cunningnessScore: 0,
      mysticismCurrentScore: 3,
      value: "No-one can tell"
    };
    questionsAndAnswers[questionsOrder[4]].answer2 = {
      cunningnessScore: 5,
      mysticismCurrentScore: 0,
      value: "A few thing that accumulated. guess just bad luck. It happens"
    };
    questionsAndAnswers[questionsOrder[4]].answer3 = {
      cunningnessScore: 3,
      mysticismCurrentScore: 5,
      value: "This was foretold, We are lucky the world survived it"
    };
    questionsAndAnswers[questionsOrder[4]].answer4 = {
      cunningnessScore: 1,
      mysticismCurrentScore: 3,
      value: "I cant know,but I will fight this kind of things with all I got"
    };
    window.questionsAndAnswers = questionsAndAnswers;
    window.numQuestionsAnswered = 0;
    window.cunningnessCurrentScore = 0;
    window.mysticismCurrentScore = 0;
    presentQuestion();
  }
}
function presentQuestion() {
  document.getElementById("answerButton1").innerHTML =
    questionsAndAnswers[numQuestionsAnswered].answer1.value;
  document.getElementById("answerButton2").innerHTML =
    questionsAndAnswers[numQuestionsAnswered].answer2.value;
  document.getElementById("answerButton3").innerHTML =
    questionsAndAnswers[numQuestionsAnswered].answer3.value;
  document.getElementById("answerButton4").innerHTML =
    questionsAndAnswers[numQuestionsAnswered].answer4.value;
  questionDiv.innerHTML = questionsAndAnswers[numQuestionsAnswered].question;
}

function sendAnswer(answerIndex) {
  cunningnessCurrentScore +=
    window.questionsAndAnswers[numQuestionsAnswered]["answer" + answerIndex]
      .cunningnessScore;
  mysticismCurrentScore +=
    window.questionsAndAnswers[numQuestionsAnswered]["answer" + answerIndex]
      .mysticismCurrentScore;
  numQuestionsAnswered++;
  if (numQuestionsAnswered < numOfQuestions) {
    presentQuestion();
  } else endGame();
}

function endGame() {
  var result;
  var resultImage;
  if (mysticismCurrentScore > 3.5 * numQuestionsAnswered) {
    result = "You are connected with the gods and magic. You are Gandalf!";
    resultImage = "gandalf";
  } else if (cunningnessCurrentScore > 1.2 * numQuestionsAnswered) {
    if (cunningnessCurrentScore > 2 * numQuestionsAnswered) {
      result = "You are magical and cunning, You are Legolas!";
      resultImage = "legolas";
    } else {
      result = "You are magical and straight-forward, You are Aragorn!";
      resultImage = "aragorn";
    }
  } else {
    result = "You are very straight-forward and realistic. You are Gimli!";
    resultImage = "gimli";
  }
  questionDiv.innerHTML =
    result +
    "<br><img class='figure' src='./images/" +
    resultImage +
    ".png' alt='Figure'>";

  gameControlButton.innerHTML = "";
  gameInProgress = false;
  readyToPlay = false;
  $("#answersDiv").addClass("no-display");
  $(gameControlButton).addClass("no-border");
  setTimeout(() => {
    readyToPlay = true;
    $(gameControlButton).removeClass("no-border");
  }, 1500);
  gameControlButton.innerHTML = "Start a new game";
}
