// var x=prompt("Type any character");
// if ((x >='a' && x<='z') || (x>='A' && x<='Z')){
//     console.log("this is an alphabet");
// }else if (x>='0' && x<='9'){
//     console.log("this is a digit");
// }else{
//     console.log("this is special character");
// }

var text=prompt("type anything like word or number or special char");
var text_char = text.charCodeAt(0);
         
if ((text_char >= 65 && text_char <= 90) || (text_char >= 97 && text_char <= 122)){
    console.log(" Alphabet ");
}
else if (text_char >= 48 && text_char <= 57){
    console.log(" Digit ");
}  
else {
    console.log(" Special Character ");
}