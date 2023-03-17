function start(){
    var email=document.getElementsByName('email')[0].value;
    var password=document.getElementsByName('password')[0].value;
    $(document).ready(function() {
        $.ajax({
            url: 'http://localhost:8080/guvi/php/login.php',
            method: 'POST',
            data: {
                'email': email,
                'password':password
            },
            success: function(response) {
                var res=JSON.parse(response);
                if(res.status==='success'){
                    localStorage.setItem("email",email);
                    alert("Signed In successfully");
                    window.location.replace("http://localhost:8080/guvi/profile.html");
                }
                else{
                    alert("Invalid Credentials");
                }
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        })
        
      })
}