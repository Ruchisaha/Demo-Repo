
let input =document.getElementById("inp");
let text=document.querySelector(".text");

function Add(){
    if(input.value==""){
        alert("please Enter task")
    }else{
        let newEle=document.createElement("li");
        newEle.innerHTML = `${input.value}  <i class="fa-solid fa-trash"></i>`; 
        text.appendChild(newEle);
        input.value=""
        newEle.querySelector("i").addEventListener("click",function(){
        
            newEle.remove();
        });
    }
}



