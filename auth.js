// Signup Function
function signupUser() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Signup Successful!");
      window.location.href = "dashboard.html"; // Redirect to dashboard
    })
    .catch((error) => alert(error.message));
}

// Login Function
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login Successful!");
      window.location.href = "dashboard.html"; // Redirect to dashboard
    })
    .catch((error) => alert(error.message));
}

// Google Login Function
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then((result) => {
      alert("Google Login Successful!");
      window.location.href = "dashboard.html"; // Redirect to dashboard
    })
    .catch((error) => alert(error.message));
}

// Logout Function
function logoutUser() {
  auth.signOut().then(() => {
    alert("Logged out!");
    window.location.href = "index.html"; // Redirect to home
  });
}
