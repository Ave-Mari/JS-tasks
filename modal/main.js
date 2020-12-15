const openButton = document.querySelector('#openOverlay');
const body = document.body; 

openButton.addEventListener("click", e => {
    const overlayElement = document.createElement("div"); 
    overlayElement.classList.add("overlay"); 

    const containerElement = document.createElement("div");
    containerElement.classList.add("modal-container"); 

    const contnentElement = document.createElement("div");
    contnentElement.classList.add("content");

    contnentElement.innerHTML = "Hello world!"

    const closeElement = document.createElement("a");
    closeElement.classList.add("close"); 
    closeElement.textContent = "x";
    closeElement.href = "#"; 

    closeElement.addEventListener("click", e => {
        e.preventDefault();

        body.removeChild(overlayElement);
    });

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contnentElement);

    body.appendChild(overlayElement);
})
