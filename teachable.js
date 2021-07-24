const URL = "https://teachablemachine.withgoogle.com/models/Y6AjzvFqZ/";

let model, webcam, labelContainer, maxPredictions, WhereIsThis;

async function init() {
  console.log(file);
  console.log(cam);
  file.remove();
  cam.remove();

  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  const flip = true;
  webcam = new tmImage.Webcam(200, 200, flip);
  await webcam.setup();
  await webcam.play();
  window.requestAnimationFrame(loop);

  document.getElementById("webcam-container").appendChild(webcam.canvas);
}

async function loop() {
  webcam.update();
  await predict();
  window.requestAnimationFrame(loop);
}

async function predict() {
  const prediction = await model.predict(webcam.canvas);
  let mount = prediction[0].probability,
    sea = prediction[1].probability,
    city = prediction[2].probability;

  if (sea > city) {
    if (sea > mount) {
      WhereIsThis = "바다";
    } else {
      WhereIsThis = "산";
    }
  } else if (city > mount) {
    WhereIsThis = "도시";
  } else {
    WhereIsThis = "산";
  }

  tellFunction(WhereIsThis);
}
