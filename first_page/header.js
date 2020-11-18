// This will trigger then we will press on "Create Post Button"
document.getElementById("post-button").children[1].addEventListener("click", function(){
    document.getElementsByClassName("boxes")[0].style.visibility = "visible";
});

// This will trigger then we will press on "Sign In Button"
document.getElementById('buttons').children[0].addEventListener("click", function(){
    document.getElementsByClassName("boxes")[1].style.visibility = "visible";
});

// This will trigger then we will press on "Sign Up Button"
document.getElementById('buttons').children[1].addEventListener("click", function(){
    document.getElementsByClassName("boxes")[2].style.visibility = "visible";
});

// This will trigger then we will press on "All Post Button"
document.getElementById('post-button').children[0].addEventListener("click", function(){
    
});