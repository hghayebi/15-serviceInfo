import "./sub-services.scss";
// import linkIcon from "../../icon/link-icon.png";
// import detailesIcon from "../../icon/detailes-icon.png";
export default class SubServices {
  constructor(serviceContainer) {
    this.serviceContainer = serviceContainer;
  }

  render(SubServicesData = []) {
    //
    // const serviceContainer = document.querySelector(".ho-service-container");

    const subServicesContainer = document.createElement("div");
    subServicesContainer.classList.add("ho-sub-services");

    this.serviceContainer.appendChild(subServicesContainer);

    // service detailes heading --------------------------------------------

    let subServiceContainer0 = document.createElement("div");
    subServiceContainer0.classList.add("ho-sub-service--0");

    let subServiceContainer = document.createElement("div");
    subServiceContainer.classList.add("ho-sub-service");
    subServiceContainer.classList.add("ho-sub-heading");

    let subServicenamediv = document.createElement("div");
    subServicenamediv.classList.add("ho-sub-service__name--container");
    let subServicename = document.createElement("p");
    subServicename.classList.add("ho-sub-service__name");
    subServicename.classList.add("ho-sub-service--heading");
    subServicename.innerText = "عنوان زیر خدمت";
    subServicenamediv.appendChild(subServicename);

    let subServicenCodeDiv = document.createElement("div");
    subServicenCodeDiv.classList.add("ho-sub-service__code--container");
    let subServicenCode = document.createElement("p");
    subServicenCode.classList.add("ho-sub-service__code");
    subServicenCode.classList.add("ho-sub-service--heading");
    subServicenCode.innerText = "کد زیرخدمت";
    subServicenCodeDiv.appendChild(subServicenCode);

    let subserviceLinkDiv = document.createElement("div");
    subserviceLinkDiv.classList.add("ho-sub-service__link--container");
    // let subserviceLinkIcon = document.createElement("img");
    // subserviceLinkIcon.src = linkIcon;
    let subserviceLink = document.createElement("p");
    subserviceLink.classList.add("ho-sub-service__link");
    subserviceLink.classList.add("ho-sub-service--heading");
    subserviceLink.innerText = "لینک دریافت خدمت";
    // subserviceLink.target = "_blank";
    // subserviceLink.appendChild(subserviceLinkIcon);
    subserviceLinkDiv.appendChild(subserviceLink);

    let subserviceDetailesLinkDiv = document.createElement("div");
    subserviceDetailesLinkDiv.classList.add(
      "ho-sub-service__detailes--link--container"
    );
    // let subserviceDetailesLinkIcon = document.createElement("img");
    // subserviceDetailesLinkIcon.src = detailesIcon;
    let subserviceDetailesLink = document.createElement("p");
    subserviceDetailesLink.classList.add("ho-sub-service__detailes--link");
    subserviceDetailesLink.classList.add("ho-sub-service--heading");
    subserviceDetailesLink.innerText = "جزییات خدمت";
    // subserviceDetailesLink.appendChild(subserviceDetailesLinkIcon);
    subserviceDetailesLinkDiv.appendChild(subserviceDetailesLink);

    subServiceContainer.appendChild(subServicenamediv);
    subServiceContainer.appendChild(subServicenCodeDiv);
    subServiceContainer.appendChild(subserviceLinkDiv);
    subServiceContainer.appendChild(subserviceDetailesLinkDiv);

    subServicesContainer.appendChild(subServiceContainer);
    // service detailes heading --------------------------------------------

    // ------------------

    SubServicesData.forEach((obj) => {
      let subServiceContainer = document.createElement("div");
      subServiceContainer.classList.add("ho-sub-service");

      let subServicenamediv = document.createElement("div");
      subServicenamediv.classList.add("ho-sub-service__name--container");
      let subServicename = document.createElement("p");
      subServicename.classList.add("ho-sub-service__name");
      subServicename.innerText = obj.subService;
      subServicenamediv.appendChild(subServicename);

      let subServicenCodeDiv = document.createElement("div");
      subServicenCodeDiv.classList.add("ho-sub-service__code--container");
      let subServicenCode = document.createElement("p");
      subServicenCode.classList.add("ho-sub-service__code");
      subServicenCode.innerText = obj.serviceCode;
      subServicenCodeDiv.appendChild(subServicenCode);

      let subserviceLinkDiv = document.createElement("div");
      subserviceLinkDiv.classList.add("ho-sub-service__link--container");
      let subserviceLinkIcon = document.createElement("img");
      // subserviceLinkIcon.src = linkIcon;
      subserviceLinkIcon.src =
        "https://aped.ir/Dorsapax/Data/Sub_0/File/linkIcon.png";
      // subserviceLinkIcon.width = "30";
      let subserviceLink = document.createElement("a");
      subserviceLink.classList.add("ho-sub-service__link");
      subserviceLink.href = obj.serviceLink;
      subserviceLink.target = "_blank";
      subserviceLink.appendChild(subserviceLinkIcon);
      subserviceLinkDiv.appendChild(subserviceLink);

      let subserviceDetailesLinkDiv = document.createElement("div");
      subserviceDetailesLinkDiv.classList.add(
        "ho-sub-service__detailes--link--container"
      );

      let subserviceDetailesLinkIcon = document.createElement("img");
      // subserviceDetailesLinkIcon.src = detailesIcon;
      subserviceDetailesLinkIcon.src =
        "https://aped.ir/Dorsapax/Data/Sub_0/File/detailesIcon.png";
      subserviceDetailesLinkIcon.width = "30";
      let subserviceDetailesLink = document.createElement("a");
      subserviceDetailesLink.classList.add("ho-sub-service__detailes--link");
      subserviceDetailesLink.href = obj.serviceDetailesLink || "#";
      subserviceDetailesLink.appendChild(subserviceDetailesLinkIcon);
      subserviceDetailesLinkDiv.appendChild(subserviceDetailesLink);

      subServiceContainer.appendChild(subServicenamediv);
      subServiceContainer.appendChild(subServicenCodeDiv);
      subServiceContainer.appendChild(subserviceLinkDiv);
      subServiceContainer.appendChild(subserviceDetailesLinkDiv);

      subServicesContainer.appendChild(subServiceContainer);
    });

    // hidden class
    subServicesContainer.classList.add("hidden");
    // subServicesContainer.querySelector
    this.serviceContainer
      .querySelector(".ho-service-main")
      .addEventListener("click", function (e) {
        if (subServicesContainer.classList.contains("hidden")) {
          subServicesContainer.classList.remove("hidden");
          // e.classList.remove("ho-background-image");
          // console.log(e);
          e.target.querySelector(".ho-icon").classList.add("ho-chevron-down");
          return;
        }

        subServicesContainer.classList.add("hidden");
        // e.target.classList.add("ho-background-image");
        e.target.querySelector(".ho-icon").classList.remove("ho-chevron-down");
        return;
      });
  }
}
