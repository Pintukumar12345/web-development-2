// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "All fields are required!";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMessage.style.color = "red";
        formMessage.textContent = "Enter a valid email!";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully!";
});

// To Do List
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}