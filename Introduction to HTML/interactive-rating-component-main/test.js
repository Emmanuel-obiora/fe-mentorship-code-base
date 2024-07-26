const ratingPick = ({a}) =>{
    if (a === 1) {
        localStorage.setItem("Selected Number", `${a}`);
        } else if (a === 2){
            localStorage.setItem("Selected Number", `${a}`);
        } else if (a === 3){
            localStorage.setItem("Selected Number", `${a}`);
        }else if (a === 4){
            localStorage.setItem("Selected Number", `${a}`);
        }else if (a === 5){
            localStorage.setItem("Selected Number", `${a}`);
        }else{
            alert("Invalid rating");
        }

        // let item = localStorage.getItem("Selected Number");
        
        // let pick = document.getElementById("picked").innerHTML= item;
        // console.log(pick);

}

// ratingPick.exports


// function rated(){
//     if(a == "undefined"){
//         alert("Pick a rating.")
//     } else{
        
//     }
// }

// function r(){
//     let item = localStorage.getItem("Selected Number");
//     let pick = document.getElementById("picked");

//     pick.innerText = item;
// }




// function obiora(){
    
//     // let age = prompt('How old are you?', );
//     // alert(`You are ${age} years old!`); // You are 100 years old!
    
//     localStorage.setItem("userAge", `${age}`);
    
//     let item = localStorage.getItem("userAge");
//     // console.log(item);

//     let me = document.getElementById("age");

//     me.innerText = item;
// }
