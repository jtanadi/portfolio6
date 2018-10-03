const rowSleeves = document.querySelectorAll(".row_sleeve");
const profile = document.getElementById("profile");
const name = document.getElementById("name");
const contact = document.getElementById("contact");

let ROWHEIGHTS = [];

// This may be unnecessary
const getRowHeights = rows => {
  ROWHEIGHTS = [];
  
  rows.forEach(row => {
    row.style.height = "";
    ROWHEIGHTS.push(window.getComputedStyle(row, null)
      .getPropertyValue("height"));
  });
};

const centerProjectName = sleeves => {
  sleeves.forEach((sleeve, index) => {
    if(sleeve === profile) return;
    const row = sleeve.querySelector(".row");

    const project = row.querySelector(".project");
    const client = row.querySelector(".client");
    const category = row.querySelector(".category");
  
    sleeve.addEventListener("mouseover", () => {
      // Maybe remove this
      // row.style.height = `${ROWHEIGHTS[index]}`;

      row.classList.add("row_centered");
      project.classList.add("project_centered");

      client.classList.add("nav_hidden");
      category.classList.add("nav_hidden");
    });

    sleeve.addEventListener("mouseleave", () => {
      // Maybe remove this
      // row.style = "";
      row.classList.remove("row_centered");
      project.classList.remove("project_centered");

      client.classList.remove("nav_hidden");
      category.classList.remove("nav_hidden");
    });
  });
};

const centerName = () => {
  const row = profile.querySelector(".row");

  name.addEventListener("mouseenter", e => {
    row.style.height = `${ROWHEIGHTS[0]}`;
    row.style.paddingLeft = "calc(8.125% * 2 + 10%)";
    name.style.textAlign = "center";
    contact.style.marginLeft = "calc(8.125% * 2 + 10%)";
    contact.style.width = "0";
  });

  profile.addEventListener("mouseleave", () => {
    row.style = "";
    name.style = "";
    contact.style = "";
  });
};

// getRowHeights(rowSleeves);
// window.addEventListener("resize", () => {
//   getRowHeights(rowSleeves);
// });

centerProjectName(rowSleeves);
centerName();
