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

const servicesTextData = [
  "Ebooks Services",
  "Cloud Service",
  "Database Management",
  "Outsourcing",
  "Domain Hosting",
  "Digital Marketing",
  "Ecommerce Website",
  "Software Development",
];

// document.addEventListener("click", (e) => {
//   let defaultValue = serviceAnimText.innerHTML;
//   let serviceValue = e.target.getAttribute("value");
//   serviceAnimText.classList.add("scale-animation");
//   setTimeout(() => {
//     serviceAnimText.innerHTML = serviceValue ? serviceValue : defaultValue;
//     serviceAnimText.classList.remove("scale-animation");
//   }, 300);
// });
let i = 0;
setInterval(() => {
  serviceAnimText.innerHTML = servicesTextData[(i === 7 ? (i = 0) : i++) % 7];
  serviceAnimText.classList.add("scale-animation");
  setTimeout(() => {
    serviceAnimText.classList.remove("scale-animation");
  }, 300);
}, 2000);
