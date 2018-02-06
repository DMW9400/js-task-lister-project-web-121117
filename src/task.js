/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 1
  return class Task {
    constructor(description, priority, listID) {
      this.description = description
      this.priority = priority
      this.id = id++
      this.listID = listID
      console.log(this)
    }
    renderTask(){
      let newLi = document.createElement('li')
      newLi.setAttribute("data-id",this.id)
      let br = document.createElement('br')
      let liContent = "Task: " + this.description + "<br />" + "Priority:" + this.priority
      newLi.innerText = liContent
      return newLi
    }
  }

})()
