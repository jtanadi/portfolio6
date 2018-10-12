const rows = document.querySelectorAll(".row");

const profile = document.getElementById("profile");
const name = document.getElementById("name");

function toggleCenterRowContents() {
  if(this.id === "profile") return;

  const client = this.querySelector(".client");
  const category = this.querySelector(".category");
  
  this.classList.toggle("row_centered")
  client.classList.toggle("nav_hidden");
  category.classList.toggle("nav_hidden");
}

function toggleCenterProfile() {
  const contact = this.parentElement.querySelector("#contact");
  this.classList.toggle("row_centered");
  contact.classList.toggle("nav_hidden")
  contact.style.width = "0"
}

rows.forEach(row => row.addEventListener("mouseenter", toggleCenterRowContents))
rows.forEach(row => row.addEventListener("mouseleave", toggleCenterRowContents))
name.addEventListener("mouseenter", toggleCenterProfile)
name.addEventListener("mouseleave", toggleCenterProfile)