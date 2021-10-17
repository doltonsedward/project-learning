function getAge() {
    const age = Number(prompt('How old are you? '))
    let text = ''
    if (!isNaN(age)) {
        if (age < 18) {
            text = 'You are still minor, please try another movie'
        } else  {
            text = "Okay, you're in tune. please sit in the space provided"
        }

        alert(text)
        return
    } 
    
    alert('You must enter a number..')
    getAge()
}

getAge()