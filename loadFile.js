function loadFile() {
  const file2 = file.files;
  console.log(file2);

  const newImage = document.createElement("img");
  newImage.setAttribute("class", "img");

  newImage.src = URL.createObjectURL(file2);

  newImage.style.width = "70%";
  newImage.style.height = "70%";
  newImage.style.visibility = "hidden";
  newImage.style.objectFit = "contain";

  const container = document.getElementById("webcam-container");
  container.appendChild(newImage);
}
