 function sendEmail(){
    Email.send({
        Host : "mail.yahoo.com",
        Username : "aleprovvi@yahoo.it",
        Password : "PostaDiAle1",
        To : "happy_dungeon@hotmail.com",
        From : document.getElementById('email').value,
        Subject : "Nuovo messaggio dal sito Happy Dungeon",
        Body : "Name: " + document.getElementById('name').value 
        + "<br> Email: " + document.getElementById('email').value
        + "<br> Message: " + document.getElementById('message').value
    }).then(
      message => alert(message)
    );
 }