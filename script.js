const serviceAnimText = document.getElementById("service-anim-text");

document.addEventListener("click", (e) => {
  let defaultValue = serviceAnimText.innerHTML;
  let serviceValue = e.target.getAttribute("value");
  serviceAnimText.classList.add("scale-animation");
  setTimeout(() => {
    serviceAnimText.innerHTML = serviceValue ? serviceValue : defaultValue;
    serviceAnimText.classList.remove("scale-animation");
  }, 300);
});
