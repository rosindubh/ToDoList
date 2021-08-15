//phil welsby - 15 aug 2021
const input = document.getElementById("input"); // text box
const submitBtn = document.getElementById("submitBtn");
const removeBtn = document.getElementById('remove');
let list = document.getElementsByTagName("ul") [0];


submitBtn.addEventListener("click", () => {
    let listItem = document.createElement("li");
    console.log("listItem", listItem)
    console.log("list", list);
    listItem.textContent = input.value;
    /*console.log(listItem)*/
    list.appendChild(listItem);
    input.value = "";

removeBtn.addEventListener('click', () => {
    let lastItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];
    list.removeChild(lastItem);
    })
})




