let output = document.getElementById('demo');
let txtInput = document.querySelector(".inputs input");
let checkButton = document.querySelector(".inputs button");
let filterInput;


txtInput.addEventListener('keyup', () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (filterInput) {
        return checkButton.classList.add("active");
    }
    checkButton.classList.remove("active");
});

checkButton.addEventListener('click', () => {
    let reverseInput = filterInput.split("").reverse().join("");
    output.style.display = "block";
    if (reverseInput !== filterInput) {
        output.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
    } else {
        output.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
    }
});
