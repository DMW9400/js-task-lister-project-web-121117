let store = {lists:[], tasks:[]}

document.addEventListener('DOMContentLoaded', () => {


  console.log("The DOM content has loaded");
  const listForm = document.getElementById("create-list-form")
  const taskForm = document.getElementById("create-task-form")


  listForm.addEventListener('submit', function(event){
    event.preventDefault()
    const newListTitle = document.getElementById("new-list-title")
    let newListTitleText = newListTitle.value

    const selectionLists = document.getElementById('lists')

    let newList = new List(newListTitleText)
    let newListDiv = newList.renderList()

    selectionLists.appendChild(newListDiv)


  })

  taskForm.addEventListener('submit', function(event){
    event.preventDefault()
    const pl = document.getElementById("parent-list")
    const listID = pl.querySelector(':checked').getAttribute('data-id')
    const descriptionInput = document.getElementById('new-task-description')
    const description = descriptionInput.value
    const priorityInput = document.getElementById('new-task-priority')
    const priority = priorityInput.value


    let newTask = new Task(description, priority, listID)
    let newTaskDiv = newTask.renderTask()
    debugger
    let listDiv = document.querySelector(`div[data-id='${newTask.id}'] ul`)
    listDiv.appendChild(newTaskDiv)
  })

});
