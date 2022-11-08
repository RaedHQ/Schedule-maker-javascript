function x (){
    const boxes = document.querySelectorAll('.cells');

    var colors = ['#cdb4db','#ffafcc','#a2d2ff','#dda15e','#ccd5ae','#e9c46a','#0077b6','#e63946','#8d99ae','#84a98c'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    let coppiedColor = [];

    for (const box of boxes) {
        box.addEventListener('click', function leftClick() {
        box.style.backgroundColor = random_color
        coppiedColor.push(random_color);
    
    });}

    for (const box of boxes) {
        box.addEventListener('contextmenu', (ev)=>{
        ev.preventDefault();
        box.style.backgroundColor = "#dcdce6"   
        
    });}

    for (const box of boxes) {
        box.addEventListener('wheel', (ev)=>{
        ev.preventDefault();
        box.style.backgroundColor = coppiedColor[0] 
        
    });}



}
