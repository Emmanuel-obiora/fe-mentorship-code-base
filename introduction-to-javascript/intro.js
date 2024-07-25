
// let result = confirm("Are you married");

// if (result == true ){
//     alert("you are doing well");
// } else{
//     alert("shame on you, better get married soon");
// }

let age = prompt('How old are you', 0);

let response = (age != 0)? "You have entered an invalid age": (age < 2) ? 'Hi, baby!' :
(age <= 6) ? 'Please join your classmates in the nursery section' :
(age < 11 ) ? 'You should be in the primary section' :
'You should be in college';
alert( response );



function obiora (){
    
    let age = prompt('How old are you?', );
    // alert(`You are ${age} years old!`); // You are 100 years old!
    
    localStorage.setItem("userAge", `${age}`);
    
    let item = localStorage.getItem("userAge");
    // console.log(item);

    let me = document.getElementById("age");

    me.innerText = item;
}




// console.log(me);