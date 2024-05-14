// const serviceAnimText = document.getElementById("service-anim-text");

// const servicesTextData = [
//   "Ebooks Services",
//   "Cloud Service",
//   "Database Management",
//   "Outsourcing",
//   "Domain Hosting",
//   "Digital Marketing",
//   "Ecommerce Website",
//   "Software Development",
// ];
// let i = 0;
// setInterval(() => {
//   serviceAnimText.innerHTML = servicesTextData[(i === 7 ? (i = 0) : i++) % 7];
//   serviceAnimText.classList.add("scale-animation");
//   setTimeout(() => {
//     serviceAnimText.classList.remove("scale-animation");
//   }, 300);
// }, 2000);

const serviceAnimText = document.getElementById("service-anim-text");

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
let i = 0;

setInterval(() => {
  serviceAnimText.innerHTML = servicesTextData[i];
  serviceAnimText.classList.add("scale-animation");
  setTimeout(() => {
    serviceAnimText.classList.remove("scale-animation");
  }, 300);
  i = (i + 1) % servicesTextData.length;
}, 2000);
