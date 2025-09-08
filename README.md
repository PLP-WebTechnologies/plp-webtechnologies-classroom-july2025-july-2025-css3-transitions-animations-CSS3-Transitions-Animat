index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Learning Portal Features</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <h1> Learning Portal Features Demo</h1>
  <section>
    <h2> Enroll in a Course</h2>
    <button class="btn-hover">Enroll Now</button>
    <div class="fade-box"></div>
  </section>
  <section>
    <h2>Study Helper Tool</h2>
    <button onclick="showSquare(5)">Practice: 5²</button>
    <button onclick="showSquare(10)">Practice: 10²</button>
    <p id="output"></p>
  </section>
  <section>
    <h2>Course Progress Tracker</h2>
    <button onclick="startProgress()">Start Progress</button>
    <div class="progress-container">
      <div id="progressBar"></div>
    </div>
  </section>

  <section>
    <h2> New Lesson Notification</h2>
    <button onclick="triggerBoxAnimation()">Check for Updates</button>
    <div id="animatedBox"></div>
  </section>

  <div id="certificateModal">
    <div class="certificate-content">
       Congratulations!<br>
      You have completed your course!<br>
      <button onclick="closeCertificate()">Close</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>


styles.css

/*general page styling */
body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 20px;
  background: #fdfdfd;
}

h1 {
  color: #2c3e50;
  margin-bottom: 30px;
}

section {
  margin: 50px 0;
}

 /* Enroll in a Course (Button Styling)*/
 .btn-hover {
  background: #2980b9;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  transition: background 0.5s, transform 0.3s;
  cursor: pointer;
}
.btn-hover:hover {
  background: #27ae60;
  transform: scale(1.1);
}

/* Highlight box animation */
.fade-box {
  width: 100px;
  height: 100px;
  background: #e74c3c;
  margin: 20px auto;
  animation: fadeSlide 4s infinite alternate;
}

@keyframes fadeSlide {
  0% { opacity: 0.2; transform: translateX(0); }
  100% { opacity: 1; transform: translateX(150px); }
}

/*Course Progress Tracker*/
.progress-container {
  width: 80%;
  max-width: 500px;
  height: 30px;
  background: #ddd;
  border-radius: 15px;
  margin: 20px auto;
  overflow: hidden;
  border: 2px solid #2980b9;
}

#progressBar {
  width: 0%;
  height: 100%;
  background: #27ae60;
  text-align: center;
  line-height: 30px;
  color: white;
  font-weight: bold;
  transition: width 0.3s;
}

/*  New Lesson Notification */
#animatedBox {
  width: 160px;
  height: 100px;
  background: #8e44ad;
  margin: 20px auto;
  border-radius: 12px;
  opacity: 0.9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
}

/* Bounce effect triggered via JS */
.animate {
  animation: bounce 2s ease-in-out forwards;
}

@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-100px); background: #f39c12; }
  100% { transform: translateY(0); background: #8e44ad; }
}

/* Certificate Pop-up*/
#certificateModal {
  display: none; /* hidden by default */
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.7);
  justify-content: center;
  align-items: center;
}

.certificate-content {
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  animation: popIn 0.8s ease;
}

.certificate-content button {
  margin-top: 20px;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  background: #27ae60;
  color: white;
  cursor: pointer;
  font-size: 16px;
}
.certificate-content button:hover {
  background: #2ecc71;
}

/* Pop-in animation */
@keyframes popIn {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}


script.js


/*Study Helper Tool
   Demonstrates Parameters, Return Values, and Scope*/
   
function square(num) {
  return num * num;
}

let globalMessage = "Global scope: available anywhere in the portal.";

function showSquare(value) {
  let localMessage = "Local scope: only inside this study tool.";

  let result = square(value);

  document.getElementById("output").innerHTML =
    `Answer: ${value} × ${value} = <b>${result}</b><br>` +
    globalMessage + "<br>" +
    localMessage;
}

/*Course Progress Tracker
   Simulates progress filling up like a course tracker*/
   
function startProgress() {
  let bar = document.getElementById("progressBar");
  let width = 0;

  bar.style.width = "0%";
  bar.innerHTML = "";

  let interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      bar.innerHTML = "Completed!";
      showCertificate(); // Show certificate modal
    } else {
      width++;
      bar.style.width = width + "%";
      bar.innerHTML = width + "%";
    }
  }, 50);
}

/* Certificate Pop-up*/

function showCertificate() {
  document.getElementById("certificateModal").style.display = "flex";
}

function closeCertificate() {
  document.getElementById("certificateModal").style.display = "none";
}

/* New Lesson Notification*/

function triggerBoxAnimation() {
  const box = document.getElementById("animatedBox");
  box.innerHTML = " New Lesson Available!";

  box.classList.remove("animate");
  void box.offsetWidth; // reflow trick
  box.classList.add("animate");
}
