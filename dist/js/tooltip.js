"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tooltip = function Tooltip(selector, text, overrideOptions) {
  var _this = this;

  _classCallCheck(this, Tooltip);

  var $linkEl = document.querySelector(selector);
  var $newText = document.createTextNode(text);
  var $hoverDiv = document.createElement("div");
  var linkBox = $linkEl.getBoundingClientRect();
  var defaultOptions = {
    backgroundColor: 'purple',
    color: 'white',
    position: 'right'
  };
  var combinedOptions = Object.assign({}, defaultOptions, overrideOptions);

  var hideTooltip = function hideTooltip() {
    document.body.removeChild($hoverDiv);
    console.log("deleted tooltip");
  };

  var showTooltip = function showTooltip() {
    _this.options = Object.assign({}, defaultOptions, overrideOptions);
    $hoverDiv.appendChild($newText);
    document.body.appendChild($hoverDiv);
    $hoverDiv.style.position = "absolute";
    $hoverDiv.style.left = linkBox.right + "100" + 'px';
    $hoverDiv.style.top = linkBox.top + "50" + 'px';
    $hoverDiv.style.backgroundColor = _this.options.backgroundColor;
  }; // let setupListeners = () => {


  $linkEl.addEventListener("mouseover", showTooltip);
  $linkEl.addEventListener("mouseout", hideTooltip); // }
};
//# sourceMappingURL=tooltip.js.map
