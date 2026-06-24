document.addEventListener("DOMContentLoaded", function () {
    const memeConatainer = document.querySelector("#meme-container");
    const memeGenerator = document.querySelector("#generator");
    const memeImg = document.querySelector("#user-img");
    const memeTop = document.querySelector("#top-text");
    const memeBtm = document.querySelector("#bottom-text");
    // const flipImg = document.querySelector("#flip-img");

    memeGenerator.addEventListener("submit", function (evt) {
        evt.preventDefault();
        //validate agaisnt long text
        if (memeTop.value.length > 20 || memeBtm.value.length > 20) {
            alert("Meme text to long")
        }

        // validated user image is an actual image
        if (!isImageUrl(memeImg.value)) {
            alert("This is not an image!!!");
            return;
        }

        generateMeme();
        
        memeImg.value = "";
        memeTop.value = "";
        memeBtm.value = "";
        // flipImg.checked = false;

        function generateMeme() {
            const generatedMeme = document.createElement("div");
            const memeTopText = document.createElement("p");
            memeTopText.innerText = memeTop.value;
            generatedMeme.appendChild(memeTopText);
            const memeBottomText = document.createElement("p");
            generatedMeme.setAttribute("class", "meme");
            memeBottomText.innerText = memeBtm.value;
            generatedMeme.appendChild(memeBottomText);

            const img = document.createElement("img");
            img.setAttribute("src", memeImg.value);

            generatedMeme.appendChild(img);

    
            const removeMemeButton = document.createElement("button");
            removeMemeButton.setAttribute("placeholder", "remove meme");
            removeMemeButton.addEventListener("click", function (evt) {
                generatedMeme.remove();
            });

            generatedMeme.appendChild(removeMemeButton);
            memeConatainer.appendChild(generatedMeme);
        }
    });

});

//copied from https://tutorialreference.com/javascript/examples/faq/javascript-how-to-check-if-url-is-image
function isImageUrl(url) {
    // First, check if it's a string and not empty
    if (typeof url !== 'string' || url.length === 0) {
        return false;
    }

    // The regex pattern to match common image file extensions
    // It looks for the extension at the end of the string, before any query parameters.
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)(\?.*)?$/i.test(url);
}