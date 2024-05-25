document.addEventListener("DOMContentLoaded", function () {
  let searchBar = document.getElementById("searchbar");
  let secondDiv = document.getElementById("secondDiv");
  let isSecondDivVisible = false;

  searchBar.addEventListener("click", function () {
    if (!isSecondDivVisible) {
      secondDiv.style.display = "block";
      isSecondDivVisible = true;
    } else {
      secondDiv.style.display = "none";
      isSecondDivVisible = false;
    }
  });

  // Select the close button
  let closeButton = secondDiv.querySelector(".material-symbols-outlined");

  // Add click event listener to the close button
  closeButton.addEventListener("click", function () {
    // Hide the secondDiv
    secondDiv.style.display = "none";
    isSecondDivVisible = false;
  });
});

// scroll div javasscript

document.addEventListener("DOMContentLoaded", function () {
  let mainR2 = document.getElementById("mainR2");
  let scrollLeftButton = document.getElementById("scrollLeftButton");
  let scrollRightButton = document.getElementById("scrollRightButton");

  // Add event listener for scrolling left
  scrollLeftButton.addEventListener("click", function () {
    // Scroll the main-r2 div to the left
    mainR2.scrollLeft -= 700; // Adjust the value as needed
  });

  // Add event listener for scrolling right
  scrollRightButton.addEventListener("click", function () {
    // Scroll the main-r2 div to the right
    mainR2.scrollLeft += 700; // Adjust the value as needed
  });
});
