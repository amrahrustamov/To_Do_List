const input = document.querySelector("input");
const button = document.querySelector("button");
const ulList = document.querySelector("ul");

button.addEventListener("click", function () {
    if (input.value.trim().length) {
        ulList.innerHTML += `<li><p>${input.value}</p>
        <input class="newInput" type="text" placeholder=" add new text" />
        <button class="edit">Edit</button>
        <button class="delete">Delete</button></li>`;
        input.value = "";

        const editButtons = document.querySelectorAll(".edit");
        editButtons.forEach((editButton) => {
            editButton.addEventListener("click", (event) => {
                const element = event.target.parentNode.querySelector(".newInput");
                if (element.style.display === "none") {
                  element.style.display = "block";
                } else {
                  element.style.display = "none";
                }

                const liElement = event.target.parentNode;
                const pElement = liElement.querySelector("p");
                const newText = element.value;
                if (newText) {
                    pElement.textContent = newText;
                }
                
            });
        });

        const deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach((deleteButton) => {
            deleteButton.addEventListener("click", (event) => {
                const liElement = event.target.parentNode;
                liElement.remove();
            });
        });
    }
});