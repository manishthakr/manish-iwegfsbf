// Replace 'example.com' with the actual domain you want to clear
const targetDomain = 'manish-thakur.com.np';

// Clear cache
window.caches.open('cache-name').then((cache) => {
    cache.keys().then((keys) => {
        keys.forEach((request) => {
            if (request.url.includes(targetDomain)) {
                cache.delete(request);
            }
        });
    });
});

// Clear cookies
document.cookie.split(';').forEach((cookie) => {
    const cookieParts = cookie.split('=');
    const cookieName = cookieParts[0].trim();
    if (cookieName.includes(targetDomain)) {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
});
sessionStorage.clear();
localStorage.clear();


const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-1500%';
}




// Get all the background divs
var backgrounds = document.querySelectorAll('.background');
// Get the slider and the images
const slider = document.querySelector('.slider-images');
const images = Array.from(slider.children);

// Set the initial image index
let imageIndex = 0;

// Update the slider
function updateSlider() {
    // Remove the 'active', 'previous', 'next', and 'inactive' classes from all images
    images.forEach(image => {
        image.classList.remove('active', 'previous', 'next', 'inactive');
    });

    // Add the 'active' class to the current image
    images[imageIndex].classList.add('active');

    // Add the 'previous' class to the image before the current one
    if (imageIndex - 1 >= 0) {
        images[imageIndex - 1].classList.add('previous');
    } else {
        images[images.length - 1].classList.add('previous');
    }

    // Add the 'next' class to the image after the current one
    if (imageIndex + 1 < images.length) {
        images[imageIndex + 1].classList.add('next');
    } else {
        images[0].classList.add('next');
    }

    // Add the 'inactive' class to the other images
    images.forEach((image, index) => {
        if (index !== imageIndex && index !== (imageIndex - 1 + images.length) % images.length && index !== (imageIndex + 1) % images.length) {
            image.classList.add('inactive');
        }
    });

    // Set the opacity of all the background divs to 0
    backgrounds.forEach((background) => {
        background.style.opacity = 0;
    });
    // If the current image is active, set the opacity of the corresponding background div to 1
    if (images[imageIndex].classList.contains('active')) {
        backgrounds[imageIndex].style.opacity = 1;
    }
    // Update the image index
    imageIndex = (imageIndex + 1) % images.length;
}
updateSlider();
// Update the slider every 3 seconds
setInterval(updateSlider, 3000);

images[1].classList.add('next');
images[2].classList.add('inactive');
images[3].classList.add('inactive');
images[4].classList.add('previous');
images[0].classList.add('active');



var typed = new Typed(".auto-type",{
  strings : ["webdeveloper", "Designer", "programmer"],
  typeSpeed : 150,
  backSpeed : 50,
  loop : true
})

const sections = document.querySelectorAll("section");
const first = sections[0];
const last = sections[sections.length - 1];

scrollIntoView(last)
  .then(() => asyncDelay())
  .then(() => scrollIntoView(first));

function asyncDelay(delayTime = 500) {
  return new Promise((resolve) => setTimeout(resolve, delayTime));
}

async function scrollIntoView(el) {
  return new Promise((resolve) => {
    function onEnd() {
      window.removeEventListener("scrollend", onEnd);
      resolve(el);
    }
    window.addEventListener("scrollend", onEnd);
    el.scrollIntoView({ behavior: "smooth" });
  });
}



// Get the button element by its id
var alertSound = document.getElementById("alertSound");
var btn1 = document.getElementById("cbt");
var btn2 = document.getElementById("prd1");
var btn3 = document.getElementById("prd2");
var btn4 = document.getElementById("prd3");
var btn5 = document.getElementById("prd4");
var btn6 = document.getElementById("prd5");
var btn7 = document.getElementById("prd6");
var btn8 = document.getElementById("prd7");
var btn9 = document.getElementById("prd8");
var btn11 = document.getElementById("hirebtn");
var textbox = document.getElementById("textbox");

// Add a click event listener to the button
btn1.addEventListener("click", function() {
  textbox.value = "(hire mail) contact button";
});

btn2.addEventListener("click", function() {
  textbox.value = "(business website) E-com site enquary";
  alertSound.play();
  alert("Lets build your business togather.\nwrite your name and email help me reach you.")

});
btn3.addEventListener("click", function() {
  textbox.value = "(business website) brochure site enquary";
  alertSound.play();
  alert("Great decision just need your name and email to reach you\nso write your name and email help me reach you.")


});
btn4.addEventListener("click", function() {
  textbox.value = "(business website) forum site enquary";
  alertSound.play();
  alert("Great idea lets build the next 'reddit' togather.\nwrite your name and email help me reach you.")


});
btn5.addEventListener("click", function() {
  textbox.value = "(educational website) brochure site enquary";
  alertSound.play();
  alert("Great decision lets make your social presence worldwide.\nwrite your name and email help me reach you.")


});
btn6.addEventListener("click", function() {
  textbox.value = "(educational website) e-platform site enquary";
  alertSound.play();
  alert("Amazing idea lets get the job done.\nwrite your name and email help me reach you.")


});
btn7.addEventListener("click", function() {
  textbox.value = "(educational website) non-profit site enquary";
  alertSound.play();
  alert("Amazing idea lets work for it.\nwrite your name and email help me reach you.")


});
btn8.addEventListener("click", function() {
  textbox.value = "(news website)  news site enquary";
  alertSound.play();
  alert("Lets build the biggest news portal togather.\nwrite your name and email help me reach you.")


});
btn9.addEventListener("click", function() {
  textbox.value = "(news website)  blog page enquary";
  alertSound.play();
  alert("Amazing idea lets do it.\nwrite your name and email help me reach you.")


});
btn11.addEventListener("click", function() {
  textbox.value = "(hire mail) hire button";
  alertSound.play();
  alert("Want to work togather ??\ntype your name and email help me reach you.")

});

// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  // alert('');
},);

// Disable keyboard shortcuts for copy (Ctrl+C, Command+C)
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && (event.key === 'c' || event.key === 'C')) {
      event.preventDefault();
      // alert('');
  }
});

// Disable screenshot using keyboard shortcut (Alt+Print Screen, Command+Shift+3/4)
document.addEventListener('keydown', function(event) {
  if ((event.altKey && event.key === 'PrintScreen') || 
      (event.metaKey && (event.shiftKey && (event.key === '3' || event.key === '4')))) {
      event.preventDefault();
      // alert('');
  }
});










      var backgroundMusic = document.getElementById("backgroundMusic");

      window.onscroll = function() {
          var scrollIntensity = window.scrollY / (document.body.scrollHeight - window.innerHeight);
          backgroundMusic.volume = scrollIntensity;
      };  
      

      window.addEventListener('load', function() {
        var loading = document.getElementById('loading');
        loading.style.display = 'none';
    });


// Assuming you have a form with an ID "myForm"
const myForm = document.getElementById("myForm");

// Add an event listener to the form submission
myForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Show a success message (you can customize this)
    alert("success!");

    // Optionally, you can perform additional actions here (e.g., send data to your server)

    // If you want to prevent the form from actually submitting, you can omit the following line
    myForm.submit();
});
