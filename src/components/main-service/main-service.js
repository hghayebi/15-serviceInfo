import "./main-service.scss";

export default class MainService {
  constructor(serviceContainer) {
    this.serviceContainer = serviceContainer;
  }

  render(serviceMaineName = "") {
    // const serviceContainer = document.querySelector(".ho-service-container");

    const serviceMainDiv = document.createElement("div");
    serviceMainDiv.classList.add("ho-service-main");

    this.serviceContainer.appendChild(serviceMainDiv);

    const serviceMainHeading = document.createElement("h2");
    serviceMainHeading.classList.add("ho-service-main__heading");
    serviceMainHeading.innerText = serviceMaineName;
    serviceMainDiv.appendChild(serviceMainHeading);

    const iconDiv = document.createElement("div");
    iconDiv.classList.add("ho-icon");
    iconDiv.innerHTML = `
  <svg class="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"    width="20" height="20" viewBox="0 0 20 20">
    <path fill="#fff" d="M0 6c0-0.128 0.049-0.256 0.146-0.354 0.195-0.195 0.512-0.195 0.707 0l8.646 8.646 8.646-8.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-9 9c-0.195 0.195-0.512 0.195-0.707 0l-9-9c-0.098-0.098-0.146-0.226-0.146-0.354z"></path>
</svg>
    `;
    serviceMainDiv.appendChild(iconDiv);

    // const serviceDetailesContainer = document.createElement("div");
    // serviceDetailesContainer.classList.add("service-detailes");
    // serviceContainer.appendChild(serviceDetailesContainer);
  }
}
