let today = new Date();

// Setting the form dates
//const startDate = document.getElementById('start-date');
//startDate.valueAsDate = today;

//const endDate = document.getElementById('end-date');
//endDate.valueAsDate = today;

// Cookies and settings

function cookieDisappear() {
    //document.cookie = "kelvincookie=; expires=Tue, 19 Sep 2019 12:00:00 UTC; path=/;";
    //document.cookie = "kelvincookie2=5; expires=Tue, 19 Sep 2019 12:00:00 UTC; path=/;";
    //alert(document.cookie);
    //alert(getCookieValue("kelvincookie2"));
    localStorage.acceptedCookie = true;
    let expiry = new Date();
    expiry.setTime(today.getTime() + 3600000 * 24 * 14);
    localStorage.expiryDate = expiry;
    alert(localStorage.expiryDate);

    const cookieArea = document.getElementById('cookie');
    cookieArea.style.bottom = "-100px";
}

// This assumes that cookies are set as follows: key=value, with no space before or after the = sign
function getCookieValue(cookieName) {
    // Get the cookie in its entirety then use the inbuilt method to decode the cookie then split the cookie string by ;
    let keyValuesSplit = decodeURIComponent(document.cookie).split(';');

    // Simple linear search method, but a regex method may also be possible in lieu of this methods
    for (let i = 0; i < keyValuesSplit.length; i++) {
        let keyValuePair = keyValuesSplit[i].trim();
        if (keyValuePair.indexOf(cookieName) == 0) {
            return keyValuePair.substring(cookieName.length + 1, keyValuePair.length);
        }
    }

    return "";
}

/*/ Toggle between light and dark styles

let dark = localStorage.darkMode;

function toggleCSS() {
    const lightSheet = document.getElementById('light-styles');
    const darkSheet = document.getElementById('dark-style');

    lightSheet.disabled = !lightSheet.disabled;
    darkSheet.disabled = !darkSheet.disabled;

    if (darkSheet.disabled) {
        localStorage.darkMode = false;
    } else {
        localStorage.darkMode = true;
    }
}

if (dark) {
    document.getElementById('light-styles').disabled = true;
    document.getElementById('dark-style').disabled = false;
} else {
    document.getElementById('light-styles').disabled = false;
    document.getElementById('dark-style').disabled = true;
}
*/

// Toggle Accordion

function burgerToggle() {
    const acc = document.querySelector('.accordion-menu');
    acc.classList.toggle("hidden");
}

const submenus = document.getElementsByClassName("menu-toggle");

for (let i = 0; i < submenus.length; i++) {
    submenus[i].addEventListener('click' , toggleMenu, false);
}


function toggleMenu(e) {
    //console.log(e.target.nextElementSibling);
    //const submenu = document.querySelector('.submenu');
    const submenu = e.target.nextElementSibling;
    submenu.classList.toggle("hidden");
}

// Contact form validation
// Placeholder javascript form validation script in lieu of POSTing

function validateFields() {
    const nameInput = document.getElementById("fullname");
    const nameMessage = document.getElementById("required-fullname");

    if (!nameInput.checkValidity()) {
        nameMessage.innerHTML = nameInput.validationMessage;
    } else {
        //nameMessage.innerHTML = "Okay";
    }

    const emailInput = document.getElementById("emailaddress");
    const emailMessage = document.getElementById("required-email");

    if (!emailInput.checkValidity()) {
        emailMessage.innerHTML = emailInput.validationMessage;
    } else {
        //emailMessage.innerHTML = "Okay";
    }

    const messageInput = document.getElementById("messagebox");
    const messageBoxMessage = document.getElementById("required-message");

    if (!messageInput.checkValidity()) {
        messageBoxMessage.innerHTML = messageInput.validationMessage;
    } else {
        //messageBoxMessage.innerHTML = "Okay";
    }

    //const phoneInput = document.getElementById("telephone");
    //const phoneMessage = document.getElementById("required-phone");

    //if (!phonelInput.checkValidity()) {
    //    phoneMessage.innerHTML = phoneInput.validationMessage;
    //} else {
    //    //phoneMessage.innerHTML = "Okay";
    //}
}

