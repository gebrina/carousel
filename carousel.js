
const images =[
      './img/his1.jpg',
      './img/flower.png',
      './img/japan.jpg',
      './img/love.jpg',
      './img/programmer.png',
      './img/tech.png'
    ]
    let counter =0;
    const carouselImg= document.getElementById('carousel-img');
function next(){
        counter++;
        if(!images[counter]){
            counter=0;
        }
     
     carouselImg.src= images[counter];
}

function prev(){
    counter--;
    if(!images[counter]){
        counter=images.length-1;
    }
    carouselImg.src= images[counter];
}