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
    // iconDiv.innerHTML = `
    // <?xml version="1.0" encoding="utf-8"?>
    // <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    // <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    // <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    //    width="100%" height="100%" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
    // <g>
    //   <line fill="100" stroke="#fff" stroke-width="4" stroke-miterlimit="10" x1="32" y1="50" x2="32" y2="14"/>
    //   <line fill="none" stroke="#fff" stroke-width="4" stroke-miterlimit="10" x1="14" y1="32" x2="50" y2="32"/>
    // </g>
    // <g>
    //   <circle fill="none" stroke="#fff" stroke-width="4" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
    // </g>
    // </svg>

    // `;
    iconDiv.innerHTML = `
      <svg class="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"    width="24" height="24" viewBox="0 0 20 20">
        <path fill="#717171" d="M0 6c0-0.128 0.049-0.256 0.146-0.354 0.195-0.195 0.512-0.195 0.707 0l8.646 8.646 8.646-8.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-9 9c-0.195 0.195-0.512 0.195-0.707 0l-9-9c-0.098-0.098-0.146-0.226-0.146-0.354z"></path>
    </svg>
        `;
    serviceMainDiv.appendChild(iconDiv);

    // const serviceDetailesContainer = document.createElement("div");
    // serviceDetailesContainer.classList.add("service-detailes");
    // serviceContainer.appendChild(serviceDetailesContainer);

    serviceMainDiv.addEventListener("click", function (e) {
      serviceMainDiv.classList.toggle("ho-service-main--color");
    });
  }
}
