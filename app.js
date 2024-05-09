

// function addition(arr) // whole function is added to variable
// {
//     let sum = 0;
//     for(i = 0; i<=4; i++)
//     {
//         sum +=  arr[i];
//     }
//     return sum;
// }
// addition([12,33,1,88,74,90]);

// console.log(sum);





function addition(num1,num2)
{
    let res = num1 + num2;
    return res;
}

addition(44,87);
console.log("Addition function",addition(11,399));



// anonymous function

let anonymous = function (num2,num3){
    return num2 + num3;
}
console.log("Anonymous function :",anonymous(33,22));

// Arrow function
//     ()=>{}
let arrow_fun = (num4,num5)=>{
    return num4 * num5;
}

console.log("Arrow function :",arrow_fun(12,21));

let onePara = (num5)=>{
    return num5 * num5;
   
}
console.log("One parameter :",onePara(4));


//Advance Funtion

let adv = (num7) => num7 * num7;
console.log(adv(8));

// also a function
let most_adv = num8 => num8*num8;

// Task
// Array having 26 Alphabet that return vowel

let alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
for(i = 0; i<alphabet.length; i++)
{
    if(alphabet[i] <=9)
    {
        console.log("9 index");
    }

}


// let check = (alphabet) =>{
//     for(i = 0; i<=alphabet.length; i++)
//     {
//         if(alphabet[i] == 0);
//         {
//             let res = alphabet[i] == 1;
            
//         }
//     }
//     return res;
// }

// console.log(check(alphabet))



let i = 0;
while (i<4) {
    console.log("Iteration",i);
    i++;
}



let vari = 7;
do {
    console.log("Do while loop");
    vari++;
} while (vari<2);


let text = "Text changed......."
function click(){
    document.querySelector(".change").textContent = text;
}