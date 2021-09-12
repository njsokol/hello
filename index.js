(function(){
    const colors = [
        "131624",
        "132124",
        "102024",
        "10241d",
        "102412",
        "1f2410",
        "241f10",
        "241010",
        "24101c",
        "201024",
    ];
    let currentColorIndex = 0;

    const doc = document.querySelector("html");

    const updateBackground = () => {
        
        doc.style.backgroundColor = `#${colors[currentColorIndex]}`
        updateColorIndex();
    }

    const updateColorIndex = () => {
        if (currentColorIndex === colors.length - 1) {
            currentColorIndex = 0;
        }
        else {
            currentColorIndex++;
        }
    }

    updateBackground();
    
    window.setInterval(updateBackground, 6000);

})();