(function () {
    emailjs.init("0kTI031Sp58Fvnrbm");
})();
function sendEmail(params) {
    var params = {
        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
        Number: document.getElementById("number").value,
        Message: document.getElementById("message").value,
    };
    console.log(params)
    const serviceID = "service_vcro1if";
    const templateID = "template_q2t68us"
    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("number").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message sent sucessfully");
        })
        .catch((err) >= console.log(err));
}

