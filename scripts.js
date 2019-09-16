let dateToday = new Date();

// Setting the form dates
const startDate = document.getElementById('start-date');
startDate.valueAsDate = dateToday;

const endDate = document.getElementById('end-date');
endDate.valueAsDate = dateToday;

// Leave a cookie

function cookieDisappear() {
    //document.cookie = "kelvincookie=; expires=Tue, 19 Sep 2019 12:00:00 UTC; path=/;";
    //document.cookie = "kelvincookie2=5; expires=Tue, 19 Sep 2019 12:00:00 UTC; path=/;";
    //alert(document.cookie);
    alert(getCookieValue("kelvincookie2"));
    
    const cookieArea = document.getElementById('cookie');
    cookieArea.style.bottom = "-50px";
}

// This assumes that cookies are set as follows: key=value, with no space before or after the = sign
function getCookieValue(cookieName) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let keyValuesSplit = decodedCookie.split(';');

    for (let i = 0; i < keyValuesSplit.length; i++) {
        let keyValuePair = keyValuesSplit[i].trim();
        if (keyValuePair.indexOf(cookieName) == 0) {
            return keyValuePair.substring(cookieName.length + 1, keyValuePair.length);
        }
    }

    return "";
}