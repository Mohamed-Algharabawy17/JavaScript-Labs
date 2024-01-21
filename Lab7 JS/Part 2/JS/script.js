document.getElementById("add-btn").addEventListener("click", Add);

function Add() 
{
    var taskText = document.getElementById("txt").value;

    if (taskText.trim() !== "") 
    {
        var newTask = document.createElement("div");
        newTask.className = "task";
        
        newTask.innerHTML = 
        `
            <span>${taskText}</span>
            <div>
                <button class="done-btn">
                    <img src="./images/check-mark.png" width = "15px" height = "15px">
                </button>
                <button class="remove-btn">
                    <img src="./images/cancel.png" width = "15px" height = "15px">
                </button>
            </div>
        `;

        newTask.style.padding = "10px";
        var List = document.getElementById("list");
        List.appendChild(newTask);

        document.getElementById("txt").value = "";

        newTask.querySelector(".done-btn").addEventListener("click", function() 
        {
            Mark(this);
        });

        newTask.querySelector(".remove-btn").addEventListener("click", function() 
        {
            Remove(this);
        });
    }
}

function Mark(doneBtn) 
{
    var taskText = doneBtn.parentElement.parentElement;
    taskText.style.backgroundColor = "rgb(155, 231, 155)";

    doneBtn.style.display = "none";
}

function Remove(removeBtn) 
{
    var task = removeBtn.parentElement.parentElement;
    if (task.style.backgroundColor !== "rgb(155, 231, 155)") 
    {
        var confirmation = confirm("Are you sure you want to remove this task?");
        if (!confirmation) 
        {
            return;
        }
    }
    task.remove();
}
