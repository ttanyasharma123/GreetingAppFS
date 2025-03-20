document.addEventListener("DOMContentLoaded", function () {
    const greetings = ["Hello!", "Hi there!", "Good morning!", "Welcome!", "Greetings!"];
    
    const list = document.getElementById("greeting-list");
    greetings.forEach(greet => {
        let li = document.createElement("li");
        li.textContent = greet;
        list.appendChild(li);
    });
});
