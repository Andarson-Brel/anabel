gsap.registerPlugin(Flip);
const links = document.querySelectorAll(".nav-link a");
const activeNav = document.querySelector(".active-nav");
const playBtn = document.querySelectorAll(".play-btn");
const eyective = document.querySelector(".eye-active");
const eyeInactive = document.querySelector(".eye-inactive");
const vidContainer = document.querySelector(".video-container");
const brush = document.querySelector(".magic-pen");
const userName = document.querySelector(".name");
const hatShadow = document.querySelector(".hat-shadow");
const hat = document.querySelector(".hat");
const shootingStar = document.querySelector(".shooting-star");
const vid = document.querySelector(".video-container video");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    gsap.to(links, { color: "#ffff" });
    // console.log("hello world");

    if (document.activeElement === link) {
      gsap.to(link, { color: "rgba(110, 142, 255, 1)" });
      //   console.log("hello world 2");
    }

    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 0.5,
      absolute: true,
    });
  });
});
var isDown = false;

playBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // vidContainer.style.top = "400px";
    // const playState = Flip.getState(vidContainer);

    if (!isDown) {
      vidContainer.style.top = "400px";
      vidContainer.style.transition = "all 0.5s ease";
      brush.style.display = "block";
      eyeInactive.style.display = "none";
      eyective.style.display = "block";
      eyective.style.width = "150px";
      userName.style.left = "0";
      hat.style.transform = "rotate(16deg)";
      hatShadow.style.transform = "rotate(16deg)";
      shootingStar.style.left = "1400px";
      shootingStar.style.bottom = "1400px";
      vid.play();
      isDown = true;
    } else {
      vidContainer.style.top = "600px";
      vidContainer.style.transition = "all 0.5s ease";
      brush.style.display = "none";
      eyeInactive.style.display = "block";
      eyective.style.display = "none";
      userName.style.left = "10px";
      hat.style.transform = "rotate(-16deg)";
      hatShadow.style.transform = "rotate(-16deg)";
      shootingStar.style.left = "-150px";
      shootingStar.style.bottom = "-150px";
      isDown = false;
    }
    // if ((vidContainer.style.top = "600px")) {
    //   vidContainer.style.top = "400px";
    //   vidContainer.style.transition = "all 0.5s ease";
    //   //   gsap.to(vidContainer, { top: "400px" });
    //   //   Flip.from(playState, {
    //   //     duration: 0.5,
    //   //     absolute: true,
    //   //   });
    // }
    // // if ((vidContainer.style.top = "400px")) {
    // //   vidContainer.style.top = "600px";
    // //   vidContainer.style.transition = "all 0.5s ease";
    // //   console.log("ibb");
    // // }
  });
});
