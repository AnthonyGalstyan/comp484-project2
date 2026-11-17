$(function() {

  // Updates all pet information when the page first loads.
  checkAndUpdatePetInfoInHtml();

  // Connect each button to its function.
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.nap-button').click(clickedNapButton);


  /*
    UNIQUE JQUERY METHOD 1: .children()

    .children() selects only the direct children of the selected element.
    Here it looks inside .button-container and selects only its button
    elements. .length is used to count those buttons and then display the
    number of available pet actions on the page.
  */
  var numberOfActions =
    $('.button-container').children('button').length;

  $('.action-count').text(numberOfActions);

});


// Pet information object.
// Energy is the additional property for the new Nap behavior.
var pet_info = {
  name: "Mewtwo",
  weight: 25,
  happiness: 50,
  energy: 50
};


// Array containing the visual messages shown after each action.
var petComments = [
  "Yum! That treat was delicious!",
  "That was fun! Let's play again!",
  "That exercise was tiring, but good for me!",
  "I feel refreshed after my nap!"
];


// Treat increases happiness and weight.
function clickedTreatButton() {
  pet_info.happiness += 5;
  pet_info.weight += 2;
  pet_info.energy += 2;

  updatePetMessage(petComments[0]);
  checkAndUpdatePetInfoInHtml();
}


// Playing increases happiness but decreases weight and energy.
function clickedPlayButton() {
  pet_info.happiness += 8;
  pet_info.weight -= 1;
  pet_info.energy -= 5;

  updatePetMessage(petComments[1]);
  checkAndUpdatePetInfoInHtml();
}


// Exercise decreases happiness, weight, and energy.
function clickedExerciseButton() {
  pet_info.happiness -= 3;
  pet_info.weight -= 2;
  pet_info.energy -= 8;

  updatePetMessage(petComments[2]);
  checkAndUpdatePetInfoInHtml();
}


// New behavior: Nap restores happiness and energy.
function clickedNapButton() {
  pet_info.happiness += 2;
  pet_info.energy += 10;

  updatePetMessage(petComments[3]);
  checkAndUpdatePetInfoInHtml();
}


// Checks the values and then updates the page.
function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}


// Prevents pet values from falling below zero.
function checkWeightAndHappinessBeforeUpdating() {

  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }

  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }

  if (pet_info.energy < 0) {
    pet_info.energy = 0;
  }
}


// Updates the HTML with the current pet_info values.
function updatePetInfoInHtml() {

  /*
    UNIQUE JQUERY METHOD 2: .find()

    .find() searches through all descendants inside a selected element.
    First selects the .dashboard and then use .find() to locate
    each pet information span inside of it. This updates the
    displayed name, weight, happiness, and energy values.
  */
  var dashboard = $('.dashboard');

  dashboard.find('.name').text(pet_info.name);
  dashboard.find('.weight').text(pet_info.weight);
  dashboard.find('.happiness').text(pet_info.happiness);
  dashboard.find('.energy').text(pet_info.energy);
}


// Displays a visual message from the pet on the webpage.
function updatePetMessage(message) {

  /*
    .find() is also reused here to locate the pet-message element
    inside the dashboard and replace its text with the pet's comment.
  */
  $('.dashboard').find('.pet-message').text(message);
}