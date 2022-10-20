function updateProgress(forward) {
  var sliderProgress = document.getElementById("slider-progress");
  var currentProgress = sliderProgress.clientWidth;
  if (forward && currentProgress <= 160) {
    sliderProgress.style.width = `${(currentProgress + 40)}px`;
  } else if (!forward && currentProgress >= 40) {
    sliderProgress.style.width = `${(currentProgress - 40)}px`;
  }
}

