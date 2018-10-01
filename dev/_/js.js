const rowMainNavs = document.querySelectorAll(".row");
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
      row.style.marginLeft = "calc(8.125% * 2 + 10%)";
      project.style.textAlign = "center";

      client.style.marginLeft = "calc(8.125% * 2 + 10%)";
      client.style.width = "0";
      category.style.width = "0";

      client.style.color = "rgba(0,0,0,0)";
      category.style.color = "rgba(0,0,0,0)";
    });

    row.addEventListener("mouseleave", () => {
      row.style = "";
      project.style = "";
      client.style = "";
      category.style = "";
    });
  });
};

getRowHeights(rowMainNavs);

window.addEventListener("resize", () => {
  getRowHeights(rowMainNavs);
});

centerProjectName(rowMainNavs);

