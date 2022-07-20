
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
let playing=false;

 let timerInaterval = '';
function autoPlay(){
    playing = !playing;
    const play = document.getElementById('play');
    if(playing){
        play.innerHTML="||";
     timerInaterval = setInterval(()=>{
      next();
     },3000)
    }else{
        play.innerHTML="&#9658;";
        clearInterval(timerInaterval);
    }
    if(playing){
        aut
    }
    }