/////////////////////////////LOGIN LANGUAGE DROPDOWN/////////////////////////////////////////////////////


// Function to toggle dropdown visibility and change icon color
function toggleDropdown(menuId, icon) {
  // Close other dropdowns and reset icon colors
  document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
    if (menu.id !== menuId) {
      menu.style.display = "none"; // Close other dropdowns
    }
  });
  // Reset the color of all icons
  document.querySelectorAll(".login-language i").forEach(function (i) {
    i.style.color = "#111"; // Reset icon color to default
  });
  // Toggle the selected dropdown
  var dropdown = document.getElementById(menuId);
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block"; // Open the dropdown
    icon.style.color = "#5750ba"; // Change the icon color to red
  } else {
    dropdown.style.display = "none"; // Close the dropdown
    icon.style.color = ""; // Reset icon color to default
  }
}
// Close dropdowns and reset icon colors if clicking outside
document.addEventListener("click", function (event) {
  var isClickInside = document
    .querySelector(".login-language")
    .contains(event.target);
  if (!isClickInside) {
    document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
      menu.style.display = "none"; // Close dropdowns
    });
    // Reset the color of all icons
    document.querySelectorAll(".login-language i").forEach(function (i) {
      i.style.color = "#111"; // Reset icon color to default
    });
  }
});
// Ensure dropdowns are closed and icons are reset on page load
window.addEventListener("load", function () {
  document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
    menu.style.display = "none"; // Close all dropdowns
  });
  // Reset the color of all icons
  document.querySelectorAll(".login-language i").forEach(function (i) {
    i.style.color = "#111"; // Reset icon color to default
  });
});


//////////////////////////////////OPEN AND CLOSE SEARCH///////////////////////////////////////////////////////////////

function openSearch() {
  document.querySelector('.navbar-links').style.opacity = 0;
  document.querySelector('.navbar-links').style.transition = 'opacity 0.5s ease-in-out';
    document.querySelector('.navbar-links').style.display = 'none';

  document.querySelector('.search-container').style.display = 'flex';
  document.querySelector('.search-container').style.opacity = 0;
  document.querySelector('.search-container').style.transition = 'opacity 0.5s ease-in-out';
  setTimeout(() => {
    document.querySelector('.search-container').style.opacity = 1;
  }, 100); // Adjust the delay to match the transition duration
}

function closeSearch() {
  document.querySelector('.search-container').style.opacity = 0;
  document.querySelector('.search-container').style.transition = 'opacity 0.5s ease-in-out';
    document.querySelector('.search-container').style.display = 'none';

  document.querySelector('.navbar-links').style.display = 'flex';
  document.querySelector('.navbar-links').style.opacity = 0;
  document.querySelector('.navbar-links').style.transition = 'opacity 0.5s ease-in-out';
  setTimeout(() => {
    document.querySelector('.navbar-links').style.opacity = 1;
  }, 100); // Adjust the delay to match the transition duration
}


///////////////////////////////// HEART COLOR CHANGE //////////////////////////////////////////////////////////////////


const heartIcons = document.querySelectorAll('.guest-fvrt-heart i');

heartIcons.forEach(heartIcon => {
  let isHeartClicked = false;

  heartIcon.addEventListener('click', () => {
    if (isHeartClicked) {
      heartIcon.style.color = '';
      heartIcon.style.fontWeight = '';
    } else {
      heartIcon.style.color = 'red';
      heartIcon.style.fontWeight = '600';
      heartIcon.style.transition = 'color 0.1s ease-in-out, font-weight 0.2s ease-in-out';
    }

    isHeartClicked = !isHeartClicked;
  });
});

//////////////////////////////Icon links container section1 scroll///////////////////////////////////////////

const scrollLeftBtn = document.querySelectorAll('.scroll-left');
const scrollRightBtn = document.querySelectorAll('.scroll-right');
const section1 = document.querySelectorAll('.section-1');

scrollLeftBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    section1[index].scrollBy({
      left: -200, // Adjust the value to control how much it scrolls
      behavior: 'smooth'
    });
  });
});

scrollRightBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    section1[index].scrollBy({
      left: 200, // Adjust the value to control how much it scrolls
      behavior: 'smooth'
    });
  });
});



//////////////////////////////Grid image slider//////////////////////////////////////////////////////////////


document.querySelectorAll('.image-slider').forEach((slider, index) => {
  const slides = slider.querySelectorAll('img');
  const totalSlides = slides.length;
  let slideIndex = 1;

  function showSlides(n) {
    if (n > totalSlides) { slideIndex = 1 }
    if (n < 1) { slideIndex = totalSlides }

    slides.forEach(slide => slide.style.opacity = 0);
    slides[slideIndex - 1].style.opacity = 1;
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  slider.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
  slider.querySelector('.next').addEventListener('click', () => plusSlides(1));

  // Initialize the slider
  showSlides(slideIndex);
});


//////////////////////////// LOGIN REGISTER PAGE/////////////////////

// Wait for the DOM to be fully loaded
window.addEventListener('load', function () {
  // Initially hide both login-page and register-page
  document.querySelector('.login-page').style.display = 'none';
  document.querySelector('.register-page').style.display = 'none';

  // Event listener for the login button
  document.querySelector('.login-btn').addEventListener('click', function () {
    document.querySelector('.login-page').style.display = 'block'; // Show login page
    document.querySelector('.register-page').style.display = 'none'; // Hide register page
  });

  // Event listener for the register button
  document.querySelector('.register-btn').addEventListener('click', function () {
    document.querySelector('.login-page').style.display = 'none'; // Hide login page
    document.querySelector('.register-page').style.display = 'block'; // Show register page
  });
});

// Close the login page
function closeLogin() {
  document.querySelector('.login-page').style.display = 'none';
}

// Close the register page
function closeRegister() {
  document.querySelector('.register-page').style.display = 'none';
}


///////////////////////////////////// Animated character tooltip //////////////////////////////////////////////////////
const tooltipElements = document.querySelectorAll('.tooltip');

tooltipElements.forEach(el => {
  // Create tooltip div
  const tooltip = document.createElement('div');
  tooltip.classList.add('custom-tooltip');
  document.body.appendChild(tooltip);

  // Show tooltip on hover or focus with typing effect
  el.addEventListener('mouseenter', () => {
    showTooltip(el, tooltip);
  });
  el.addEventListener('focus', () => {
    showTooltip(el, tooltip);
  });

  // Hide tooltip on mouse leave or blur
  el.addEventListener('mouseleave', () => {
    hideTooltip(tooltip);
  });
  el.addEventListener('blur', () => {
    hideTooltip(tooltip);
  });
});

// Function to position and show the tooltip with typing effect
function showTooltip(element, tooltip) {
  tooltip.style.right = '130px'; // Position 50px from the right
  tooltip.style.bottom = '20px'; // Position 50px from the bottom
  tooltip.style.opacity = '1'; // Make the tooltip visible
  tooltip.style.pointerEvents = 'auto'; // Enable interaction

  // Start the typing animation
  const text = element.getAttribute('data-tooltip');
  typeText(tooltip, text);
}

// Function to hide the tooltip
function hideTooltip(tooltip) {
  tooltip.style.opacity = '0'; // Hide the tooltip
  tooltip.style.pointerEvents = 'none'; // Disable interaction
  tooltip.innerHTML = ''; // Clear tooltip content
}

// Typing effect function
function typeText(tooltip, text) {
  tooltip.innerHTML = ''; // Clear the tooltip text before typing
  let index = 0;
  const typingSpeed = 30; // Speed of typing in milliseconds

  function type() {
    if (index < text.length) {
      const currentChar = text.charAt(index);
      
      // Handle space properly by replacing it with &nbsp;
      tooltip.innerHTML += currentChar === ' ' ? '&nbsp;' : currentChar;
      index++;
      setTimeout(type, typingSpeed); // Delay before typing the next character
    }
  }
  type(); // Start typing
}



/////////////////////////////////////////  FOOTER LINKS SHOW MORE///////////////////////////////////////////////


