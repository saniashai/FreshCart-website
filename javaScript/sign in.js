let signinFrom = document
  .getElementById("signinFrom")
  .addEventListener("submit", function (event) {
    event.preventDefault();

   let localEmail=  localStorage.getItem("email");
   let localpassWord= localStorage.getItem("password");

    let emailAddress = document.getElementById("emailAddress").value;
    let passWord = document.getElementById("passWord").value;

    if(localEmail === emailAddress && localpassWord === passWord){
        window.location.href="../index.html"
        
    } else {
        alert('some went wrong!')
        
    }

  });
