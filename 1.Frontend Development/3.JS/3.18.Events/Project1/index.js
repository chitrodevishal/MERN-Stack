const btn = document.querySelector('button')

btn.addEventListener('click', ()=>{
    //read data then show result

    const input1 = document.getElementById('first')
    const number1  = Number(input1.value)
    const input2 = document.getElementById('second')
    const number2  = Number(input2.value)

    if(isNaN(number1) || isNaN(number2)){
        result.textContent = "Invalid"
    }

    // output the result
    const output = number1 + number2
    const result = document.getElementById('result')
    result.textContent = "Result :" + output
})