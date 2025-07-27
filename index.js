var sideClose = document.getElementById("close")
var sideBar = document.getElementById("sideBar")


sideClose.addEventListener("click",function() {
    sideBar.style.display="none"

    
})

var sidenav = document.getElementById("sidenav")
var closeside = document.getElementById("closeside")
var meanuicon = document.getElementById("meanuicon")

meanuicon.addEventListener("click",function(){
    sidenav.style.right=0
    
})

closeside.addEventListener("click",function(){
    sidenav.style.right="-50%"
    
})

currentSliderID = 1


var sliderElement = document.getElementById("slider")
totalslides = sliderElement.childElementCount
console.log(totalslides)


function next() {
    if (currentSliderID < totalslides) {
        currentSliderID++
        showSlide()
        
    }
    
}
function prev() {
    if (currentSliderID > 1) {
        currentSliderID--
        showSlide()
    }
    
}

function showSlide() {

    slides = document.getElementById("slider").getElementsByTagName("li")
    for (let index = 0; index < totalslides; index++) {
        const element = slides[index];
        if(currentSliderID===index+1){
            element.classList.remove("hidden")
        }
        else{
            element.classList.add("hidden")
        }
        
    }
    
}


