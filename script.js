document.querySelector('button').addEventListener("click",add);
function add(){
    let name=document.getElementById('name').value;
    let content=document.getElementById('content').value;
    if (name && content){
        const inserthtmat=document.getElementById('todoList');
        const todolist=document.createElement('li');
        todolist.innerHTML=name + ': '+content + '<i class="bi bi-trash"></i>';
        todolist.querySelector('i').addEventListener("click",function(){
            inserthtmat.removeChild(todolist);

        });
        inserthtmat.appendChild(todolist);
        document.getElementById('todoForm').reset();}
    }

