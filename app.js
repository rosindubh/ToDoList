
const input = document.getElementById("input");
const button = document.getElementById("submit");
let list = document.getElementsByTagName("ul") [0];
const removeBtn = document.getElementById('remove');

button.addEventListener("click", () => {
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



        
