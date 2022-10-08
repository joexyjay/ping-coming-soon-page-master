const form = document.querySelector('form')
const input = document.querySelector('input')
const errMsg = document.getElementById('errorMsg')
const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(input.value.trim() === ''){
        input.classList.add('error')
        errMsg.innerText = 'Whoops! It looks like you forgot to add your email'
    }
    else if(!regex.test(input.value)){
        input.classList.add('error')
        errMsg.innerText = 'Please provide a valid email address'
    }
    else{
        input.classList.remove('error')
        errMsg.innerText = ''
    }
})