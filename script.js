const serviceAnimText = document.getElementById("service-anim-text");

// window.addEventListener("scroll", () => {
//   let reveals = document.querySelectorAll(".reveal");

//   for (let i of reveals) {
//     let windowHeight = window.innerHeight;
//     let revealTop = i.getBoundingClientRect().top;
//     let revealPoint = 150;

//     if (revealTop < windowHeight - revealPoint) {
//       i.classList.add("active");
//     } else {
//       i.classList.remove("active");
//     }
//     // console.log(revealTop);
//   }
// });

document.addEventListener("click", (e) => {
  let defaultValue = serviceAnimText.innerHTML;
  let serviceValue = e.target.getAttribute("value");
  serviceAnimText.classList.add("scale-animation");
  setTimeout(() => {
    serviceAnimText.innerHTML = serviceValue ? serviceValue : defaultValue;
    serviceAnimText.classList.remove("scale-animation");
  }, 300);
});
