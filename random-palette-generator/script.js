const refreshBtn = document.querySelector(".refresh-btn"),
container= document.querySelector(".container") ;
const MAXPALETTEBOXES =30;

const generatePalette = ()=>{
    container.innerHTML = "";
    for(let i =0; i< MAXPALETTEBOXES; i++){
        let = randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}` ;
        const color = document.createElement("li");

        //creating a new li to append into container class with the random hex values 
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                        <span class="hex-value">${randomHex}</span>` ;

        color.addEventListener("click", ()=> copyColor(color));
        //apending the color li as a new child of the div class container
        container.appendChild(color);
    }
}
generatePalette();

const copyColor = (elem) =>{
    const colorElement = elem.querySelector(".hex-value"),
    hexVal = colorElement.innerHTML;
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerHTML = "Copied";
        setTimeout(()=>colorElement.innerHTML = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color code!"));
}

refreshBtn.addEventListener("click", generatePalette);