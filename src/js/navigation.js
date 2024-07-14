import { spotify } from "./spotify";

(() => {
  const firstElement = document.querySelectorAll(".input #button")[0];
  firstElement.setAttribute("nav-selected", "true");
  firstElement.focus();
  if(document.querySelector(".loginView").style.display === "block"){
    const firstLoginElement =  document.querySelectorAll(".field")[0];
  firstLoginElement.focus();
  }
})();

const getAllElements = () => document.querySelectorAll(".input #button");
const getAllLoginElements = () => document.querySelectorAll(".field");

const getTheIndexOfTheSelectedElement = () => {
  const element = document.querySelector(".input #button");
  return element ? parseInt(element.getAttribute("nav-index")) : 0;
};

const getTheIndexOfTheSelectedLoginElement = () => {
  const element = document.activeElement;
  return element ? parseInt(element.getAttribute("nav-index")) : 0;
};


const selectElement = selectElement =>
  [].forEach.call(getAllElements(), (element, index) => {
    const selectThisElement = element === selectElement;
    element.setAttribute("nav-selected", selectThisElement);
    element.setAttribute("nav-index", index);
    if (element.nodeName === 'BUTTON') {
      selectThisElement ? element.focus() : element.blur();
    }
    
  });
  
const Right = event => {
  const allElements = getAllElements();
  const currentIndex = getTheIndexOfTheSelectedElement();
  const setIndex = currentIndex + 1;
  document.querySelector("#search").style.display = "none";
  document.querySelector("#lib").style.display = "block";
  selectElement(allElements[setIndex] || allElements[0]);
};

const Enter = event => {
  
}

const Up = event => {
  const allElements = getAllLoginElements();
  const currentIndex = getTheIndexOfTheSelectedLoginElement();
  const setIndex = currentIndex-1;
  console.log(setIndex)
  if(allElements[setIndex] == undefined){allElements[0].focus()}else{allElements[setIndex].focus()};
}
const Down = event => {
  const allElements = getAllLoginElements();
  const currentIndex = getTheIndexOfTheSelectedLoginElement();
  const setIndex = currentIndex+1;
  console.log(setIndex)
  if(currentIndex==1){spotify}else{allElements[setIndex].focus()}
}
const Left = event => {
  const allElements = getAllElements();
  const currentIndex = getTheIndexOfTheSelectedElement();
  const setIndex = currentIndex - 1;
  document.querySelector("#lib").style.display = "none";
  document.querySelector("#search").style.display = "block";
  selectElement(allElements[setIndex] || allElements[0]);
};

const SoftRight = event => {
  console.log("Skip to next song!")
};

const SoftLeft = event => {
  console.log("Skip to prev song")
};

export default { SoftRight, SoftLeft, Right, Left, Up, Down, Enter, selectElement };
