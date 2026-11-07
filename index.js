// Step 1: Handle Button Clicks
function changeBackgroundColor() {
  document.body.style.backgroundColor =  "rgb(18, 52, 86)";// /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Step 2: Capture Keyboard Input
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById("keyPressDisplay");
  if (keyPressDisplay) {
    keyPressDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// Step 3: Process Text Input
function displayUserInput() {
  const input = document.getElementById("textInput");
  const textInputDisplay = document.getElementById("textInputDisplay");
  if (input && textInputDisplay) {
    textInputDisplay.textContent = `You typed: ${input.value}`;
  }
}

// Step 4: Combine Multiple Events
function setupEventListeners() {
  const changeButton = document.getElementById("changeColorButton");
  const input = document.getElementById("textInput");

  // Separate status paragraph so the required displays are never overwritten
  let status = document.getElementById("statusDisplay");
  if (!status) {
    status = document.createElement("p");
    status.id = "statusDisplay";
    document.body.append(status);
  }

  // Steps 1-3 listeners
  if (changeButton) {
    changeButton.addEventListener("click", changeBackgroundColor);
    changeButton.addEventListener("click", () => {
      status.textContent = "Button clicked!";
    });
  }

  // Double-click anywhere on the page (including the reset button) resets
  document.body.addEventListener("dblclick", resetBackgroundColor);
  document.body.addEventListener("dblclick", () => {
    status.textContent = "Background reset!";
  });

  document.addEventListener("keydown", displayKeyPress);

  if (input) {
    input.addEventListener("input", displayUserInput);
    input.addEventListener("input", () => {
      status.textContent = `Typing... (${input.value.length} characters)`;
    });
  }
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};