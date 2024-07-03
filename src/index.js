import Softkey from "./js/softkey";
import Navigation from "./js/navigation";

document.addEventListener("keydown", event => {
  switch (event.key) {
    case "Enter":
      return Softkey.Enter(event);
    case "ArrowRight":
      return Navigation.Right(event);
    case "ArrowLeft":
      return Navigation.Left(event);
    case "SoftRight":
      return Softkey.SoftRight(event);
    default:
      return;
  }
});
