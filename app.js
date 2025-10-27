document.getElementById("submit").addEventListener("click", AddTask)

function AddTask(){
    let list = document.getElementById("list");
    let input = document.getElementById("new-task");
    let text = input.value;
    let newTask = document.createElement("li");
    let taskDiv = document.createElement("div");

    if (text === ""){
        return;
    }

    newTask.textContent = text;
    list.appendChild(newTask);

    input.value = "";

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Finish task";
    completeBtn.className = "complete-btn";
    completeBtn.addEventListener("click", function(){
        newTask.className = "done";
        completeBtn.className = "btn-done";
        deleteBtn.className = "btn-done";
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove task";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function(){
        list.removeChild(newTask);
    })

    newTask.appendChild(taskDiv);
    taskDiv.appendChild(completeBtn);
    taskDiv.appendChild(deleteBtn);
}
