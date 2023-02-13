const notifications = document.querySelector(".notifications"),
buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    success:{
        icon: 'fa-circle-check',
        text: 'Success: this is a success toast.',
    },
    error:{
        icon: 'fa-circle-xmark',
        text: 'Error: this is a error toast.',
    },
    warning:{
        icon: 'fa-triangle-exclamation',
        text: 'Warning: this is a Warning toast.',
    },
    info:{
        icon: 'fa-circle-info',
        text: 'Info: this is a info toast.',
    }
}


const createToast = (id) =>{
    //getting icon and text for the toast based on the id passed
    const {icon, text} = toastDetails[id];
    const toast = document.createElement("li");//creating a new 'li' element for the toast
    toast.className = `toast ${id}`;//Setting the class for the toast
    toast.innerHTML =  `<div class="column">
                        <i class="fa-solid ${icon}"></i>
                        <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark"></i>`;

    notifications.appendChild(toast);
}

//adding a click event listener to each button to creat a toat when clicked
buttons.forEach(btn =>{
    btn.addEventListener("click", () => createToast(btn.id));
})