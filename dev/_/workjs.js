const menuBar = document.getElementById("menu_bar");
const menuText = document.getElementById("menu_textbox");
const menuNav = document.getElementById("menu_nav");

let menuStatus = false;

menuBar.addEventListener("mouseup", () => {
  if(!menuStatus) {
    menuStatus = true;
    // menuBar.style.height = "100vh";
    // menuText.style.display = "none";
    menuNav.style.height = "100vh";
  } else {
    menuStatus = false;
    menuBar.style = "";
    // menuText.style.display = "none";
    menuNav.style = "";
  }
});
