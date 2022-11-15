
// test handle click
document.querySelector("bitton")
function handleclick(){
	alert ("i got clicked");

}
// end of testing handle click
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})


// images moves
// const observer = new IntersectionObserver((entries)=>{
//   entries.forEach((entry) => {
//     consol.log(entry)
//     if(entry.isIntersecting){
//       entry.target.classList.add('show');
//
//     }
//     else{
//       entry.target.classList.remove('show');
//     }
//
//   });
//
// });
//
// const hiddenElements= document.querySelectorAll('.hidden');
// hiddenElements.forEach((el)=>observer.observe(el));
// console.log('main');
// // end of images move
