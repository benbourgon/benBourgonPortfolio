// Profile section navigation through radio button set;

// create the namespace object
const profileNavApp = {};

// query the form elements
profileNavApp.profileForm = document.querySelector(".profileForm");
profileNavApp.radioButtons = document.querySelectorAll(".profileForm input");

// query the content elements to display
profileNavApp.aboutMeContents = document.querySelector(".aboutMeItem");
profileNavApp.interestsContents = document.querySelector(".interestsItem");
profileNavApp.coffeeContents = document.querySelector(".coffeeItem");


// When the user clicks a radio button label in the form
profileNavApp.handleChange = (event) => {
    profileNavApp.currentValue = event.target.value;
    console.log(profileNavApp.currentValue);

    // hide or display the correct contents depending on the value of the selected radio button
    if (profileNavApp.currentValue === "aboutMe"){
        profileNavApp.interestsContents.classList.add("hidden");
        profileNavApp.coffeeContents.classList.add("hidden")
        profileNavApp.aboutMeContents.classList.remove("hidden");
    } else if (profileNavApp.currentValue === "interests"){
        profileNavApp.interestsContents.classList.remove("hidden");
        profileNavApp.coffeeContents.classList.add("hidden")
        profileNavApp.aboutMeContents.classList.add("hidden");
    } else if (profileNavApp.currentValue === "coffee"){
        profileNavApp.interestsContents.classList.add("hidden");
        profileNavApp.coffeeContents.classList.remove("hidden")
        profileNavApp.aboutMeContents.classList.add("hidden");
    }
}

// create an event listener for when the radio button selection is changed
profileNavApp.profileForm.addEventListener('change', profileNavApp.handleChange)

// create the init to run on start and set the current value of the form to be "aboutMe"
profileNavApp.init = () => {
    profileNavApp.currentValue = "aboutMe";
}

// initialize the app
profileNavApp.init();