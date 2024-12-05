let country = document.getElementById("country")
country.addEventListener("input", onSelectCountry);


function onSelectCountry() {
    let phone = document.getElementById("phone")
    let countryValue = country.value;


    if (countryValue === "uz") {
        phone.value = "+998";
    } else if (countryValue === "ru") {
        phone.value = "+7";
    } else if (countryValue === "tj") {
        phone.value = "+992";
    }
}




let checkbox = document.getElementById("check")
checkbox.addEventListener("input", activeBtn);


function activeBtn() {
    let checkboxValue = checkbox.checked
    let btn = document.getElementById("btn");

    if (checkboxValue) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
}