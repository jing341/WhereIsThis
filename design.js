const tell = [];
const tellValue = Math.floor(Math.random() * 3);

function tellFunction(where) {
  let img;
  if (!tell.includes(`아주 예쁜 ${where} 이군요!`)) {
    tell.push(
      `멋진 ${where} 이군요!`,
      `꼭 가보고 싶은 ${where} 이네요!`,
      `아주 예쁜 ${where} 이군요!`
    );
  }
  changeText();

  if (!document.querySelector("img")) {
    switch (where) {
      case "바다":
        img =
          "https://cdn.pixabay.com/photo/2016/11/14/22/18/beach-1824855_1280.jpg";
        break;
      case "산":
        img =
          "https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_1280.jpg";
        break;
      case "도시":
        img =
          "https://cdn.pixabay.com/photo/2015/03/26/09/48/buildings-690364_1280.jpg";
        break;
    }
    createImg(img);
  }
}

function createImg(img) {
  const image = document.createElement("img");
  image.src = img;
  document.getElementById("main").appendChild(image);
}

function changeText() {
  document.getElementById("where-text").innerText = tell[tellValue];
  if (document.getElementById("warning-span")) {
    document
      .getElementById("warning-span")
      .parentNode.removeChild(document.getElementById("warning-span"));
  }
}
