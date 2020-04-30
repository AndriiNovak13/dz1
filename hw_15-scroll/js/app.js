let all = document.querySelector('body');
let div = document.querySelector('div');
window.addEventListener('scroll', function(e) { 
    console.log(this.scrollY); 
    (this.scrollY>200)? all.classList.add('active'):all.classList.remove('active')
});
window.addEventListener('resize', function() { 
    console.log(this.innerWidth); 
    (this.innerWidth<700)? div.classList.add('active-size'):div.classList.remove('active-size')
});