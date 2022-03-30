const output = document.querySelector("#email-output")
const input = document.querySelector("#email-input")
const printing = document.querySelector("#print")

printing.addEventListener(`click`, event => {
    let myEmail = input.value
    output.textContent = myEmail
    input = ""
})