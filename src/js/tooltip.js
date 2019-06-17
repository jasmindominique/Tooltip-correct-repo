

class Tooltip {

	constructor(selector, text, overrideOptions) {

		let $linkEl = document.querySelector(selector);
 		let $newText = document.createTextNode(text);
		let $hoverDiv = document.createElement("div");
		let linkBox = $linkEl.getBoundingClientRect(); 
		
		
		let defaultOptions = {
			backgroundColor:'purple',
			color:'white',
			position: 'right',
		}

		const combinedOptions = Object.assign({}, defaultOptions, overrideOptions);
		
		let hideTooltip = () => {
			document.body.removeChild($hoverDiv);
			console.log("deleted tooltip");
		}

		let showTooltip = () => {
			
			this.options =  Object.assign({}, defaultOptions, overrideOptions); 
			
			$hoverDiv.appendChild($newText);
			document.body.appendChild($hoverDiv);

			$hoverDiv.style.position = "absolute";
			$hoverDiv.style.left =linkBox.right + "100" + 'px';			
			$hoverDiv.style.top= linkBox.top + "50" + 'px';
			$hoverDiv.style.backgroundColor= this.options.backgroundColor; 

		}
	
		// let setupListeners = () => {
			$linkEl.addEventListener("mouseover", showTooltip);
			$linkEl.addEventListener("mouseout", hideTooltip);

		// }
	}
}

