// Focus on text area
var line = 1;
document.getElementById("like-btn").addEventListener("click", function(){
    var c = document.getElementById("text-area");

    if(line % 2 == 0){
        c.style.border = "none";
        c.style.overflow = 'hidden';
        c.style.height = (c.scrollHeight) + 'px';
        this.innerHTML = "<i class='fa fa-pencil-square-o'> </i> Edit ";
    }else{
        c.style.border = '1px solid gray';
        c.style.overflow = 'auto';
        this.innerHTML = "<i class='fa fa-save'> </i> Save ";
    }
    line += 1;
});

document.getElementById("text-area").addEventListener("input", function(){
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// Like button
var count = 1;
document.getElementsByClassName("buttons")[1].addEventListener("click", function(){

    document.getElementById("likers").innerHTML = "<p>" + count + " times you liked </p>";
    count++;
});

// Comment box
document.getElementsByClassName("buttons")[2].addEventListener("click", function(){
    var texts = document.getElementById("comment-text").value;
    var para = document.createElement("p");
    var te = document.createTextNode(texts);
    para.append(te);
    para.style.padding = "20px 30px";
    para.style.backgroundColor = "white";
    para.style.fontSize = "20px";
    para.style.borderRadius = "10px";
    var list = document.getElementById("comments");
    list.insertBefore(para, list.childNodes[0]);
});


// This will trigger then we will press on "Sign In Button"
document.getElementById('buttons').children[0].addEventListener("click", function(){
    document.getElementsByClassName("boxes")[0].style.visibility = "visible";
});

// This will trigger then we will press on "Sign Up Button"
document.getElementById('buttons').children[1].addEventListener("click", function(){
    document.getElementsByClassName("boxes")[1].style.visibility = "visible";
});