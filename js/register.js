function start(){
    var user_name=document.getElementsByName('user_name')[0].value;
    var dob=document.getElementsByName('dob')[0].value;
    var mno=document.getElementsByName('mno')[0].value;
    var email=document.getElementsByName('email')[0].value;
    var password=document.getElementsByName('password')[0].value;
    var c_password=document.getElementsByName('c_password')[0].value;
    if(password!=c_password){
        alert("Password Mismatched");
    }
    else{
    $(document).ready(function(event) {
        $.ajax({
            url: 'http://localhost:8080/guvi/php/register.php',
            method: 'POST',
            data: {
                'email': email,
                'password':password,
                'user_name':user_name,
                'dob':dob,
                'mno':mno
            },
            success: function(response) {
                var res=JSON.parse(response);
                if(res.status==='success'){
                    alert("Account Created Successfully");
                    window.location.replace("http://localhost:8080/guvi/login.html");
                }
                else{
                    alert("Email already exists");
                }
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        })

      })
    }
}
