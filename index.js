// document.addEventListener('DOMContentLoaded', (event) => {
//     const card1 = document.querySelector('.background');
//     const circles = document.querySelectorAll('.circle1, .circle2, .circle3, .circle4, .circle5');

//     card1.addEventListener('mouseover', () => {
//         circles.forEach(circle => {
//             const randomX = Math.random() * 100 - 25; // Random value between -25 and 25
//             const randomY = Math.random() * 100 - 50; // Random value between -25 and 25
//             circle.style.transform = `translate(${randomX}px, ${randomY}px)`;
//         });
//     });

//     card1.addEventListener('mouseout', () => {
//         circles.forEach(circle => {
//             circle.style.transform = 'translate(0, 0)';
//         });
//     });
// });