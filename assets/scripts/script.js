// Script for multiple expandable accordion

// let clickedBtns = new Array();
// let clickedBtnIndex = 0;
// let otherBtns = new Array();

// function expand(btnID) {
//   let btnClicked = document.getElementById(btnID);
//   let pathVertical = btnClicked.children[0].firstElementChild;
//   let content = btnClicked.parentElement.parentElement.lastElementChild;
//   if (clickedBtns.includes(btnID)) {
//     // Collapse logic
//     collapse(btnID, pathVertical, content);
//   } else {
//     // Expand logic
//     pathVertical.style.display = "none";
//     clickedBtns.push(btnID);
//     console.log("expand");
//     content.style.display = "block";
//   }
//   console.log(clickedBtns);
// }

// // Collapse logic
// function collapse(btnID, pathVertical, content) {
//   pathVertical.style.display = "block";
//   clickedBtnIndex = clickedBtns.indexOf(btnID);
//   clickedBtns.splice(clickedBtnIndex, 1);
//   content.style.display = "none";
//   console.log("collapse");
// }

// Script for Single expandable accordion

var prevBtnID = new String();
prevBtnID = null;

function expand_collapse(btnID) {
  // Collapse logic
  if (prevBtnID != null && prevBtnID != btnID) {
    console.log(`collapsed: ${prevBtnID} \nexpanded: ${btnID}`);
    expand(btnID);
    collapse(prevBtnID);
    prevBtnID = btnID;
    // console.log(`After:-  collapsed: ${prevBtnID} and expanded: ${btnID}`);
  } else if (prevBtnID != null && prevBtnID == btnID) {
    collapse(btnID);
    console.log(`collapsed: ${prevBtnID}`);
    prevBtnID = null;
    // console.log(`prevBtnID: ${prevBtnID} & btnID: ${btnID}`);
  }
  // Expand logic
  else {
    expand(btnID);
    console.log(`expanded: ${btnID}`);
    prevBtnID = btnID;
    // console.log(`prevBtnID: ${prevBtnID} & btnID: ${btnID}`);
  }
}

function expand(btnID) {
  let btnClicked = document.getElementById(btnID);
  let pathVertical = btnClicked.children[0].firstElementChild;
  let content = btnClicked.parentElement.parentElement.lastElementChild;

  pathVertical.style.display = "none";
  content.style.display = "block";
}

function collapse(btnID) {
  let prevBtn = document.getElementById(btnID);
  let pathVertical = prevBtn.children[0].firstElementChild;
  let content = prevBtn.parentElement.parentElement.lastElementChild;

  pathVertical.style.display = "block";
  content.style.display = "none";
}

let burger_toggle = 0;

function burger() {
  let burgerBtn = document.getElementsByClassName("burger-wrapper")[0];
  let burgerMenu = document.getElementById("burger-menu");
  let header = document.getElementsByTagName("header")[0];
  let headerLogo = document.getElementsByClassName("navbar__logo-wrapper")[0];
  if (burger_toggle == 0) {
    console.log("clicked");
    burgerMenu.style.display = "block";
    header.style.backgroundColor = "#FFFFFF";
    burgerBtn.children[1].style.display = "block";
    burgerBtn.children[0].style.display = "none";
    console.log(headerLogo);
    headerLogo.firstElementChild.style.display = "none";
    headerLogo.lastElementChild.style.display = "block";
    burger_toggle = 1;
  } else if (burger_toggle == 1) {
    console.log("unclicked");
    burgerMenu.style.display = "none";
    header.style.backgroundColor = "transparent";
    burgerBtn.children[1].style.display = "none";
    burgerBtn.children[0].style.display = "block";
    headerLogo.firstElementChild.style.display = "block";
    headerLogo.lastElementChild.style.display = "none";
    burger_toggle = 0;
  }
}
