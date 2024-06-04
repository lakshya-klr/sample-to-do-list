
var searchvalue=document.getElementById('inputtextvalue');
var listoftasks= document.getElementById('listoftasks');


function addtask(){
    if(searchvalue.value==''){
        alert('task value can not be empty');
    }
    else{
        let task=document.createElement("li");
        task.innerHTML=searchvalue.value;
        listoftasks.appendChild(task);
        let span= document.createElement('span');
        span.innerHTML="remove task";
        task.appendChild(span);

        searchvalue.value='';
        saveit();
    }
}
listoftasks.addEventListener("click",function (e){
    if(e.target.tagName=='LI'){
        e.target.classList.toggle('check');
        saveit();
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        saveit();
    }
},false);

function saveit(){
    localStorage.setItem("data",listoftasks.innerHTML);
}
function showit(){
    listoftasks.innerHTML=localStorage.getItem("data");
}
showit();