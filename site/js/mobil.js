var imageCounter = 1;
showDiv(imageCounter);
function changeImage(m) {
showDiv(imageCounter = imageCounter + m);
} 
function showDiv(n) {
    var i;
    var imageArray=document.getElementsByClassName("mySlides");
    if (n > imageArray.length) {
    imageCounter = 1;
} 
    if (n < 1) {
    imageCounter=imageArray.length;
} 
    for (i = 0; i < imageArray.length; i++) {
    imageArray[i].style.display = "none";
}  
    imageArray[imageCounter-1].style.display="block"; 
} 
    var slideIndex= 0; showSlides();
    function showSlides()
    {
        var i;
        var slides=document.getElementsByClassName("mySlides");
        for(i= 0; i <slides.length;i++) {
            slides[i].style.display="none";
    } 
    slideIndex++;if(slideIndex>slides.length) {
    slideIndex=1;
    } 
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,4000);
}