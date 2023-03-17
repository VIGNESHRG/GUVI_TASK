function get(){
    if(!localStorage.getItem("email")){
        window.location.replace("http://localhost:8080/guvi/index.html"); 
    }
    else{
    var email=localStorage.getItem("email");
    $(document).ready(function() {
        $.ajax({
            url: 'http://localhost:8080/guvi/php/profile.php',
            method: 'POST',
            data: {
                'email': email,
            },
            success: function(response) {
                var res=JSON.parse(response);
                console.log(res.id,res.user_name,res.email,res.mno,res.dob);
                document.getElementById('name').innerHTML+=res.user_name;
                document.getElementById('email').innerHTML+=res.email;
                document.getElementById('mno').innerHTML+=res.mno;
                document.getElementById('dob').innerHTML+=res.dob;
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        })
        
      })
    }
}

function logout(){
    if(window.confirm("Are you sure want to Logout your id ?")){
    localStorage.removeItem("email");
    window.location.replace("http://localhost:8080/guvi/index.html"); 
    }
}

function index(){
    if(localStorage.getItem("email")){
        var email=localStorage.getItem("email");
        $(document).ready(function() {
            $.ajax({
                url: 'http://localhost:8080/guvi/php/profile.php',
                method: 'POST',
                data: {
                    'email': email,
                },
                success: function(response) {
                    var res=JSON.parse(response);
                    document.getElementById("indexprofile").innerHTML="";
                    document.getElementById("guest").innerHTML="Welcome "+res.user_name;
                },
                error: function(xhr, status, error) {
                    console.log(error);
                }
            })
            
        })
    }
}