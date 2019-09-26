// Small cars animation toggle

const carThumbs = document.getElementsByClassName("car-image");

for (let i = 0; i < carThumbs.length; i++) {
    carThumbs[i].addEventListener('click' , toggleAnimation, false);
}



async function toggleAnimation (event) {
    const x = document.getElementById('body');
    
    if (x.offsetWidth < 992) return;
    
    const mainImage = document.getElementById('main-image');
    let imageUrl = event.srcElement.getAttribute("src");



    mainImage.src = imageUrl;
    
    mainImage.classList.remove("hidden");
    
    mainImage.classList.add("animate-image")
    
    await sleep(500);
    
    mainImage.classList.remove("animate-image");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const imgContainer = document.getElementsByClassName('image-container');
imgContainer[0].addEventListener('click', toggleHidden, false);


function toggleHidden (event) {
    console.log(event);
    event.srcElement.classList.toggle("hidden");
}