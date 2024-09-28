
let signupFrom =document.getElementById("signupFrom").addEventListener("submit",function(event){
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let emailAddress = document.getElementById("emailAddress").value;
    let passWord = document.getElementById("passWord").value;

    console.log(firstName,lastName,emailAddress,passWord);

    if (firstName && lastName && emailAddress && passWord) {
         localStorage.setItem("name",firstName)
         localStorage.setItem("lastname",lastName)
         localStorage.setItem("email",emailAddress)
         localStorage.setItem("password",passWord)

         window.location.href="../pages/signin.html"
    };
    
});
    
