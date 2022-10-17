const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('button')

form.addEventListener(`submit`, (e) => {
 
   e.preventDefault()

})

nameInput.addEventListener('input', (e) => {
  inputText(e)
})

lastName.addEventListener('input', (e) => {
  inputText(e)
})

email.addEventListener('input', (e) => {
  inputEmail(e)
})

password.addEventListener('input', (e) => {
  inputPassword(e)
})

function inputText(e) {
  if (e.target.validity.tooShort) {
    e.target.classList.add('invalid')
    e.target.nextElementSibling.textContent = `Your ${e.target.placeholder} is too short!`
  } else {
    e.target.classList.remove('invalid')
    e.target.nextElementSibling.textContent = ''
  }
}

function inputEmail(e) {
  if (e.target.validity.typeMismatch) {
    e.target.classList.add('invalid')
    e.target.nextElementSibling.textContent = `Please enter your ${e.target.placeholder}!`
  } else {
    e.target.classList.remove('invalid')
    e.target.nextElementSibling.textContent = ''
  }
}

function inputPassword(e) {
  if (e.target.value.length < 6) {
    e.target.classList.add('invalid')
    e.target.nextElementSibling.textContent = `Your ${e.target.placeholder} is too short!`
  } else if (e.target.value.length > 12) {
    e.target.classList.add('invalid')
    e.target.nextElementSibling.textContent = `Your ${e.target.placeholder} is too long!`
  } else if (e.target.validity.patternMismatch) {
    e.target.classList.add('invalid')
    e.target.nextElementSibling.textContent = `Your ${e.target.placeholder} must contain at least one capital letter and a number!`
  } else {
    e.target.classList.remove('invalid')
    e.target.nextElementSibling.textContent = ''
  }
}
