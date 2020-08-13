// index.html
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const linkContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const toggleBtn = document.querySelector(".nav-toggle");
const icon = document.querySelector("i");
const preload = document.querySelector(".preloader");
//******** preloader***********
window.onload =()=>{
  icon.classList.remove("fa-times");
  preload.classList.add("hide-preloader");
};
toggleBtn.addEventListener("click", ()=>{
   // linkContainer.classList.toggle("show-links");
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linkContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`;
        icon.classList.add("fa-times");
    } else {
        linkContainer.style.height = 0;
        icon.classList.remove("fa-times");
    }
});
// ********** fixed navbar ************
const navbar = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll",()=>{
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }

// setup back to top link
if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
  topLink.addEventListener("click",()=>icon.classList.remove("fa-times"));
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    //remove times icon
    icon.classList.remove("fa-times");
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linkContainer.style.height = 0;
  });
});

