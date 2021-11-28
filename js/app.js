// http://www.hoveressentials.com/
// https://paychant.com/
// https://peachyconcept.com/

// .colors{
//     color: #67e4a8;
// background-color: #14302c;
// color: #194942;
// color: #ccd6f6;

// color: #8893b0;
// }

// -webkit-writing-mode: vertical-rl;
// writing-mode: vertical-rl;

let openBtn =  document.querySelector('.open-menu-btn');
let closeBtn =  document.querySelector('.close-menu-btn');
let mainNav =  document.querySelector('.main-nav');
let navListwrapper =  document.querySelector('.nav-list-wrapper');
let toggleWrapper =  document.querySelector('.toggle-wrapper');

toggleWrapper.addEventListener('click', function(e){
  if( navListwrapper.classList.contains('open')){
       navListwrapper.classList.remove('open');
        closeBtn.classList.remove('d-none')
        openBtn.classList.add('d-none')
  }
   else{
    navListwrapper.classList.add('open')
    console.log('clicked close');
    closeBtn.classList.add('d-none')
    openBtn.classList.remove('d-none')
    
}
});

window.addEventListener('scroll', function(){
  if(window.scrollY > 2){
    mainNav.classList.add('main-nav-bg')
  }else if(window.scrollY <2){
    mainNav.classList.remove('main-nav-bg')
  }
})