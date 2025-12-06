var send_btn = document.getElementById("send");
// name, email, message
var name = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");

send_btn.addEventListener("click", function()
{ 
    if(name.value == '' || email.value == '' || message.value == '')
    {
        alert("Enter all the fields");
    }

    if(name.value != '' && email.value != '' && message.value != '')
    {
        alert("Message has been sent");
        name.value != '';  
        email.value != ''; 
        message.value != '';
    }
 })