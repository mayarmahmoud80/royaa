/************************************services section************************************* */
const services = [
  {
    title: "Branding",
    video: "https://res.cloudinary.com/doizn3h1h/video/upload/v1759712576/18419658-hd_1920_1080_30fps_ajaqks.mp4",
    list: [
      "UI UX Consulting",
      "UX Research",
      "Usability Testing",
      "Wireframing",
      "Prototyping"
    ]
  },
  {
    title: "UI-UX Design",
    video: "https://res.cloudinary.com/doizn3h1h/video/upload/v1759712548/12920659-hd_1920_1080_30fps_xg9jpi.mp4",
    list: [
      "Creative Direction",
      "Brand Identity",
      "Branding Strategy",
      "Graphic Design",
      "Startup"
    ]
  },
  {
    title: "Development",
    video: "https://res.cloudinary.com/doizn3h1h/video/upload/v1759712578/8303104-hd_1920_1080_24fps_y87nso.mp4",
    list: [
      "WordPress",
      "Webflow",
      "Laravel Framework",
      "React & Flutter",
      "Design System"
    ]
  },
  {
    title: "Digital Marketing",
    video: "https://res.cloudinary.com/doizn3h1h/video/upload/v1759713619/VIDEO_1_WEBSITE22_gjmcv7.mp4",
    list: [
      "Online Marketing",
      "SEO-Marketing",
      "Strategy",
      "Market Research",
      "Social Reform"
    ]
  }
];


function renderServices(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  container.innerHTML = '';

  services.forEach(service => {
    const col = document.createElement("div");
    col.className = "col-lg-6 col-md-12 service-box service-box_1 fade-anim";
    col.style.width = "48%";
    col.style.height = "60vh";

    const listItems = service.list.map(item => `<li><a href="service-details.html">${item}</a></li>`).join("");

    col.innerHTML = `
      <div class="thumb">
        <video autoplay muted loop playsinline>
          <source src="${service.video}" type="video/mp4">
        </video>
        <div class="branding-label">${service.title}</div>
        <ul class="service-list">
          ${listItems}
        </ul>
      </div>
    `;

    container.appendChild(col);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderServices("servicesContainer");
});

/***********************************project section***************************************** */

// بيانات البراندات
const brands = [
  {
    bg: "assets/imgs/roya-imgs/zee_brand.png",
    logo: "assets/imgs/roya-imgs/zee_brand_logo.png",
    altBg: "Zee Brand",
    altLogo: "Zee Logo"
  },
  {
    bg: "assets/imgs/roya-imgs/woven.JPG",
    logo: "assets/imgs/roya-imgs/woven_brand_logo.png",
    altBg: "Woven Brand",
    altLogo: "Woven Logo"
  },
  // ممكن تضيف كروت تانية هنا بنفس الشكل 👇
  // {
  //   bg: "...",
  //   logo: "...",
  //   altBg: "...",
  //   altLogo: "..."
  // }
];

const brandRow = document.getElementById("brand-row");

brands.forEach(brand => {
  const card = document.createElement("div");
  card.className = "card__2 col-lg-6 col-md-8 col-sm-12";

  card.innerHTML = `
    <img class="bg" src="${brand.bg}" alt="${brand.altBg}">
    <div class="overlay"></div>
    <img class="logo" src="${brand.logo}" alt="${brand.altLogo}">
  `;

  brandRow.appendChild(card);
});
