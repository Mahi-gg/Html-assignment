document.getElementById("addBtn").addEventListener("click", function () {
    let taskText = document.getElementById("taskInput").value;
    let priority = document.getElementById("listSelect").value;

    if (taskText === "") {
        alert("enter  task!");
        return;
    }

    
    let li = document.createElement("li");
    li.classList.add(priority);

   
    let check = document.createElement("input");
    check.type = "checkbox";
    check.addEventListener("change", () => {
        li.classList.toggle("completed");
    });

    
    let span = document.createElement("span");
    span.textContent = taskText;

   
    let delBtn = document.createElement("button");
    delBtn.textContent = "delete";
    delBtn.addEventListener("click", () => {
        li.remove();
    });


    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);


    document.getElementById("taskInput").value = "";
});