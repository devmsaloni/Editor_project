// const btnin= document.getElementById("btnin");
// const counter= document.getElementById("counter");
// const btndin= document.getElementById("btndin");


// // **************function******************
// var number= 0;

// function changeColor(number){
//     var color= "";
//     if(number<0){
//         color="red";
//     }else if(number>0){
//     color="green";
//     }
//  else {
//     color="white";
// }
// return color;
// };

// btnin.addEventListner("click",function(){
//     number ++;
//     counter.innerHTML=number;
//     counter.style.color=changeColor(number);

// });
// btndin.addEventListner("click",function(){
//     number --;
//     counter.innerHTML=number;
//     counter.style.color=changeColor(number);

// });

const counter = document.getElementById("counter");
const btnin = document.getElementById("btnin");
const btndin = document.getElementById("btndin");

// *************function*****************
var number = 0;

function changeColor(number) {
    var color = "";
    if (number < 0) {
        color = "red";
    } else if (number > 0) {
        color = "green";
    } else {
        color = "white";
    }
    return color;
};
btndin.addEventListener("click", function () {
    number--;
    counter.innerHTML = number;
    counter.style.color = changeColor(number);
});

btnin.addEventListener("click", function () {
    number++;
    counter.innerHTML = number;
    counter.style.color = changeColor(number);
});
