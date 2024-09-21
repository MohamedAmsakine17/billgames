const hoverDiv = document.querySelector(".hoverDiv");
const newDiv = document.querySelector(".new");
const video = document.getElementById("myVideo");

hoverDiv.addEventListener("mouseenter", () => {
  video.style.display = "block"; // Show the video
  newDiv.style.display = "none";
});

hoverDiv.addEventListener("mouseleave", () => {
  video.style.display = "none"; // Hide the video
  newDiv.style.display = "flex";
});
