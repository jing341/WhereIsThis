// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/Y6AjzvFqZ/";

let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  // load the model and metadata
  // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
  // or files from your local hard drive
  // Note: the pose library adds "tmImage" object to your window (window.tmImage)
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  // Convenience function to setup a webcam
  const flip = true; // whether to flip the webcam
  webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
  await webcam.setup(); // request access to the webcam
  await webcam.play();
  window.requestAnimationFrame(loop);

  // append elements to the DOM
  document.getElementById("webcam-container").appendChild(webcam.canvas);
}

async function loop() {
  webcam.update(); // update the webcam frame
  await predict();
  window.requestAnimationFrame(loop);
}

async function predict() {
  // predict can take in an image, video or canvas html element
  const prediction = await model.predict(webcam.canvas);
  let sea, mount, city;
  if (prediction[1]) {
    switch (prediction[1].className) {
      case "바다":
        sea = prediction[1].probability;
        break;

      case "도시":
        city = prediction[1].probability;
        break;

      case "산":
        mount = prediction[1].probability;
        break;
    }
  }

  if (prediction[2]) {
    switch (prediction[2].className) {
      case "바다":
        sea = prediction[2].probability;
        break;

      case "도시":
        city = prediction[2].probability;
        break;

      case "산":
        mount = prediction[2].probability;
        break;
    }
  }

  if (prediction[3]) {
    switch (prediction[3].className) {
      case "바다":
        sea = prediction[3].probability;
        break;

      case "도시":
        city = prediction[3].probability;
        break;

      case "산":
        mount = prediction[3].probability;
        break;
    }
  }

  console.log(mount, sea, city);
}

init();
