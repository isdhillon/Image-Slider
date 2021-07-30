//Declarations
let images=["1.jpg","2.jpg","3.jpg","4.jpg"]
let leftArrow=document.querySelector(".left");
let rightArrow=document.querySelector(".right");
let idx=0;
let image=document.querySelector(".image");
//left arrow
leftArrow.addEventListener("click",function(){
    //managing index
    if(idx==0){
        idx=images.length-1;
    }
    else{
        idx--;
    }
    //updating image
    let imageSelected=images[idx]
    image.setAttribute("src",imageSelected);
})
//right arrow
rightArrow.addEventListener("click",function(){
    //managing index
    if(idx==images.length-1){
        idx=0;
    }
    else{
        idx++;
    }
    //updating image
    let imageSelected=images[idx]
    image.setAttribute("src",imageSelected)
})