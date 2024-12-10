const email = document.getElementById("email");
const nama = document.getElementById("name");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let emailBody = `
    <b>Email from: </b>${email.value}<br />
    <b>Name: </b>${nama.value}<br />
    <b>Phone: </b>${phone.value}<br />
    <b>Message: </b>${message.value}<br />
    `;

  Email.send({
    SecureToken: "69fd0de5-43bc-42ec-be6f-675e5150fbb4",
    To: "pkmpmteknologisoothe@gmail.com",
    From: "pkmpmteknologisoothe@gmail.com",
    Subject: message.value,
    Body: emailBody,
  }).then(
    () => {
      alert("Email sent successfully!");
    },
    (error) => {
      alert("Failed to send email: " + error);
    }
  );
});
