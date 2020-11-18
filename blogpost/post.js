// Focus on text area
document.getElementById("text-area").addEventListener("focus", function(){
    this.style.border = '1px solid gray';
    this.style.overflow = 'auto';
    
    document.getElementsByClassName("buttons")[0].innerHTML = "<i class='fa fa-save' style='font-family:'arial''> Save </i>";
});

// Lost focus on text area
document.getElementById("text-area").addEventListener("focusout", function(){
    this.style.border = 'none';
    this.style.overflow = 'hidden';
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
