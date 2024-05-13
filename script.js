const serviceAnimText = document.getElementById("service-anim-text");

document.addEventListener("click", (e) => {
  // console.log(e.target.getAttribute("value"));
  let defaultValue = serviceAnimText.innerHTML;
  let serviceValue = e.target.getAttribute("value");
  serviceAnimText.innerHTML = serviceValue ? serviceValue : defaultValue;
});
