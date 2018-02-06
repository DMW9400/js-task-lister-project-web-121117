/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 1
  return class List {
    constructor(title) {
      this.title = title
      this.id = id++
      store.lists.push(this)
    }
    renderList(){

      let newDiv = document.createElement('div')
      newDiv.classList.add("list")
      newDiv.setAttribute("data-id",this.id)

      let h2 = document.createElement('h2')
      let liButton = document.createElement('button')
      let taskUl = document.createElement('ul')

      h2.innerText = this.title
      h2.appendChild(liButton)


      newDiv.appendChild(h2)
      newDiv.appendChild(taskUl)

      liButton.classList.add("delete-list")
      liButton.setAttribute("data-id",this.id)
      liButton.innerText = "X"


      const listSelect = document.getElementById("parent-list")
      const listItem = document.createElement("option")
      listItem.setAttribute("data-id",this.id)
      listItem.innerText = this.title
      listSelect.appendChild(listItem)
      return newDiv

    }

  }


})()
