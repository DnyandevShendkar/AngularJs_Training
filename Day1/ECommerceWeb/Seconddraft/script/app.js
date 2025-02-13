$(document).ready(() => {
    $("#btnlogin").click(() => {
    let email = $("#email").val();
    let password = $("#password").val();
    
    
    if (validate(email, password)) {
    $("#message").html("Welcome Dnyandev").css("color", "green");
    } else {
    $("#message").html("Invalid email or password").css("color", "red");
    }
    });
    });