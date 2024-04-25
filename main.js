const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Frontend Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Youtuber";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Web Developer";
            }, 8000); 
        }
        textLoad();
        setInterval(textLoad, 12000);

document.getElementById('contactForm').addEventListener('submit', function(event) {

    event.preventDefault();

    var name = this.querySelector('input[name="name"]').value.trim();
    var email = this.querySelector('input[name="email"]').value.trim();
    var subject = this.querySelector('input[name="subject"]').value.trim();
    var message = this.querySelector('textarea[name="message"]').value.trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Form submitted successfully!\nName: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMessage: " + message);
    this.reset();
});