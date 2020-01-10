// var fName = ["Mohsin", "Saad", "Anas", "Afan", "Talal",];
// var lName = ["Ali", "Ali Khan", "Khan Seyar", "Khan Mashrot", "Khan choudry"];
// var fullName = [];
// for (var i = 0; i <= fName.length; i++) {
//     if(fName[i] !== undefined){
//         fullName.push(fName[i] + " " + lName[i]) 
//     }
//     // for(var j=0; j<=lName.length; j++){
//     // console.log(lName[j])
//     //     //    fullName.push(fName[i] + lName[j]);
//     //     // alert(fullName);
//     //     // break;
//     // }
//     // break;
// }
// alert(fullName)

// var cityToCheck = prompt('Enter the City Name');
// cityToCheck = cityToCheck.toLowerCase();
// var cleanistCities = ["isb", "psw", "drg", "mkd"];
// var found = "no";
// for (var i = 0; i <= cleanistCities.length; i++) {
//     if (cityToCheck === cleanistCities[i]) {
//         found = "yes";
//         break;
//     } else if(cityToCheck === ""){
//         found = 'no';
//         break;
//     }
// }
// if (found === "yes") {
//     alert("Its one of the cleanist city");
// } else {
//     console.log("working..");
//     alert("its not in the list of cleanist city")
// }


// var name = "mohsin";
// var slicedName = name.slice(2, 4)
// console.log(slicedName)

// var month = prompt('Please enter a month');
// if(month.length > 3){
//     shortMonth = month.splice(0, )
// }

// var str = prompt('Please enter a text');
// console.log(document)
// document.getElementById("text1").addEventListener('change', function (e) {
//     console.log(e)
//     var str = e.target.value;
//     for (var i = 0; i < str.length; i++) {
//         if (str.slice(i, i + 2) === " ") {
//             alert('soemthing went wrong')
//             // result = "No spacing allowed"
//             // break;
//         }
//     }
// })
// var result = ""
// function validateInput(e) {
//     console.log(e)
// }

// validateInput();
// console.log(result)
// mud
//ar
// (2, 3)


// var text = "World War II";
// for (var i = 0; i <= text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//         console.log(text)
//     }
// }
var arr = [1, 2, 3, 4, 5, 16]
var num = 16;
var result = arr.indexOf(num);
console.log(result)
if (result >= 0) {
    // return true;
} else {
    arr.push(num)
}
// var text = "World War II";
// var firstChar = text.indexOf("World");
// console.log(firstChar)
// if (firstChar === 0) {
//     alert(true)
// } else {
//     alert(false)
// }
// console.log(firstChar)