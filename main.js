// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// ----------------------------------------------------------------------
// MODAL FUNCTIONS (To be used to show/hide the error box)
// ----------------------------------------------------------------------

function showModal(message) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');

  // 1. Set the message text
  modalMessage.textContent = message;

  // 2. Remove the 'hidden' class to make the modal visible
  modal.classList.remove('hidden');
}

function hideModal() {
  const modal = document.getElementById('modal');

  // 1. Add the 'hidden' class to make the modal invisible
  modal.classList.add('hidden');
}

// ----------------------------------------------------------------------
// INITIALIZATION AND EVENT LISTENERS
// ----------------------------------------------------------------------

// Function to handle the initial setup (hiding the modal on load)
function initializeModal() {
  const modal = document.getElementById('modal'); 
  
  // Add the 'hidden' class to ensure it starts hidden, passing the first test
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Main function to attach all event listeners
function main() {
  // Add an event listener to the modal itself to close it when clicked
  const modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', hideModal);
  }
  
  // TODO: Add an event listener to all the heart/like elements here.
  // Example: document.querySelectorAll('.like').forEach(...)
}


// Run the initialization functions immediately when the script is loaded 
// (important for the testing environment)
initializeModal();
main();

// ------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
// ------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}