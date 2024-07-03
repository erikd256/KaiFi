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
  document.querySelector("#search").style.display = "none";
  document.querySelector("#lib").style.display = "block";
  selectElement(allElements[setIndex] || allElements[0]);
};

const Enter = event => {
  
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

export default { SoftRight, SoftLeft, Right, Left, Enter, selectElement };
