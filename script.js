document.addEventListener("DOMContentLoaded", function() {
    const tossButton = document.getElementById("tossButton");
    const coinImage = document.getElementById("coinImage");
    const resultParagraph = document.getElementById("result");
    const coinSides = ["heads.png", "tails.png"];
    
    tossButton.addEventListener("click", function() {
        const coinSide = Math.round(Math.random()); // 0 or 1
        resultParagraph.textContent = `You got: ${coinSide === 0 ? "Heads" : "Tails"}`;
        
        coinImage.classList.add("tossing");
        setTimeout(() => {
            coinImage.classList.remove("tossing");
            coinImage.src = coinSides[coinSide];
        }, 1000);
    });
});
