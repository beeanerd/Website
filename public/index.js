window.onscroll = function() {stickyNavBar()};
var navigation = document.getElementById("navigation");
var about = document.getElementById("about")
var sticky = navigation.offsetTop;

window.onresize = function() {refreshVariable()}

function refreshVariable() {
  sticky = navigation.offsetTop;
  if (sticky == 0) {
    about = document.getElementById("about")
    sticky = about.offsetTop;
  }
  console.log(sticky)
}
function stickyNavBar() {
  if (window.pageYOffset >= sticky) {
    navigation.classList.add("sticky")
  } else {
    navigation.classList.remove("sticky");
  }
}
