function showHidden(){
    const hidden = document.getElementById("hiddenMeme");
    if (hidden.style.display === "none"){
        hidden.style.display = "inline-block";
    }else{
        hidden.style.display = "none";
    }
}