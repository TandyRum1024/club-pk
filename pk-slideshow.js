var currentSlide = -1;
var slidePic = document.getElementsByClassName("slidey");
var slideNum = slidePic.length;

carousel();

function carousel ()
{
    currentSlide++;

    if (currentSlide < 0)
        currentSlide = slideNum - 1;
    
    currentSlide %= slideNum;

    updateSlides();
    setTimeout(carousel, 3000);
}


function updateSlides ()
{
    slidePic = document.getElementsByClassName("slidey");
    slideNum = slidePic.length;
    var i;

    for (i=0; i<slideNum; i++)
    {
        if (i == currentSlide)
            slidePic[i].style.display = "inline-block";
        else
            slidePic[i].style.display = "none";
    }
}
