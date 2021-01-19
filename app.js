'use strict';
///////////////////////////////////////////


/////////////////// global ////////////////////////


var usedimglift = -1;
var usedimgmedium = -1;
var usedimgright = -1;



var leftImageElement = document.getElementById('left-image');

var mediumImageElement = document.getElementById('medium-image');

var rightImageElement = document.getElementById('right-image');

var maxclick = 25; 
var usercounter = 0;


var showresuls = document.getElementById('showres');
var formofround = document.getElementById('formround');

var leftImageindex;
var mediumImageindex;
var rightImageindex;


var dataimg = [];
var clicks = [];


////////// constructor ////////////////

function voteimage(nameproduct, filepath){

this.nameproduct = nameproduct;
this.filepath = filepath;
this.clicks = 0;
this.timesshown = 0;
dataimg.push(nameproduct);
voteimage.prototype.allimages.push(this);
}

//////////////////////////////////////

voteimage.prototype.allimages = [];

///////////////////create object////////////////////

new voteimage('bag','img/bag.jpg');
new voteimage('banana','img/banana.jpg');
new voteimage('bathroom','img/bathroom.jpg');
new voteimage('boots','img/boots.jpg');
new voteimage('breakfast','img/breakfast.jpg');
new voteimage('bubblegum','img/bubblegum.jpg');
new voteimage('chair','img/chair.jpg');
new voteimage('cthulhu','img/cthulhu.jpg');
new voteimage('dog-duck','img/dog-duck.jpg');
new voteimage('dragon','img/dragon.jpg');
new voteimage('pen','img/pen.jpg');
new voteimage('pet-sweep','img/pet-sweep.jpg');
new voteimage('scissors','img/scissors.jpg');
new voteimage('shark','img/shark.jpg');
new voteimage('sweep','img/sweep.png');
new voteimage('tauntaun','img/tauntaun.jpg');
new voteimage('unicorn','img/unicorn.jpg');
new voteimage('usb','img/usb.gif');
new voteimage('water-can','img/water-can.jpg');
new voteimage('wine-glass','img/wine-glass.jpg');

//////////////////////////////////////////


////////////  addEventListener  ////////////
renderthreerandomimages();

leftImageElement.addEventListener('click',calcclick);

mediumImageElement.addEventListener('click',calcclick);

rightImageElement.addEventListener('click',calcclick);

showresuls.addEventListener('click', showresults);

formofround.addEventListener('submit', setuserrounds);
/////////////       function calcclick     ////////////////
function calcclick (event){

usercounter++;

 if (usercounter <= maxclick){
     if(event.target.id === 'left-image'){
        voteimage.prototype.allimages[leftImageindex].clicks++;
     }else{
    voteimage.prototype.allimages[mediumImageindex].clicks++;
}
// if(event.target.id === 'medium-image'){
// voteimage.prototype.allimages[mediumImageindex].clicks++;   
// }else{
//     voteimage.prototype.allimages[rightImageindex].clicks++;
// }
// if(event.target.id === 'right-image'){
//     voteimage.prototype.allimages[mediumImageindex].clicks++;   
//     }else{
//         voteimage.prototype.allimages[rightImageindex].clicks++;
//     }

renderthreerandomimages();

} else {


 rightImageElement.removeEventListener('click',calcclick);
 leftImageElement.removeEventListener('click',calcclick);
 mediumImageElement.removeEventListener('click',calcclick);
 showresuls.removeAttribute('disabled');
 ////////////////////////////////////
 
 }

 
}


///////////// function res ////////////////

function showresults() {

    var clicklist = document.getElementById('click-list');
var clickres;
for(var i = 0; i < voteimage.prototype.allimages.length; i++) {
 clickres = document.createElement('li');
 clickres.textContent = voteimage.prototype.allimages[i].nameproduct + ' was chosen ' + voteimage.prototype.allimages[i].clicks + ' and seen ' + voteimage.prototype.allimages[i].timesshown + ' times '; 
 clicklist.appendChild(clickres);
 
}


}


/////////////// function number form /////////////

function setuserrounds(event){

    event.preventDefault();

   maxclick = event.target.rounduser.value;
 
 }
 
//////////////////////////////////////////////



///////////////////////////////////////////
///// function renderthreerandomimages ///////

function renderthreerandomimages(){
var pastimgs = [usedimglift,usedimgmedium,usedimgright];


do{
    leftImageindex = generaterandomindex();

}while(pastimgs.includes(leftImageindex));
usedimglift = leftImageindex;
pastimgs.push(leftImageindex);


do{
    mediumImageindex = generaterandomindex();

}while(pastimgs.includes(mediumImageindex));
usedimgmedium = mediumImageindex;
pastimgs.push(mediumImageindex);


do{
    rightImageindex = generaterandomindex();
}while(pastimgs.includes(rightImageindex));
usedimgright = rightImageindex;


leftImageElement.src = voteimage.prototype.allimages[leftImageindex].filepath;
voteimage.prototype.allimages[leftImageindex].timesshown++;

mediumImageElement.src = voteimage.prototype.allimages[mediumImageindex].filepath;
voteimage.prototype.allimages[mediumImageindex].timesshown++;

rightImageElement.src = voteimage.prototype.allimages[rightImageindex].filepath;
voteimage.prototype.allimages[rightImageindex].timesshown++;

}

// rendercharts();

////////// function random ////////////

function generaterandomindex(){

return Math.floor(Math.random() * (voteimage.prototype.allimages.length));


}

////////////////////////////////////////


//////////////////// create chart ////////////////////

// for(var i = 0; i < voteimage.prototype.allimages.length; i++){
//     clicks.push(voteimage.prototype.allimages[i].click);
// }
////////////////////////////////////////
for(var i = 0; i < voteimage.prototype.allimages.length; i++){
    clicks.push(voteimage.prototype.allimages[i].clicks);
  }
function rendercharts(){

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: dataimg,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(300, 333, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: clicks
            }]
        },
    
        // Configuration options go here
        options: {}
    });
    
    // chart.config.data.datasets[0].data = clicks;
}

rendercharts();


//////////////////////////////////////////////

