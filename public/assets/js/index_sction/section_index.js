/************************************services section************************************* */
const element = document.getElementById("horizontal-section");
const element2 = document.getElementById("horizontal-section2");
const widthScreen = window.innerWidth;

if(element){ 
  if(widthScreen <= 1024){
    if(element2) {
      element2.classList.remove("d-none");
      element2.classList.add("d-block");  
    }
    element.classList.remove("d-block");
    element.classList.add("d-none");
  } else {
    element.classList.remove("d-none");
    element.classList.add("d-block");
    if(element2) {
      element2.classList.remove("d-block");
      element2.classList.add("d-none");
    }
  }
}

 
const services = [
  { title:"Branding", video:"https://res.cloudinary.com/doizn3h1h/video/upload/v1759712576/18419658-hd_1920_1080_30fps_ajaqks.mp4",  list:["Creative Direction","Brand Identity","Branding Strategy","Graphic Design","Startup"]},
  { title:"UI-UX Design", video:"https://res.cloudinary.com/doizn3h1h/video/upload/v1759712548/12920659-hd_1920_1080_30fps_xg9jpi.mp4",list:["UI UX Consulting","UX Research","Usability Testing","Wireframing","Prototyping"]},
  { title:"Development", video:"https://res.cloudinary.com/doizn3h1h/video/upload/v1759712578/8303104-hd_1920_1080_24fps_y87nso.mp4", list:["WordPress","Webflow","Laravel Framework","React & Flutter","Design System"]},
  { title:"Digital Marketing", video:"https://res.cloudinary.com/doizn3h1h/video/upload/v1759713619/VIDEO_1_WEBSITE22_gjmcv7.mp4", list:["Online Marketing","SEO-Marketing","Strategy","Market Research","Social Reform"]}
];

function renderServices(containerId){
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  services.forEach(service => {
    const card = document.createElement("div"); card.className = "service-box";
    const listItems = service.list.map(item => `<li>${item}</li>`).join("");
    card.innerHTML = `<div class="thumb"><video autoplay muted loop playsinline><source src="${service.video}" type="video/mp4"></video></div><div class="overlay"><h3>${service.title}</h3><ul>${listItems}</ul></div>`;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", function(){
  renderServices("servicesContainer");
  gsap.registerPlugin(ScrollTrigger);
  const container = document.getElementById("servicesContainer");
  const section = document.getElementById("horizontal-section");
  const progressBar = document.getElementById("progressBar");

  gsap.to(".section-title",{opacity:1,y:0,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:section,start:"top 80%"}});

  function calculateScrollDistance(container){
    const cards = container.querySelectorAll(".service-box");
    const style = getComputedStyle(container);
    const gap = parseInt(style.gap) || 60;
    const paddingLeft = parseInt(style.paddingLeft) || 0;
    const paddingRight = parseInt(style.paddingRight) || 0;
    let totalCardsWidth = 0;
    cards.forEach(card => totalCardsWidth += card.offsetWidth);
    totalCardsWidth += gap * (cards.length -1) + paddingLeft + paddingRight + 200;
    
    return totalCardsWidth - window.innerWidth;
  }

function initScroll(){
  const container = document.getElementById("servicesContainer");
  const section = document.getElementById("horizontal-section");
  const progressBar = document.getElementById("progressBar");

  if(!section || window.innerWidth <= 768) return;

  const scrollDistance = calculateScrollDistance(container);

  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:section,
      start:"top top",
      end: ()=>`+=${scrollDistance}`,
      scrub:1,
      pin:true,
      anticipatePin:1,
      onUpdate: self => {progressBar.style.width = `${self.progress*100}%`;}
    }
  });

  tl.to(container,{x: -scrollDistance, ease:"none"});

  const cards = gsap.utils.toArray(".service-box");
  if(cards.length === 0) return; 

  cards.forEach(card=>{
    const overlay = card.querySelector(".overlay");
    if(!overlay) return;
    const title = overlay.querySelector("h3");
    const listItems = overlay.querySelectorAll("li");
    gsap.set([overlay,title,listItems],{opacity:0});

    ScrollTrigger.create({
      trigger:card,
      containerAnimation:tl,
      start:"left center",
      end:"right center",
      onEnter:()=>{
        gsap.to(overlay,{opacity:1,duration:0.6});
        gsap.to(title,{opacity:1,y:0,duration:0.6,ease:"power3.out"});
        gsap.to(listItems,{opacity:1,y:0,stagger:0.1,duration:0.4});
        gsap.fromTo(card,{scale:0.95},{scale:1,duration:0.6,ease:"power3.out"});
      },
      onLeaveBack:()=>{gsap.to(overlay,{opacity:0,duration:0.5});}
    });
  });
}

  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  let currentX = 0;
  const step = window.innerWidth * 0.7;

  nextBtn.addEventListener("click", () => {
    const maxX = calculateScrollDistance(container);
    currentX = Math.min(currentX + step, maxX);
    gsap.to(container, {x:-currentX, duration:0.8, ease:"power3.out"});
  });

  prevBtn.addEventListener("click", () => {
    currentX = Math.max(currentX - step, 0);
    gsap.to(container, {x:-currentX, duration:0.8, ease:"power3.out"});
  });

  window.addEventListener("load", ()=>{initScroll(); ScrollTrigger.refresh();});
  window.addEventListener("resize", ()=>ScrollTrigger.refresh());
});

/************************************services section************************************* */

/*const services = [
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
});*/

/***********************************project section***************************************** */

const brands = [
  {
    bg: "assets/imgs/roya-imgs/project_img/al_majed.png",
    logo: "assets/imgs/roya-imgs/project_img/overlay/majed_brand_log.png",
    altLogo: "al_majed Logo",
    altBg: "al_majed Brand",
    href: "portfolio-details.html?id"
  },
  {
    bg: "assets/imgs/roya-imgs/project_img/z.png",
    logo: "assets/imgs/roya-imgs/project_img/overlay/zee_brand_logo.png",
    altBg: "Z Brand",
    altLogo: "Z Logo",
    href: "portfolio-details.html?id=Z-branding"
  },
  {
    bg: "assets/imgs/roya-imgs/project_img/woven.png",
    logo: "assets/imgs/roya-imgs/project_img/overlay/woven_brand_logo.png",
    altBg: "Woven Brand",
    altLogo: "Woven Logo",
    href: "portfolio-details.html?id=woven"
  },
  {
    bg: "assets/imgs/roya-imgs/project_img/zalila.png",
    logo: "assets/imgs/roya-imgs/project_img/overlay/zalila_brand_logo.png",
    altLogo: "Zalila Logo",
    altBg: "Zalia Brand",
    href: "portfolio-details.html?id=zalila-branding"
  },
  {
    bg: "assets/imgs/roya-imgs/project_img/1.png",
    logo: "assets/imgs/roya-imgs/project_img/overlay/fiorella_brand_logp.png",
    altLogo: "Fiorella Logo",
    altBg: "Fiorella Brand",
    href: "portfolio-details.html?id=Fiorella-branding"
  }
  
];

const brandRow = document.getElementById("brand-row");

brands.forEach((brand, index) => {
  const card = document.createElement("div");
  card.className = "card__2 col-lg-6 col-md-8 col-sm-12";

  card.setAttribute("data-aos", "zoom-in");
  card.setAttribute("data-aos-duration", "1000");
  card.setAttribute("data-aos-delay", `${index * 200}`);
  card.setAttribute("data-aos-easing", "ease-out-cubic");

  card.innerHTML = `
  <a href="${brand.href}">
    <img class="bg" src="${brand.bg}" alt="${brand.altBg}" loading="lazy">
    <div class="overlay"></div>
    <img class="logo" src="${brand.logo}" alt="${brand.altLogo}" loading="lazy">
  </a>
    `;

  brandRow.appendChild(card);
});

AOS.refresh();


/*************teamGrid*************************** */

const teamGrid = document.getElementById('teamGrid');
const teamSection = document.querySelector('.team-section');

const teamMembers = [

  { name: "Fahad Al-Sahli", job: "Co-Founder & Managing Partner", img: "assets/imgs/roya-imgs/person_image/Fahad.jpg" },
  { name: "Majed Alsirafy", job: "Co-Founder & Managing Partner", img: "assets/imgs/roya-imgs/person_image/Majed.jpg" },
  { name: "Ahmed Al-Sahhar", job: "Co-Founder & Managing Partner", img: "assets/imgs/roya-imgs/person_image/Ahmed_co.jpg" },
  { name: "Mohamed Abdo", job: "Co-Founder & CFO", img: "assets/imgs//roya-imgs/person_image/Mohamed.jpg" },

/*  { name: "eissa", job: "", img: "assets/imgs//roya-imgs/person_image/eissa.jpg" },
  { name: "enjy", job: "", img: "assets/imgs//roya-imgs/person_image/enjy.jpg" },
  { name: "Gana", job: "", img: "assets/imgs//roya-imgs/person_image/gana.png" },
  { name: "Hayam", job: "", img: "assets/imgs//roya-imgs/person_image/hayam.jpg" },
  { name: "Islam", job: "", img: "assets/imgs//roya-imgs/person_image/islam.jpg" },
  { name: "ismail", job: "", img: "assets/imgs//roya-imgs/person_image/ismail.jpg" },
    { name: "mahran", job: "", img: "assets/imgs//roya-imgs/person_image/mahran.jpg" },
  { name: "Manar", job: "", img: "assets/imgs//roya-imgs/person_image/manar.jpg" },
  { name: "mario", job: "", img: "assets/imgs//roya-imgs/person_image/mario.jpg" },
  { name: "marwa", job: "", img: "assets/imgs//roya-imgs/person_image/marwa.jpg" },
  { name: "Mirna", job: "", img: "assets/imgs//roya-imgs/person_image/Mirna.jpg" },
  { name: "Moha", job: "", img: "assets/imgs//roya-imgs/person_image/Moha.jpg" },
  { name: "mohand", job: "", img: "assets/imgs//roya-imgs/person_image/mohand.jpg" },
  { name: "mr.mohamed", job: "", img: "assets/imgs//roya-imgs/person_image/mr_mohamed.jpg" },
  { name: "Nour", job: "", img: "assets/imgs//roya-imgs/person_image/Nour.jpg" },
  { name: "omar", job: "", img: "assets/imgs//roya-imgs/person_image/omar.jpg" },
  { name: "omnia", job: "", img: "assets/imgs//roya-imgs/person_image/omnia.jpg" },
  { name: "sama", job: "", img: "assets/imgs//roya-imgs/person_image/sama.jpg" }*/
];

teamMembers.forEach((member, index) => {
  const card = document.createElement('div');
  card.className = 'team-card';
  card.style.setProperty('--delay', `${index * 100}ms`);
  card.innerHTML = `
    <img src="${member.img}" alt="${member.name}" loading="lazy">
    <div class="info-box text-center mt-2">
      <h3 class="text-gray-200 font-semibold text-sm">${member.name}</h3>
      <p class="text-gray-400 text-xs">${member.job}</p>
    </div>
  `;
  teamGrid.appendChild(card);
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const cards = teamGrid.querySelectorAll('.team-card');
    if (entry.isIntersecting) {
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('animate');
        }, i * 100);
      });
    } else {
      cards.forEach(card => {
        card.classList.remove('animate');
      });
    }
  });
}, { threshold: 0.3 }); 

sectionObserver.observe(teamSection);

let isDown = false;
let startX;
let scrollLeft;

teamGrid.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - teamGrid.offsetLeft;
  scrollLeft = teamGrid.scrollLeft;
  teamGrid.style.cursor = "grabbing";
});
teamGrid.addEventListener('mouseleave', () => {
  isDown = false;
  teamGrid.style.cursor = "grab";
});
teamGrid.addEventListener('mouseup', () => {
  isDown = false;
  teamGrid.style.cursor = "grab";
});
teamGrid.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - teamGrid.offsetLeft;
  const walk = (x - startX) * 2;
  teamGrid.scrollLeft = scrollLeft - walk;
});

