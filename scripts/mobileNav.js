// Mobile navigation menu functionality

// create an namespace object for the mobile menu
const mobileMenuApp = {};

// query the mobile menu and navigation elements
mobileMenuApp.menuButton = document.querySelector(".mobileNavButton");
mobileMenuApp.menuIcon = document.querySelector(".mobileNavButton i");
mobileMenuApp.menuP = document.querySelector("navButtonText");
mobileMenuApp.navigation = document.querySelector(".headerNav");
mobileMenuApp.menuLink = document.querySelectorAll(".mobileMenuLink");
mobileMenuApp.logoLink = document.querySelector(".logoLink");

// function to open the mobile navigation
mobileMenuApp.openMobileNav = () => {
	// the menu is now open
	mobileMenuApp.menuOpen = true;
	// change the hamburger icon to the 'x' icon
	mobileMenuApp.menuIcon.classList.toggle("fa-xmark");
	mobileMenuApp.menuIcon.classList.toggle("fa-bars");
	// add the 'navOpen' class to the mobileContainer
	mobileMenuApp.navigation.classList.toggle("navOpen");
};

// function to close the mobile navigation
mobileMenuApp.closeMobileNav = () => {
	// change the 'x' icon to the hamburger icon
	mobileMenuApp.menuIcon.classList.toggle("fa-xmark");
	mobileMenuApp.menuIcon.classList.toggle("fa-bars");
	// remove the 'navOpen' class from the navList
	mobileMenuApp.navigation.classList.toggle("navOpen");
	// the menu is now closed
	mobileMenuApp.menuOpen = false;
};

// handles clicks on the nav menu button
mobileMenuApp.handleMenuClick = () => {
	// when the hamburger button is clicked:
	// if the menu is open, close it
	if (mobileMenuApp.menuOpen) {
		mobileMenuApp.closeMobileNav();
	} else {
		mobileMenuApp.openMobileNav();
	}
};

// handles clicks on the mobile nav <a> elements
mobileMenuApp.handleMobileLinkClick = () => {
	// change the 'x' icon to the hamburger icon
	mobileMenuApp.menuIcon.classList.toggle("fa-xmark");
	mobileMenuApp.menuIcon.classList.toggle("fa-bars");
	// remove the 'navOpen' class from the navList
	mobileMenuApp.navigation.classList.toggle("navOpen");
	// the menu is now closed
	mobileMenuApp.menuOpen = false;
};
mobileMenuApp.handleLogoClick = () => {
	if (!mobileMenuApp.menuOpen) {
		return;
	} else {
		mobileMenuApp.handleMobileLinkClick();
	}
};

// add an event listeners for the menu buttons and links
mobileMenuApp.menuButton.addEventListener(
	"click",
	mobileMenuApp.handleMenuClick
);
// event listener for the header's logo element
mobileMenuApp.logoLink.addEventListener("click", mobileMenuApp.handleLogoClick);

// loop through the array of menu links and add the event listeners
mobileMenuApp.menuLink.forEach(link =>
	link.addEventListener("click", mobileMenuApp.handleMobileLinkClick)
);

mobileMenuApp.init = () => {
	// start the app with the menu closed
	mobileMenuApp.menuOpen = false;
};

mobileMenuApp.init();
