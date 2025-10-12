 let tasks=[];
         function addTask(){
            document.getElementById('taskInput');
            const text=taskInput.value.trim();
            if(text==="") {
                return alert("Please enter a task!");
            }

            const newTask={
                id:Date.now(),
                text:text,
                completed:false,
                createdAt:new Date().toLocaleString()
            };

            tasks.push(newTask);
            taskInput.value="";
            renderTasks();
         }

        function toggleComplete(id){
            const task=tasks.find(t=>t.id===id);
            task.completed=!task.completed;
            if(task.completed){
                task.completedAt=new Date().toLocaleString();
            }
            renderTasks();
        }
        function editTask(id){
            const newText=prompt("Edit Your Task:");
            if (newText){
                const task=tasks.find(t=>t.id===id);
                task.text=newText.trim();
                renderTasks();
            }
        }
        function deleteTask(id){
            tasks=tasks.filter(t=>t.id!==id);
            renderTasks();
        }

        function renderTasks(){
            const pendingList=document.getElementById('pendingTasks');
            const completedList=document.getElementById('completedTasks');
            pendingList.innerHTML="";
            completedList.innerHTML="";

            tasks.forEach(task=>{
                const li=document.createElement('li');
                li.className=task.completed ? "completed" : "";
                li.innerHTML=`
                <div style="display:flex;align-items:center;gap:10px;">
                    <input type="checkbox" ${task.completed? "checked" : ""} onchange="toggleComplete(${task.id})">
                    <span>${task.text}</span>
                    </div>
                    <div>
                        <button onclick="editTask(${task.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button>
                        <small class="date">${task.completed? task.completedAt:task.createdAt}</small>
                    </div>
                    `;
                    if(task.completed){
                        completedList.appendChild(li);
                    }else{
                        pendingList.appendChild(li);
                    }
            });
        }