const rowSleeves = document.querySelectorAll(".row_sleeve");
const profile = document.getElementById("profile");
const name = document.getElementById("name");
const contact = document.getElementById("contact");

let ROWHEIGHTS = [];

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
      row.style.height = `${ROWHEIGHTS[index]}`;
      row.style.paddingLeft = "calc(8.125% * 2 + 10%)";
      project.style.textAlign = "center";

      client.style.marginLeft = "calc(8.125% * 2 + 10%)";
      client.style.width = "0";
      category.style.width = "0";

      client.style.color = "rgba(0,0,0,0)";
      category.style.color = "rgba(0,0,0,0)";
    });

    sleeve.addEventListener("mouseleave", () => {
      row.style = "";
      project.style = "";
      client.style = "";
      category.style = "";
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

getRowHeights(rowSleeves);
window.addEventListener("resize", () => {
  getRowHeights(rowSleeves);
});

centerProjectName(rowSleeves);
centerName();

