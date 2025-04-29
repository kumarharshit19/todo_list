let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBnt = document.createElement("button");
    delBnt.innerText= "Delete";
    delBnt.classList.add("delete");

    item.appendChild(delBnt);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
});


// let delBtns = document.querySelectorAll(".delete");

// for(delBnt of delBtns){
//     delBnt.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }