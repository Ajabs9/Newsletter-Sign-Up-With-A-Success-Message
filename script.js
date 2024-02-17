document.addEventListener('DOMContentLoaded', function() {
    const emailAddress = document.getElementById("emailValue");
    const email = document.getElementById("email");
    const errorMessage = document.getElementById("errorMessage");
    const emailBtn = document.getElementById("emailSubscriptionBtn");
    const signUp = document.getElementById("signUp");
    const successMessage = document.getElementById("successMessage");
    
    emailBtn.addEventListener('click', function() {
        if(emailAddress.value.includes("@")){
            signUp.style.display = "none";
            successMessage.style.display = "flex";
            email.innerHTML = emailAddress.value;
            console.log("It worked");
        }else{
            errorMessage.style.display = "block";
            emailAddress.style.backgroundColor = "rgb(236, 204, 198)";
            emailAddress.style.color = "rgb(212, 70, 44)";
            emailAddress.style.border = "1px rgb(212, 70, 44) solid";
        }
    })
})