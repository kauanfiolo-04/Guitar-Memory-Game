const input = document.querySelector('.login_Input')
const button = document.querySelector('.login_Button')
const form=document.querySelector('.login_Form')

const validateInput = ({target}) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled')
        return
    }

    button.setAttribute('disabled','')  
}

const handleSubmit=(event)=>{
    event.preventDefault()
    
    localStorage.setItem('player', input.value)
    window.location='pages/game.html'
}

input.addEventListener('input',validateInput)

form.addEventListener('submit',handleSubmit)