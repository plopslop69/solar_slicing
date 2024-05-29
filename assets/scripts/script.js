let clickedBtns = new Array();
let clickedBtnIndex = 0;

function expand(btnID) {
  let btnClicked = document.getElementById(btnID);
  let pathVertical = btnClicked.children[0].firstElementChild;
  let content = btnClicked.parentElement.parentElement.lastElementChild;
  if (clickedBtns.includes(btnID)) {
    // Collapse logic
    collapse(btnID, pathVertical, content);
  } else {
    // Expand logic
    pathVertical.style.display = "none";
    clickedBtns.push(btnID);
    console.log("expand");
    content.style.display = "block";
  }
  console.log(clickedBtns);
}

// Collapse logic
function collapse(btnID, pathVertical, content) {
  pathVertical.style.display = "block";
  clickedBtnIndex = clickedBtns.indexOf(btnID);
  clickedBtns.splice(clickedBtnIndex, 1);
  content.style.display = "none";
  console.log("collapse");
}
