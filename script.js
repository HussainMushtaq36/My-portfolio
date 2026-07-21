function sendMail()
{
    let parms={
         name=document.getElementById("name").value,
         lastname=document.getElementById("lastname").value,
         subject=document.getElementById("subject").value,
        messages=document.getElementById("messages").value,
         email=document.getElementById("email").value,
         
    }
    emailjs.send("service_f8dszeo","template_4l886h9",parms).then(alert("email sent!!"))
}