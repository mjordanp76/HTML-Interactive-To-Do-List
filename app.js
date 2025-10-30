document.getElementById("submit").addEventListener("click", AddTask)

function AddTask(){
    const list = document.getElementById("list");
    const input = document.getElementById("new-task");
    const text = input.value;
    const newTask = document.createElement("li");
    const taskDiv = document.createElement("div");

    if (text === ""){
        return;
    }

    newTask.textContent = text;
    list.appendChild(newTask);

    input.value = "";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Finish task";
    completeBtn.className = "complete-btn";
    completeBtn.addEventListener("click", function(){
        newTask.className = "done";
        completeBtn.className = "btn-done";
        deleteBtn.className = "btn-done";
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove task";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function(){
        list.removeChild(newTask);
    })

    newTask.appendChild(taskDiv);
    taskDiv.appendChild(completeBtn);
    taskDiv.appendChild(deleteBtn);
}

const list = document.getElementById("list");

list.addEventListener("mousemove", (e) => {
    const listItems = list.getElementsByTagName("li");
    for (let li of listItems) {
        const rect = li.getBoundingClientRect();
        const liCenter = rect.top + rect.height / 2;
        const distance = Math.abs(e.clientY - liCenter);
        const scale = Math.max(1, 1.2 - distance / 450);
        li.style.transform = `scale(${scale})`;
    }
});

list.addEventListener("mouseleave", () => {
    const listItems = list.getElementsByTagName("li");
    for (let li of listItems) {
        li.style.transform = "scale(1)";
    }
});

