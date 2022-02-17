{
    const welcome = () => {
        console.log("Witam wszystki developerów zaglądających tutaj");
    };

    const onFromSumbit = (event) => {
        event.preventDefault();

        const sumElement = document.querySelector(".js-sum");
        const rateElement = document.querySelector(".js-rate");

        const sum = sumElement.value;
        const rate = rateElement.value;
        const result = sum * rate;
        updateSumResult(result, sum);
    }

    const updateSumResult = (result, sum) => {
        const resultElement = document.querySelector(".js-result");
        const sumResult = document.querySelector(".js-sumResult");

        resultElement.innerText = result.toFixed(2);
        sumResult.innerText = sum;
    }

    const reset = () => {
        const resultElement = document.querySelector(".js-result");
        const sumResult = document.querySelector(".js-sumResult");

        resultElement.innerText = "0.00";
        sumResult.innerText = "0.00";
    }

    const currencyElementTextChanging = () => {
        const currencyElement = document.querySelector(".js-currency");
        const currencyNameElement = document.querySelector(".js-currencyName");
        const currencyResult = document.querySelector(".js-currencyResult");
        //drugi raz deklaruje zmienną rateElement do poprawki
        const rateElement = document.querySelector(".js-rate");

        if (currencyElement.value === 'USD') {
            currencyNameElement.innerText = `Podaj kwotę(USD)*`;
            currencyResult.innerText = `USD`;
            rateElement.value = 4.0049;
        }

        if (currencyElement.value === 'EUR') {
            currencyNameElement.innerText = `Podaj kwotę(EUR)*`;
            rateElement.value = 4.5358;
            currencyResult.innerText = `EUR`;
        }
    }

    const init = () => {
        const buttonResetElement = document.querySelector(".js-buttonReset");
        buttonResetElement.addEventListener("click", reset);

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFromSumbit);
        formElement.addEventListener("input", currencyElementTextChanging);
        welcome();
    }

    init();
}
