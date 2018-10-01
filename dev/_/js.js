const rowMainNavs = document.querySelectorAll(".row.main_nav");
let ROWHEIGHTS = [];

const getRowHeights = rows => {
  ROWHEIGHTS = [];
  
  rows.forEach(row => {
    row.style.height = "";
    ROWHEIGHTS.push(window.getComputedStyle(row, null)
      .getPropertyValue("height"));
  });
};

const centerProjectName = rows => {
  rows.forEach((row, index) => {
    if(row.id === "name") return;

    const project = row.querySelector(".project");
    const client = row.querySelector(".client");
    const category = row.querySelector(".category");
  
    row.addEventListener("mouseover", () => {
      row.style.height = `${ROWHEIGHTS[index]}`;

      client.style.display = "none";
      category.style.display = "none";

      setTimeout(() => {
        project.style.marginLeft = "calc(8.125% * 2 + 10%)";
        project.style.textAlign = "center";
      }, 10);
    });

    row.addEventListener("mouseleave", () => {
      project.style = "";
      setTimeout(() => {
        client.style = "";
        category.style = "";
      }, 350);
    });
  });
};

getRowHeights(rowMainNavs);

window.addEventListener("resize", () => {
  getRowHeights(rowMainNavs);
});

centerProjectName(rowMainNavs);

