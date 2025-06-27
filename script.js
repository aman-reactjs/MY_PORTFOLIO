 fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;
      });



const intro = "Hi, I am Aman Sharma";
const roles = ["Frontend Developer","React Developer", "Web Developer", "UI/UX Designer", "JavaScript Coder"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentText = "";

function typeIntro(i = 0) {
  if (i < intro.length) {
    document.getElementById("intro-text").textContent += intro.charAt(i);
    setTimeout(() => typeIntro(i + 1), 100);
  } else {
    typeEffect(); 
  }
}

  function typeEffect() {
    const display = document.getElementById("changing-text");

    if (!isDeleting && charIndex <= roles[wordIndex].length) {
      currentText = roles[wordIndex].substring(0, charIndex);
      charIndex++;
    } else if (isDeleting && charIndex >= 0) {
      currentText = roles[wordIndex].substring(0, charIndex);
      charIndex--;
    }

    display.textContent = currentText;

    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === roles[wordIndex].length) {
      isDeleting = true;
      delay = 1000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, delay);
  }


  typeIntro();


let hireBtn = document.querySelector(".hireBtn");

//Hire button by Linkdin
let hireMe = ()=>{
  window.open("https://www.linkedin.com/in/aman-sharma-152897332/", "_blank");
}

hireBtn.addEventListener("click", hireMe)


//Using api
  
  fetch("navbar.html")
  .then(res=>res.text())
  .then(data=>{
    // document.querySelector(".navbar").innerHTML=data;
  });


  const navLink = document.querySelectorAll(".nav_class");
 
  navLink.forEach((link)=>{
    link.addEventListener("click",()=>{
      document.querySelector(".active").classList.remove("active");
      link.classList.add("active")
    })
  })

    let motivation= document.querySelector(".motivation-head");

  // let motivaBtn=document.getElementById("motivationBtn");

  const handleData= async()=>{
    try{

      let res = await fetch("https://zenquotes.io/api/random")
      if(res.ok)(
        console.log("Error")
      )
      let data = res.json();
      console.log(data)
    }
    catch(er){
      console.log(`error  ${er.message}`)
    }
  }
  handleData()
  // motivaBtn.addEventListener("click", handleData)
