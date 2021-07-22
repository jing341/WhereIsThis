const tell = [];

const tellValue = Math.floor(Math.random() * 3);

function tellFunction(where) {
  if (!tell.includes(`아주 예쁜 ${where} 이군요!`)) {
    tell.push(
      `멋진 ${where} 이군요!`,
      `꼭 가보고 싶은 ${where} 이네요!`,
      `아주 예쁜 ${where} 이군요!`
    );
  }
  changeText();
}

function changeText() {
  document.getElementById("where-text").innerText = tell[tellValue];
}
