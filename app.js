//phil welsby - 15 aug 2021
const input = document.getElementById("input"); // text box
const submitBtn = document.getElementById("submitBtn");
const removeBtn = document.getElementById('remove');
let list = document.getElementsByTagName("ul") [0];

//add item to list
submitBtn.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = "";
})

//remove item from list
removeBtn.addEventListener('click', () => {
    let lastItem = document.querySelector('li:last-child');
    //let list = document.getElementsByTagName('ul')[0];
    list.removeChild(lastItem);

    })

