const inputField = document.getElementById('task input');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('Count');
function addTask() {
let taskcount=0;
let tasktext= inputField.ariaValueMax.trim();
if (tasktext==="")
    return;
let li = document.createElement('li');
li.innerHTML = `${tasktext}`;
<button class="delete">X</button>;
taskList.appendChild(li);
taskcount++;
taskCount.innerText = taskcount;
inputField.value="";

taskList.addEventListener('click', function(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        taskcount--;
        taskCount.innerText = taskcount;
    }
    addBtn.addEventListener('click', addTask);
    inputField.addEventListener('keypress', function(e){
        if(e.key === 'Enter'){
            addTask();
        }
});
</script>

