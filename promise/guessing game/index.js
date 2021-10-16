const enterNumber = () => {
    return new Promise((resolve, reject) => {
        let userNumber = Number(prompt('Enter values (1-6): '))
        let randomNumber = Math.floor(Math.random() * 6 + 1)
        
        if (!isNaN(userNumber) && userNumber < 7) {
            if (userNumber === randomNumber) {
                resolve({
                    point: 2,
                    userNumber,
                    randomNumber
                })
            } else if (userNumber === randomNumber+1 || userNumber === randomNumber-1) {
                resolve({
                    point: 1,
                    userNumber, 
                    randomNumber
                })
            } else {
                resolve({
                    point: 0,
                    userNumber, 
                    randomNumber
                })
            }
        } else reject('Sorry we cant count a NaN or number above 6, try again')
    })
}

const continueGame = () => {
    return new Promise((resolve, reject) => {
        confirm('Continue playing? ') ? resolve(true) : resolve(false)
    })
}

const handleGuess = () => {
    let strResult = ''

    enterNumber()
        .then(value => {
            if (value.point === 2) {
                strResult += `Congratulation your guess is right you got 2 point`
            } else if (value.point === 1) {
                strResult += `Congratulation your guess is almost right you got 2 point`
            } else {
                strResult += `Wow, it's a shame you failed.`
            }

            strResult += '\n'
            strResult += `Your number is ${value.userNumber}\n`
            strResult += `Our number is ${value.randomNumber}\n`
            strResult += `You got ${value.point}`
            alert(strResult)
            continueGame().then(result => {
                if (result) {
                    handleGuess()
                } else {
                    alert(`Oke, thank you. good bye`)
                }
            })
        })
        .catch(alert)
}

handleGuess()