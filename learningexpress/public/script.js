document.addEventListener("DOMContentLoaded", ()=>{
    fetch("/messages")
    .then(response =>response.json())
    .then(data =>{
        const messagesList = document.getElementById("messagesList");

        data.messages.forEach(msg => {
            const li = document.createElement("li");
            li.textContent = msg;
            messagesList.appendChild(li);
        });
    })
    .catch(error => console.error("Error fetching messages:", error));
    })
