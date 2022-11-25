const fName =document.getElementById('fName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const errorElement=document.getElementById('error')
const form = document.getElementById('form')
form.addEventListener('submit',(e)=>{
    let messages = []
    if(fName.value === '' || fName.value == null){
        messages.push('Name is required')
    }
    if (password.value.length<=6){
        messages.push(' password must be longer than that')
    }
    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText=messages.join(',')
    }
    
    
})