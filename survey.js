document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();  

    const satisfaction = document.getElementById("satisfaction").value;
    const features = document.getElementById("features").value;

    alert(`Thank you for your feedback!\nSatisfaction: ${satisfaction}\nRequested Features: ${features}`);

    window.location.href = "dashboard.html"; // Redirect to dashboard after survey
});
