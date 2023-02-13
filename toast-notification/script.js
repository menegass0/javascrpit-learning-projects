const notifications = document.querySelector(".notifications"),
buttons = document.querySelectorAll(".buttons .btn");

const createToast = (id) =>{
    const toast = document.createElement("li");//creating a new 'li' element for the toast
    toast.className = `toast ${id}`;//Setting the class for the toast
    toast.innerHTML =  `<div class="column">
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Success: this is a success toast.</span>
                        </div>
                        <i class="fa-solid fa-xmark"></i>`;

    notifications.appendChild(toast);
}

//adding a click event listener to each button to creat a toat when clicked
buttons.forEach(btn =>{
    btn.addEventListener("click", () => createToast(btn.id));
})