const button = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");
const paragraph = document.querySelector("#result");

button.onclick = function check()
{
    let str = textInput.value.toLowerCase().replace(/[^a-z0-9]/, '');
    const string = textInput.value;
    let rev = str.split('').reverse().join('');
    if (str === "")
        alert("Please input a value");
    else
    {
        if (rev === str)
            paragraph.innerHTML = `<span style="font-weight: bold">${string}</span> is a palindrome.`
        else
            paragraph.innerHTML = `<b>${string}</b> is not a palindrome.`
    }
}
