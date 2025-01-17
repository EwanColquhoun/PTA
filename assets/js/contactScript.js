window.onload(console.log('ready'))

let send = document.getElementById(con-submit)
let name_value = document.getElementById(name_input).value
let email = document.getElementById(email).value
let sbj = document.getElementById(subject).value
let msg = document.getElementById(message).value


send.addEventListener('onclick', (e)=> {
    e.preventDefault()
    console.log(name_value, email, subject, msg)
})