const menuBar = document.getElementById("menu_bar");
const menuText = document.getElementById("menu_textbox");
const menuNav = document.getElementById("menu_nav");

let menuStatus = false;

function noscroll() {
  const body = document.querySelector("body");

  body.style.overflow = "hidden";
}

menuBar.addEventListener("mouseup", () => {
  if(!menuStatus) {
    menuStatus = true;
    // menuText.style.display = "none";
    menuBar.style.display = "none";
    menuNav.style.height = "100vh";
    window.addEventListener("scroll", noscroll);
  } else {
    menuStatus = false;
    menuBar.style = "";
    // menuText.style.display = "none";
    menuNav.style = "";
    window.removeEventListener("scroll", noscroll);
  }
});
