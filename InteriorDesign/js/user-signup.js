

 

    // Store user data in local storage
   

function Register(){
    let name = document.getElementById('email');
    let email = document.getElementById('psw');
    let password = document.getElementById('psw-repeat');
    let users = JSON.parse(localStorage.getItem('users')) || [];
    // Check if user already exists
    let existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('User already exists. Please use a different email.');
        return;
    }
   
    users.push({ name:name.value, email:email.value, password:password.value });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! You can now log in.');
    // Optionally close the modal or redirect
}








// User Login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert(`Welcome, ${user.name}!`);
        // Redirect to profile or any other page
        // window.location.href = 'profile.html'; // Uncomment for redirection
    } else {
        alert('Invalid email or password. Please try again.');
    }
});