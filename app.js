const parallax_el = document.querySelectorAll(".parallax");
let xValue = 0, yValue = 0;
let rotateDegree = 0;

window.addEventListener("mousemove", (e) =>{
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
    console.log(rotateDegree);
    
    const forTest = document.querySelector(".mountain-2")

    let isInLeft = parseFloat(getComputedStyle(forTest).left) < window.innerWidth / 2 ? 1 : -1;

    let zValue = (e.clientX - parseFloat(getComputedStyle(forTest).left)) * isInLeft * 0.1;

   
    parallax_el.forEach((el) =>{
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg)  `;
    })
})