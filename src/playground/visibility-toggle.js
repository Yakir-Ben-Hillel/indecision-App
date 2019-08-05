const appRoot = document.getElementById("app");
let massage = "Show Details";
const clicked = () => {
  if (massage == "Hide Details") massage = "Show Details";
  else {
    massage = "Hide Details";
  }
  render();
};
function isHidden(massage) {
  if (massage === "Hide Details") {
    const info = (
      <div>
        <p>info</p>
      </div>
    );
    return info;
  }
}
const render = () => {
  const template = (
    <div>
      <h1>VisibilityToggle</h1>
      <button onClick={clicked}>{massage}</button>
      {isHidden(massage)}
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
