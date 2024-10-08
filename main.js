const prev = document.querySelector(".prev");
prev.addEventListener("click", previous);
console.log(prev);

const next = document
  .querySelector(".next")
  .addEventListener("click", nextImage);

function previous() {
  console.log("test");
  //   Récupération de la valeur du slider
  const widthSlider = document.querySelector(".slider").offsetWidth;

  // Je decalle l'image de la taille du slide

  const sliderContent = document.querySelector(".slider_content");
  sliderContent.scrollLeft -= widthSlider;
  const scrollLeft = sliderContent.scrollLeft;
  const itemsSlider = sliderContent.querySelectorAll(".slider_content_item");

  if (scrollLeft == 0) {
    document.querySelector(".prev").style.display = "none";
  } else {
    document.querySelector(".next").style.display = "block";
  }
}
function nextImage() {
  console.log("next");
  //   Récupération de la valeur du slider
  const widthSlider = document.querySelector(".slider").offsetWidth;

  // Je decalle l'image de la taille du slide

  const sliderContent = document.querySelector(".slider_content");
  sliderContent.scrollLeft += widthSlider;
  const scrollLeft = sliderContent.scrollLeft;
  const itemsSlider = sliderContent.querySelectorAll(".slider_content_item");

  if (scrollLeft == widthSlider * (itemsSlider.length - 2)) {
    document.querySelector(".next").style.display = "none";
  } else {
    document.querySelector(".prev").style.display = "block";
  }
}
