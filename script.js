const serviceAnimText = document.getElementById("service-anim-text");

document.addEventListener("click", (e) => {
  let defaultValue = serviceAnimText.innerHTML;
  let serviceValue = e.target.getAttribute("value");
  serviceAnimText.innerHTML = serviceValue ? serviceValue : defaultValue;
});
