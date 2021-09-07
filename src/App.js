import "./styles.css";
import $ from "jquery";
import "../jquery.pagepiling.js";
import "../jquery.pagepiling.css";

$(document).ready(function () {
  $("#pagepiling").pagepiling({
    menu: null,
    direction: "vertical",
    verticalCentered: true,
    sectionsColor: [],
    anchors: [],
    scrollingSpeed: 700,
    easing: "swing",
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      textColor: "#000",
      bulletsColor: "#000",
      position: "right",
      tooltips: ["section1", "section2", "section3", "section4"]
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: ".section",
    animateAnchor: false,

    //events
    onLeave: function (index, nextIndex, direction) {},
    afterLoad: function (anchorLink, index) {},
    afterRender: function () {}
  });
});

export default function App() {
  return (
    <div className="App">
      <div id="pagepiling">
        <div class="section divone">Some section</div>
        <div class="section divtwo">Some section</div>
        <div class="section divthree">Some section</div>
        <div class="section divfour">Some section</div>
      </div>
    </div>
  );
}
