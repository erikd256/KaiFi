import Softkey from "./softkey";

(() => {
  const firstElement = document.querySelectorAll(".input #button")[0];
  firstElement.setAttribute("nav-selected", "true");
  firstElement.setAttribute("nav-index", "0");
  firstElement.focus();
})();

const getAllElements = () => document.querySelectorAll(".input #button");

const getTheIndexOfTheSelectedElement = () => {
  const element = document.querySelector(".input #button");
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
  selectElement(allElements[setIndex] || allElements[0]);
  setSoftkey(setIndex);
};

const Enter = event => {
  const allElements = getAllElements();
  const currentIndex = getTheIndexOfTheSelectedElement();
  const href = allElements[currentIndex].getAttribute("href");
  console.log(href)
}

const Left = event => {
  const allElements = getAllElements();
  const currentIndex = getTheIndexOfTheSelectedElement();
  const setIndex = currentIndex - 1;
  selectElement(allElements[setIndex] || allElements[0]);
  setSoftkey(setIndex);
};

const setSoftkey = setIndex =>
  Softkey.setLabels({
    center: Enter,
    right: setIndex === 0 ? "" : "Delete"
  });

export default { Right, Left, selectElement };