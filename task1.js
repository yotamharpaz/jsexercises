const body = document.body
const para = document.createElement("div");
para.innerText= "test text";
body.append(para);
const button = document.getElementById("button");
button.addEventListener("click",vanishText)
function vanishText(){
    para.remove()
}
