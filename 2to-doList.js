const inputBox = document.querySelector("inputField input");
const addBtn = document.querySelector("inputField input");
const addBtn = document.querySelector("inputField button");
const todoLIst = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector("footer button");
inputBox.onkeyup = () => {
    let userENteredValue.trim() != 0) {
        addBtn.classList.add("active");
    }else { addBtn.classList.remove("active"); }
}
showTasks();
addBtn.onclick = () => {
    let userENteredValue = inputBox.nodeValue;
    let getLocalStorageData = localStorage.getItem("new Todo");
    if (getLocalStorageData == null{ listArray = []; } else {
        listArray = JSON.parse
            (getLocalStorageData);
    }
    listArray.push(userENteredValue);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
    addBtn.classList.remove("active");
    function showTasks() {
        let getLocalStorageData = localStorage.getItem("New Todo");
        if (getLocalStorageData == null) { listArray = [] };
    }else { listArray = JSON.parse(getLocalStorageData); }
    const pendingTaskNumb=document.querySelector("pendingTasks");
    pendingTaskNumb.textContent=listArray.length;
    if(listArray.length>0)
    deleteAllBtn.classList.add("active");}else{deleteAllBtn.classList.remove
    ("active");}
    letNewLiTag="";
    listArray.forEach((element, index)=>{NewLiTag +=<li>
    ${element}<span class="icon" onclick="deleteTask"($){index}})"><i
    class="fas fa-trash"></i></span></li>;  
});
todoLIst.innerHTML=NewLiTag;
inputBox.value="";}
function deleteTask(index){let getLocalStorageData=localStorage.getItem
("New Todo");
listArray=JSON.parse(getLocalStorageData);
listArray.splice(index, 1);
localStorage.setItem("New Todo", JSON.stringify(listArray));
showTasks();
function()}
deleteAllBtn.onclick=()=>{listArray=[];
localStorage.setItem("New Todo".JSON.stringify(listArray));
showTasks();}