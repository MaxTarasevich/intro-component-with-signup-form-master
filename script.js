const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('button')

form.addEventListener(`submit`, (e) => {
  let array = Array.from(e.target)
  array.map((el) => {
    if (el.type == 'text') {
      inputText(el)
    }
    if (el.type == 'email') {
      inputEmail(el)
    }
    if (el.type == 'password') {
      inputPassword(el)
    }
  })
  if (array.some((el) => el.classList.contains('invalid'))) {
    e.preventDefault()
  }
})

nameInput.addEventListener('input', (e) => {
  inputText(e.target)
})

lastName.addEventListener('input', (e) => {
  inputText(e.target)
})

email.addEventListener('input', (e) => {
  inputEmail(e.target)
})

password.addEventListener('input', (e) => {
  inputPassword(e.target)
})

function inputText(el) {
  if (!el.value) {
    el.classList.add('invalid')
    el.nextElementSibling.textContent = `Please enter your ${el.placeholder}!`
  } else if (el.validity.tooShort) {
    el.classList.add('invalid')
    el.nextElementSibling.textContent = `Your ${el.placeholder} is too short!`
  } else {
    el.classList.remove('invalid')
    el.nextElementSibling.textContent = ''
  }
}

function inputEmail(el) {
  if (!el.value) {
    el.classList.add('invalid')
    el.nextElementSibling.textContent = `Please enter your ${el.placeholder}!`
  } else if (el.validity.typeMismatch) {
    el.classList.add('invalid')
    el.nextElementSibling.textContent = `Please enter your ${el.placeholder}!`
  } else {
    el.classList.remove('invalid')
    el.nextElementSibling.textContent = ''
  }
}

function inputPassword(el) {
  if (el.value.length < 6) {
    el.classList.add('invalid')
    el.nextElementSibling.textContent = `Your ${el.placeholder} is too short!`
  } else if (el.value.length > 12) {
    el.classList.add('invalid')
    el.nextElementSibling.textContent = `Your ${el.placeholder} is too long!`
  } else if (el.validity.patternMismatch) {
    el.classList.add('invalid')
    el.nextElementSibling.textContent = `Your ${el.placeholder} must contain at least one capital letter and a number!`
  } else {
    el.classList.remove('invalid')
    el.nextElementSibling.textContent = ''
  }
}
