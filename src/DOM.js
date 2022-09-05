const projectForm = document.querySelector('.project-form')
const taskForm = document.querySelector('.task-form')
const addProjectButton = document.querySelector('.project-button')
const addTaskButton = document.querySelector('.task-button')
const projectUl = document.querySelector('ul')
const hamburgerMenuButton = document.querySelector('.fa-bars')
const gridContainer = document.querySelector('.grid-container')

function showProjectForm() {
  addProjectButton.addEventListener('click', () => {
    if(projectForm.style.display === 'hidden') {
      projectForm.style.display = 'block'
    } else {
      return
    }
  })
}

function showTaskForm() {
  addTaskButton.addEventListener('click', () => {
    if(taskForm.style.display === 'hidden') {
      console.log('ok')
      taskForm.style.display = 'block'
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
  hamburgerMenuButton.addEventListener('click', () => {
    if(gridContainer.style.display == 'none') {
      gridContainer.style.display = 'grid'
    } else {
      gridContainer.style.display = 'none'
    }
  })
}



export { showProjectForm, showTaskForm, submitProject, cancelProject, showHiddenContent }