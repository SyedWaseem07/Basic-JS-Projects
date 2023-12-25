const box = document.getElementsByClassName('inputBox');
const btn = document.getElementsByClassName('btn');

function addTask() {
    if(box[0].value === "") {
        alert("CANNOT ADD EMPTY TASK");
    } else{
        let li = document.createElement('li');
        li.innerHTML = box[0].value + "<span class = 'cross'>&#10005</span>";
        let ul = document.getElementById('taskList');
        ul.appendChild(li);
    }
    box[0].value = '';
}

btn[0].addEventListener('click', addTask);
let ul = document.getElementById('taskList');
ul.addEventListener('click', (e) => {
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
   if(e.target.tagName == "LI"){
        e.target.classList.toggle('checked');
   }
})
