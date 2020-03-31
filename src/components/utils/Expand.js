import information from "../../information.json";

function Expand(event) {
  const x = document.querySelectorAll(".activeSpan");
  x[0].classList.remove("activeSpan");
  event.target.parentElement.classList.add("activeSpan");
  display(event.target.id)
};
  
function display(id) {
  const picPath = process.env.PUBLIC_URL + '/assets/images/timeline/';

  const feature = document.getElementById("feature");
  const header = document.getElementById("header");
  const pictureURL = document.getElementById("pictureURL");
  const text = document.getElementById("text");

  feature.innerHTML = information[id].feature;
  header.innerHTML = information[id].header;
  pictureURL.src = picPath + information[id].url;
  text.innerHTML = information[id].text;
}

export default Expand;