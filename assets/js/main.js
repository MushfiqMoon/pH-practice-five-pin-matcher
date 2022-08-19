// console.log('connected');

//working on the pin genaration part

const getPin = () => {
    const pin = generatePin()
    const pinString = pin + ""
    if (pinString.length === 4) {
        return pin
    } else {
        // console.log('not 4 ditit', pin);
        return getPin()
    }
}


const generatePin = () => {
    const rentom = Math.round(Math.random() * 10000)

    return rentom
}

document.getElementById('generate-pin').addEventListener('click', function () {

    let showPin = document.getElementById('show-pin')

    showPin.value = getPin()

})


//working on the calculator part

document.getElementById('calculator').addEventListener('click', function (e) {

    const showDigit = e.target.innerText

    let typedNum = document.getElementById('typed-number')
    let previousTypdNum = typedNum.value


    if (isNaN(showDigit)) {

        if (showDigit === 'C') {

            typedNum.value = ""

        } else if (showDigit === '<') {

            const lastDigit = previousTypdNum.slice(0, previousTypdNum.length - 1)

            typedNum.value = lastDigit

        }

    } else {

        const newiousTypdNum = previousTypdNum + showDigit

        typedNum.value = newiousTypdNum
    }


})

//working on the Final part
document.getElementById('check-pin').addEventListener('click', function () {
    const generatePIN = document.getElementById("show-pin").value
    const typedPIN = document.getElementById('typed-number').value

    const msgFail = document.getElementById('fail')
    const msgSuccess = document.getElementById('success')

    if (generatePIN === "" || typedPIN === "") {
        return
    }

    if (generatePIN === typedPIN) {
        msgSuccess.style.display = 'block'
        msgFail.style.display = 'none'
        
    } else {
        msgFail.style.display = 'block'
        msgSuccess.style.display = 'none'
    }
})

