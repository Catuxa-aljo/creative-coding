

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = 'blue';
context.fillRect(100, 100, 400, 400);

context.lineWidth = 4;
context.beginPath();
context.rect(100, 100, 400, 400);
context.stroke();

context.beginPath();
context.arc(300, 300, 100, 0, Math.PI * 2);
context.stroke();

var gradient = context.createLinearGradient(0, 0, 170, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5" ,"blue");
gradient.addColorStop("1.0", "red");

// Fill with gradient


for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 ; j++) {
        const width = 60;
        const height = 60;
        const gap = 20;
        let x = 100 + (width + gap) * i ;
        let y = 100 + (height + gap) * j;
    

        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();
        context.strokeStyle = gradient;
context.lineWidth = 5;
context.strokeRect(20, 20, 150, 100);

        if ( Math.random() > 0.5) {
            context.beginPath();
            context.rect(x + 8, y + 8, width - 16, height - 16);
            context.stroke()
        }
    }

    

}
