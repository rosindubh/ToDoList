
const input = document.getElementById("input");
const button = document.getElementById("submit");
let list = document.getElementsByTagName("ul") [0];
const removeBtn = document.getElementById('remove');

button.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    /*console.log(listItem)*/
    list.appendChild(listItem);
    input.value = "";

removeBtn.addEventListener('click', () => {
    let lastItem = document.querySelector('li:last-child');
    console.log('lastItem =', lastItem); /* output to console value of lastItem */
    let list = document.getElementsByTagName('ul')[0];
    console.log('list =', list); /* output to console value of list */
    list.removeChild(lastItem);
    })
})



        
