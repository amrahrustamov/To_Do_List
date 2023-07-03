const input = document.querySelector("input");
const button = document.querySelector("button");
const ulList = document.querySelector("ul");
const liTag = document.querySelector("li");
const edit = document.querySelector(".edit");

button.addEventListener("click",  function () {
    if(input.value.trim().length) {
        ulList.innerHTML += `<li>${input.value} 
        <button class="edit">Edit</button>
        <button class="delete">Delete</button></li>`;
        input.value = "";

    }
});
liTag.addEventListener("click",  function () {
   console.log(liTag.value);
});



