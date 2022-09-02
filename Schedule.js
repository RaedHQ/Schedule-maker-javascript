function x (){
    const boxes = document.querySelectorAll('.cells');

    var colors = ['#cdb4db','#ffafcc','#a2d2ff','#dda15e','#ccd5ae','#e9c46a','#0077b6','#e63946','#8d99ae','#84a98c'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];

    for (const box of boxes) {
    box.addEventListener('click', function handleClick() {
    box.style.backgroundColor = random_color
    
    });}
}
//  box.classList.add('block');   //