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

  feature.innerHTML = information[0][id].feature;
  header.innerHTML = information[0][id].header;
  pictureURL.src = picPath + information[0][id].url;
  text.innerHTML = information[0][id].text;
}

export default Expand;