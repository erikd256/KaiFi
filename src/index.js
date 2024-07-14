import Navigation from "./js/navigation";
document.addEventListener("keydown", event => {
  switch (event.key) {
    case "Enter":
      return Navigation.Enter(event);
    case "ArrowRight":
      return Navigation.Right(event);
    case "ArrowLeft":
      return Navigation.Left(event);
    case "SoftRight":
      return Navigation.SoftRight(event);
    case "SoftLeft":
      return Navigation.SoftLeft(event);
    case "ArrowDown":
      return Navigation.Down(event);
    case "ArrowUp":
      return Navigation.Up(event);
    default:
      return;
  }
});
