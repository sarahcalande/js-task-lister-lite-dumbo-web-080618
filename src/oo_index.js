
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();


//find task creator form
  let taskcreator = document.querySelector("#create-task-form")

//add event listener so that input appears where its supposed to on submit
  taskcreator.addEventListener("submit", function(a){
      a.preventDefault()
      let list = document.createElement("li");
      let tasks = document.querySelector("#tasks");
      let userinput = document.querySelector("#new-task-description").value;
      list.innerText = userinput;
      tasks.appendChild(list)
  })
});
