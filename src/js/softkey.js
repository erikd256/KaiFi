import Navigation from "./navigation";

const getCurrentElement = () => document.querySelector("[nav-selected=true]");

const SoftEnter = event => {
  Window.alert("Play/Pause")
};

const SoftRight = event => {
  Window.alert("Skip to next song!")
};

const SoftLeft = event => {
  Window.alert("Skip to prev song")
};




export default { Enter, SoftRight, SoftLeft, getLabels, setLabels };
