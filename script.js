function sendMail()
{
    let parms={
         name:document.getElementById("name").value,
         lastname:document.getElementById("lastname").value,
         subject:document.getElementById("subject").value,
         email:document.getElementById("email").value,
         message:document.getElementById("messages").value,
         
    }
    emailjs.send("service_f8dszeo","template_4l886h9",parms).then(
        alert("email sent!!")
        
    )

     document.querySelector(".form").reset();
};