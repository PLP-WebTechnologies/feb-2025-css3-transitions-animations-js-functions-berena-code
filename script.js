// Load saved event on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedevent = localStorage.getItem("event"); // Retrieve saved event from localStorage
    if (savedevent) {
        document.body.classList.add(savedevent); // Apply the saved event class to the body
        document.getElementById("event").value = savedevent; // Set the dropdown to the saved event
    }
});

// Save event preference and apply it
document.getElementById("saveBtn").addEventListener("click", () => {
    const selectedevent = document.getElementById("event").value; // Get the selected event from the dropdown
    document.body.classList.remove("day", "night"); // Remove any existing event classes
    document.body.classList.add(selectedevent); // Add the selected event class
    localStorage.setItem("event", selectedevent); // Save the selected event to localStorage
    alert(`event changed to: ${selectedevent}`); // Notify the user
});
  
  // Trigger animation on click
  document.getElementById("animatedBox").addEventListener("click", () => {
    const box = document.getElementById("animatedBox");
    box.classList.add("bounce");
  
    // Remove the class after animation ends
    box.addEventListener("animationend", () => {
      box.classList.remove("bounce");
    }, { once: true });
  });

  
  