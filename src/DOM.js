import Todo from "./Constructor"

const projectForm = document.querySelector('.project-form')
const taskForm = document.querySelector('#task-form')
const addProjectButton = document.querySelector('.add-project-button')
const addProjectButton1 = document.querySelector('.add-project-button')
const addTaskButton = document.querySelector('.task-button')
const projectUl = document.querySelector('ul')
const mobileTasksButton = document.querySelector('.mobile-show-tasks')
const gridContainer = document.querySelector('.grid-container')
const tasksContainer = document.querySelector('.all-tasks-container')

function showProjectForm() {
  addProjectButton.addEventListener('click', () => {
    if(projectForm.style.display === 'hidden') {
      projectForm.style.display = 'block'
    } else {
      return
    }
  })
}
    

function submitProject() {
  document.body.addEventListener('click', e => {
    if(e.target.className === 'submit' && document.querySelector('#project-input').value) {
      let li = document.createElement('li')
      li.textContent = document.querySelector('#project-input').value
      projectUl.appendChild(li)
      document.querySelector('#project-input').value = ''
      projectForm.style.display = 'none'
    }
    e.preventDefault()
  }) 
}

function cancelProject() {
  document.body.addEventListener('click', e => {
    if(e.target.className === 'cancel') {
      projectForm.style.display = 'none'
    }
  })
}

function showHiddenContent() {
  mobileTasksButton.addEventListener('click', () => {
    if(tasksContainer.style.display != 'grid') {
     tasksContainer.style.display = 'grid'
    } else if(tasksContainer.style.display === 'grid') {
      tasksContainer.style.display = 'none'
    }

  })
}

addProjectButton1.addEventListener('click', () => {
  if(projectForm.style.display !== 'grid') {
    projectForm.style.display = 'grid'
  } else {
    projectForm.style.display = 'hidden'
  }
})



export { showProjectForm, submitProject, cancelProject, showHiddenContent }

