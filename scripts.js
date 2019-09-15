const startDate = document.getElementById('start-date');
startDate.valueAsDate = new Date();

const endDate = document.getElementById('end-date');
endDate.valueAsDate = new Date();

function cookieDisappear() {
    const cookieArea = document.getElementById('cookie');
    cookieArea.style.display = "none";
}