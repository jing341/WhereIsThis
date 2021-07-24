const file = document.createElement("input"),
  cam = document.createElement("button");

function buttonSetting() {
  document
    .querySelector("button")
    .parentNode.removeChild(document.querySelector("button"));
  document
    .getElementById("start-span")
    .parentNode.removeChild(document.getElementById("start-span"));
  file.type = "file";
  file.id = "file-btn";
  file.accept = "image/*";
  file.onchange = loadFile;
  cam.innerText = "Camera";
  cam.id = "cam-btn";
  cam.onclick = init;
  document.getElementById("webcam-container").appendChild(file);
  document.getElementById("webcam-container").appendChild(cam);
}
