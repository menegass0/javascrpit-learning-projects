const notifications = document.querySelector(".notifications"),
buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer:5000,
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
const removeToast = (toast) =>{
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(()=> toast.remove(), 500)
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
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;

    notifications.appendChild(toast);
    toast.timeoutId = setTimeout(()=> removeToast(toast), toastDetails.timer)
}

//adding a click event listener to each button to creat a toat when clicked
buttons.forEach(btn =>{
    btn.addEventListener("click", () => createToast(btn.id));
})