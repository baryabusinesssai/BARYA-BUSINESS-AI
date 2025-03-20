// Check if user is logged in
auth.onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("userInfo").innerHTML = `Welcome, ${user.email}!`;
    } else {
        window.location.href = "login.html"; // Redirect to login if not logged in
    }
});
