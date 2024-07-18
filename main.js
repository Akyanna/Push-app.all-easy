const movableElement = document.getElementById('movable-element');
const movableButtonContent = document.getElementById('movable-footer-right');

const header = document.querySelector('.header');
const footer = document.getElementById('footer');
const headerButton = document.getElementById('button');

headerButton.addEventListener('click', () => {
	if (movableButtonContent.classList.contains('footer-right--closed')) {
		movableButtonContent.classList.remove('footer-right--closed');
	} else {
		movableButtonContent.classList.add('footer-right--closed');
	}
  });

function handleMediaChange(e) {
	console.log("handleMediaChange called")
    if (e.matches) {
		footer.appendChild(movableElement);
		headerButton.appendChild(movableButtonContent);
    }	else {
		header.appendChild(movableElement);
		footer.appendChild(movableButtonContent);
	}
}

// Define the media query
const mediaQuery = window.matchMedia('(max-width: 320px)');

// Listen for changes to the media query
mediaQuery.addEventListener('change', handleMediaChange);

// Initial check
handleMediaChange(mediaQuery);
