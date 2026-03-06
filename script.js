const form = document.getElementById('signupForm');
const message = document.getElementById('message');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!emailRegex.test(email)){

        message.innerText="Invalid email format";
        message.style.color="red";
        
        return;
        
        }

        if(password.length < 6){
        message.innerText="Password must be at least 6 characters long";
        message.style.color="red";
        return;
        }
        if(password !== confirmPassword){
            message.innerText="Passwords do not match";
            message.style.color="red";
            return;
        }
        message.innerText="Signup successful";
        message.style.color="lightgreen";
        form.reset();

});