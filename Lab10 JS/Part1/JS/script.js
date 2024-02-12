
document.addEventListener("DOMContentLoaded", function() {
    // ------------------------------- Add new task to todo list ----------------------------------
    function Add() 
    {
        var taskText = document.getElementById("txt").value;

        if (taskText.trim() !== "") 
        {
            let empty = document.getElementById("empty");
            empty.style.display = "none";
            var newTask = document.createElement("div");
            newTask.className = "task";
            
            newTask.innerHTML = 
            `
                <span>${taskText}</span>
                <div>
                    <button class="done-btn">
                        <img src="./images/check-mark.png" width="15px" height="15px">
                    </button>
                    <button class="remove-btn">
                        <img src="./images/cancel.png" width="15px" height="15px">
                    </button>
                </div>
            `;

            newTask.style.padding = "10px";
            var List = document.getElementById("list");
            List.appendChild(newTask);

            SaveTasks(taskText);
            document.getElementById("txt").value = "";

            newTask.querySelector(".done-btn").addEventListener("click", function() {
                Mark(this);
            });

            newTask.querySelector(".remove-btn").addEventListener("click", function() {
                Remove(this);
            });
        }
    }

    // ---------------------------------------- Mark done tasks ------------------------------------------
    function Mark(doneBtn) 
    {
        var taskText = doneBtn.parentElement.parentElement;
        taskText.style.backgroundColor = "rgb(155, 231, 155)";

        doneBtn.style.display = "none";
    }

    // ------------------------------------- remove done tasks from todo ----------------------------------

    function Remove(removeBtn) 
    {
        var task = removeBtn.parentElement.parentElement;
        console.log(task);
        if (task.style.backgroundColor != "rgb(155, 231, 155)") 
        {
            var confirmation = confirm("Are you sure you want to remove this task?");
            if (!confirmation) 
            {
                return;
            }
        }
        task.remove();

        var taskText = task.querySelector("span").innerHTML;
        // console.log(taskText);
        RemoveTask(taskText);  
        
        
        let list = document.getElementById("list");
        if (list.children.length == 1) 
        {
            var empty = document.getElementById("empty");
            empty.style.display = "block";
        }
    }


    // -------------------- Check if local storage is null and craete empty array of tasks --------------------

    if(!localStorage.getItem("Tasks"))
    {
        localStorage.setItem("Tasks", JSON.stringify([]));
    }

    // ------------------------------------ Saving tasks to local storage -------------------------------------

    function SaveTasks(textValue) 
    {
        let tasksArr = JSON.parse(localStorage.getItem("Tasks"));
        // console.log(tasksArr);
        tasksArr.push(textValue);
        // console.log(JSON.stringify(tasksArr));
        localStorage.setItem("Tasks", JSON.stringify(tasksArr));
    }

    // -------------------------------- Removing tasks from local storage --------------------------------------

    function RemoveTask(TargetTask)
    {
        var Tasks = JSON.parse(localStorage.Tasks);
        // console.log(Tasks);

        for (var i = 0; i < Tasks.length; i++) {
            if (Tasks[i] === TargetTask) {
                Tasks.splice(i, 1); 
                break; 
            }
        }
        localStorage.setItem("Tasks", JSON.stringify(Tasks));
    }

    //----------------------------------------- Access add buutton --------------------------------------------

    document.getElementById("add-btn").addEventListener("click", Add);

    // ----------------------------------- Load data from local storage to page -------------------------------
    function LoadData() 
    {
        if(localStorage.Tasks)
        {
            let tasksArray = JSON.parse(localStorage.Tasks);

            if(tasksArray.length > 0)
            {
                let List = document.getElementById("list");
                for (let i = 0; i < tasksArray.length; i++) 
                {
                    var newTask = document.createElement("div");
                    newTask.className = "task";
                    
                    newTask.innerHTML = 
                    `
                        <span>${tasksArray[i]}</span>
                        <div>
                            <button class="done-btn">
                                <img src="./images/check-mark.png" width="15px" height="15px">
                            </button>
                            <button class="remove-btn">
                                <img src="./images/cancel.png" width="15px" height="15px">
                            </button>
                        </div>
                    `;
            
                    newTask.style.padding = "10px";
                    
                    List.appendChild(newTask);
            
                    newTask.querySelector(".done-btn").addEventListener("click", function() {
                        Mark(this);
                    });
            
                    newTask.querySelector(".remove-btn").addEventListener("click", function() {
                        Remove(this);
                    });


                }
            } else{
                console.log("Your list is empty !");
                let empty = document.getElementById("empty");
                empty.style.display = "block";
            }
        } else {
            console.log("No tasks found in local storage !");
        }
    }
    LoadData();
    //------------------------------------------------------------------------------------------------------------------------------
});
