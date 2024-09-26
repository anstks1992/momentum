const img = ["명화.jpg", "명화2.jpg", "명화3.jpg"];

const chosenImg = img[Math.floor(Math.random() * img.length)];

const bgImg = document.getElementById("imgBackGround");
bgImg.src = `img/${chosenImg}`;

//document.body.appendChild(bgImg);
