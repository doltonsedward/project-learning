const movies = [
    {
        title: 'Harry potter', 
        minAge: 18
    }, {
        title: 'The predator', 
        minAge: 18
    }, {
        title: 'Cinematic', 
        minAge: 10
    }
]

function movieApp() {
    let strToPromp = "Today will be present:\n"
    for (let i = 0; i < movies.length; i++) 
        strToPromp += `  ${i+1}. ${movies[i].title}\n` // make list of movies to the prompt

    strToPromp += "\n"
    strToPromp += "What movie would you like to see?"
    const choices = Number(prompt(strToPromp))

    getAge(movies[choices-1]) // Subtract one to choose according to number not index and send data to function getAge()
    confirm('Continue ? ') ? movieApp() : alert('Oke, see you next time')
}

function getAge(choices) {
    const age = Number(prompt('How old are you? '))
    let text = ''
    if (!isNaN(age)) {
        // Check if age is not less than movies.minAge
        if (age < choices.minAge) {
            text = 'You are still minor, please try another movie'
        } else {
            text = "Okay, you're in tune. please sit in the space provided"
        }
    
        return alert(text)
    } 
    
    alert('You must enter a number..')
    movieApp()
}

movieApp()