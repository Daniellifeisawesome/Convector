

// function convert() {
//     fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data.rates.RUB); 
//             let rate = data.rates.RUB;
//             let usdAmount = document.getElementById("usd-amount").value;
//             let rubAmount = usdAmount * rate;
//             console.log(rubAmount);
//             document.getElementById("resMoney").innerHTML = `${rubAmount}`;
//             let resultAmount = document.querySelector(".resMoney");
//             let value = document.querySelector(".resMoney").value;
//             console.log(value);
//             value = rubAmount;
//             console.log(resultAmount);
//             // let rubbles = document.createElement("p");
//             resultAmount.append(rubAmount);
//             // rubbles.innerHTML = resultAmount;
//             // resultAmount.append(rubbles)
//         })


// }


function convert() {
    fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
        .then(res => res.json())
        .then(data => {
            console.log(data.rates.RUB); 
            let rate = data.rates.RUB;
            let usdAmount = document.getElementById("usd-amount").value;
           let resu = document.querySelector('.money-text');
            let rubAmount = usdAmount * rate;
            resu.innerText = rubAmount
            console.log(rubAmount);
            document.getElementById("resMoney").innerHTML = `${rubAmount}`;
            let resultAmount = document.querySelector(".resMoney");
            let value = document.querySelector(".resMoney").value;
            console.log(value);
            value = rubAmount;
            console.log(resultAmount);
            // let rubbles = document.createElement("p");
            resultAmount.append(rubAmount);
            // rubbles.innerHTML = resultAmount;
            // resultAmount.append(rubbles)
        })


}
