// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
    return;
  }

  alert("Thank you " + name + "! Your message has been sent.");
  document.getElementById("contactForm").reset();
});

const taglines = [
      "Web Developer 💻",
      "AI & ML Enthusiast 🤖",
      "Content Creator 🎥",
      "Lifelong Learner 📚"
    ];

    let index = 0;
    const typingElement = document.querySelector(".typing");
    let charIndex = 0;

    function typeText() {
      const text = taglines[index];
      if (charIndex < text.length) {
        typingElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // typing speed
      } else {
        // Wait a bit before erasing
        setTimeout(eraseText, 1500);
      }
    }

    function eraseText() {
      const text = taglines[index];
      if (charIndex > 0) {
        typingElement.textContent = text.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // erase speed
      } else {
        index = (index + 1) % taglines.length;
        setTimeout(typeText, 500); // start typing next
      }
    }

    // Start typing
    typeText();