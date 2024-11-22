(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

//Data 

const infoBoxes = [ 
  {
    title: "charging pot",
    text: "Charging pot for the earpod.",
    image: "images/image2.jpg"
  },
  {
    title: "speaker1",
    text: "This is the outer speaker",
    image: "images/image4.jpg"
  },
  {
    title: "speaker2",
    text: "This is the main speaker",
    image: "images/image3.jpg"
  },
  {
    title: "speaker3",
    text: "This is the main speaker",
    image: "images/image1.jpg"
  }
]

function loadInfo() {
  infoBoxes.forEach((infoBox, index)=>{

    let selected = document.querySelector(`#hotspot-${index+1}`);

    const title = document.createElement("h2");
    title.textContent= infoBox.title;

    const text = document.createElement("p");
    text.textContent = infoBox.text;

    image = document.createElement('img');
      image.src = infoBox.image;
      image.style.width = "90%";

    selected.appendChild(image);
    selected.appendChild(title);
    selected.appendChild(text);
  })
}

//call the function to load data
function modelLoaded() {
  loadInfo();
}


  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });


  
//burger-con
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

//menu links scroll
const links = document.querySelectorAll(".nav-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function (e) {
        e.preventDefault(); 
        setTimeout(() => {
            document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
        }, 500); 
    };
}


//slider animation
const divisor = document.querySelector('#divisor');
const slider = document.querySelector('#slider');

function moveDivisor() {
    console.log(slider.value);
    // divisor.style.width. = slider.value+"%";
    divisor.style.width = `${slider.value}%`;
}


slider.addEventListener("input", moveDivisor);



})();

