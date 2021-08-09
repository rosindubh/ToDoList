
const input = document.getElementById("input");
const button = document.getElementById("submit");
let list = document.getElementsByTagName("ul") [0];
const removeBtn = document.getElementById('remove');

button.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    console.log(listItem)
    list.appendChild(listItem);
    input.value = "";
    
removeBtn.addEventListener('click', () => {
    let lastItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];
    list.removeChild(lastItem);
    })
    
})
    
for (let listItem of listItems){
    listItem.addEventListener("mouseover", () => {
    listItem.textContent = listItem.textContent.toUpperCase();
    });
        
    listItem.addEventListener("mouseout", () => {
    listItem.textContent = listItem.textContent.toLowerCase();
    });
}
        