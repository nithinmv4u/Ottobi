// window.onload = function() {
//     const card = document.querySelector('.theCard');
  
//     setInterval(() => {
//       card.classList.toggle('is-flipped');
//     }, 2000);
//   };
function toggleWhatsAppMenu() {
  var menuToggle = document.querySelector('.whatsapp-menu-toggle');
  menuToggle.classList.toggle('active');
}
  




window.addEventListener('scroll', function() {
  const whatsappIcon = document.querySelector('.whatsapp-icon');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) { /* Show the icon when the user scrolls 100px */
    whatsappIcon.classList.add('show');
  } 
  // else {
  //   whatsappIcon.classList.remove('show');
  // }
});















	
	