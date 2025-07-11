
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
});

function openModal(videoUrl) {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("modal-video");
  iframe.src = videoUrl;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("modal-video");
  iframe.src = "";
  modal.style.display = "none";
}

let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial-slider .testimonial");

function showTestimonial(index) {
  testimonials.forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 4000);

const deadline = new Date('2025-08-01T00:00:00').getTime();
function updateTimer() {
  const now = Date.now();
  const diff = deadline - now;
  if (diff <= 0) return document.getElementById('countdown').textContent = 'Registration closed';
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('countdown').textContent =
    `${d}d ${h}h ${m}m ${s}s`;
}
setInterval(updateTimer, 1000);


function sendMail(){
  const name = "Name : "+document.getElementById("name").value;
  const email = "Email : "+document.getElementById("email").value;
  const phone = "Phone : "+document.getElementById("phone").value;
  const message = "Message : "+document.getElementById("message").value;
  const subject = "Data from your website";
  const body = `Name: ${name}\nEmail: ${mail}\nMessage: ${msg}`;
  const mailtoLink = `mailto:divyanshudhiman51@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}