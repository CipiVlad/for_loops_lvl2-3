

// for loops

// for (start/before; condtion; step/after){

// do something
// }

// for (let i = 0; i < 7; i++) {

//     console.log(i)
// }
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     // sum += i;
//     console.log(i);
// }

// *********
// *********
// *********
// *********
// *********
// console.log("%cfor Loop", "color:yellow");
// let sum = "********";
// for (let i = 0; i < 5; i++) {
//     console.log(sum);
// }
// console.log("%cfor Loop 2", "color:yellow");

// *
// **
// ***
// ****
// *****
// ******

// let start = "";

// for (let i = 0; i <= 5; i++) {
//     start += "*";       // start = start + "*";
//     console.log(start);
// }

// console.log("%cfor Loop 3", "color:yellow");

//5
//6
//7
//8
//9

// for (let i = 5; i <= 9; i++) {
//     console.log(i);
// }

// console.log("%cfor Loop 4", "color:firebrick");

//50
//49
//48
//47
//46
//45

// for (let i = 50; i >= 45; i--) {
//     console.log(i);
// }

// console.log("%cfor Loop 5", "color:lightblue");

// 20 sterne loop in loop
// ***********************
// ***********************
// ***********************

// for (let i = 0; i < 3; i++) { //starte mit i = 0; führe es 3x durch, steige dann aus; was ist zu tun i++; 
//     let stars = "";
//     for (let j = 0; j < 20; j++) {//führe 
//         stars += "*";
//     }
//     console.log(stars); // rufe das Ergebnis auserhalb des loops im loop ab
// }

// console.log("%cfor Loop 6", "color:yellow"); //array

// let country = ['france', 'germany', 'spain']; // loop so lange laufen lassen, bis alle array - inhalte durchlaufen sind
// for (let i = 0; i < country.length; i++) { // starte bei 0 im Array; i ist kleiner als country.length; i++  = durchlaufe
//     console.log(country[i].toUpperCase());
// }

// console.log("%cfor Loop 7", "color:yellow"); //array

//France
//Germany
//Spain

// for (let i = 0; i < country.length; i++) { // starte bei 0 im
//     console.log(country[i].charAt(0).toUpperCase() + country[i].slice(1));
// }

// ------------for of loops-------------------

// mit ES6 gekommen: kurz und bündig, bringt eine Ähnlichkeit zu forEach mit
// console.log("%c forEach", "color:red"); //array
// let numbers = [5, 6, 7, 8, 9, 10];

//wenn ein callback benötigt
// numbers.forEach(elt => console.log(elt)); // array in der console ausgeben mit Arrow-Function



// mit for of kürzer:
// console.log("%cfor of", "color:yellow");

// wenn KEIN callback benötigt
// for (let i of numbers) {
//     console.log(i)
// }

// console.log("%cfor of ÜBUNG", "color:lightblue");

// Übung:Zahlen verdoppeln 
// mit for loop , for of und forEach


// for loop
// let numbers2 = [20, 30, 40];

// for (let i = 0; i < numbers2.length; i++) {
//     // console.log(numbers2[i] * 2);
// }

// for of
// for (let x of numbers2) {
// console.log(x * 2);
// }

// forEach

// numbers2.forEach((elt) => console.log(elt * 2));


// while loop
// while (condition){ do something}

// let index = 0;
// while (index < 5) { console.log(index); index++; } // zählt bis exkl. 5 (also 4)
// while (index < 5) { index++; console.log(index); } --> zählt bis inkl. 5



// WIRD NICHT MEHR GENUTZT --- sich merken, dass es das gibt
// Do While loop
// do{
// do something
// } while (condition);


// let index2 = 0; do {
//     console.log(index2);
//     index2++;

// } while (index2 < 0);


// !!!!!!!!!DANGER!!!!!!!!!!!!

// INFINITE LOOPS 

// for (let i=1; i >=0; i++){
//     console.log(i)
// }

// 
// !!!!!!!!!DANGER!!!!!!!!!!!!



// -----1-1----

// console.log("%cfor  ÜBUNG loope bis 10 und füge davor Hello World jedes mal ein", "color:lightblue");

// let text1 = 'Hello World ';
// for (let i = 0; i <= 10; i++) {
//     // console.log(text1 + )
//     console.log(text1 + i)
// }

// -----1-2----

// console.log("%cfor  ÜBUNG Erstelle ein Array mit den Zahlen 0-10 mit Hilfe einer Schleife", "color: yellow");

// let array = [];
// for (let i = 0; i < 10; i++) {


// }//     console.log(array.push(i));

// -----1-4----


// console.log("%cfor  ÜBUNG zeige mit for loop alle namen im Array", "color: yellow");

// let names = ["Eric", "Steffen", "Finn", "Simon", "Franzi", "Kim", "Sergio"];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// };


// -----1-6----

// console.log("%cfor loop Array: ein Array von Bildern erstellen und die Dateinamen von image_1.jpg bis image_100.jpg", "color: yellow");


// let retArray = [];
// let jpeg = '_jpeg';
// let img = 'img_';
// for (i = 1; i < 101; i++) {
//     retArray.push(img + i + jpeg);
// }
// console.log(retArray);




// -----1-7----
// console.log("%c do .. while", "color: yellow");


// let i = 1;
// let numIs = '';

// do {
//     numIs += 'The Number is ' + i + '<br />';
//     i++;
// } while (i < 6)

// document.getElementById('result').innerHTML = numIs;



// -----1-8----
// console.log("%c do .. while", "color: yellow");


// let i = 2;
// let numIs = '';

// do {
//     numIs += 'The Number is ' + i + '<br />';
//     i += 2;
// } while (i < 22)

// document.getElementById('result').innerHTML = numIs;

// -----1-9----
// console.log("%c word print", "color: yellow");

// // -----1-9----
// // console.log("%c check word length", "color: yellow");
// let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

// const print = () => {
//     let inputText = document.getElementById('inputText').value;
//     let result = document.getElementById('result');
//     result.innerHTML = "";
//     // console.log('test');
//     for (let i = 0; i < words.length; i++) {
//         console.log(words[i].length);
//         if (Number(inputText) == words[i].length) {
//             console.log(words[i]);
//             result.innerHTML += `${words[i]} <div></div>`;
//         }
//     }
// };


// ----------------------------------------------------------------
// lev2_1: for loop Array 
// ----------------------------------------------------------------

// ---------------ohne Conditionals-------------------------------------------------

// const imageArray = () => {

//     let returnArray = [];
//     for (let i = 1; i < 101; i++) {
//         returnArray.push(`image_${i}.jpeg`);
//     }
//     console.log(returnArray);
// }
// imageArray();

// ---------------mit Conditionals-------------------------------------------------






















// ----------------------------------------------------------------


// ----lvl 2_2----inputNumber --multiply-outputText

// ---variablen

/*

* Du wirst mit einem Array arbeiten müssen.
* Nutze einen Loop und eine Array Methode, um an einer bestimmten Stelle das neue Element hinzuzufügen.
* Wandle das Array am Ende in einen String um.

*/

// // // function

// loop = () => {
//     //  Array erstellen
//     let array = ['L', 'p'];

//     // input-Wert für Multiplikation holen
//     let inputNumber = document.getElementById('inputNumber').value;
//     // console.log(Number(inputNumber))

//     // Resultat-Anzeige holen
//     let outputText = document.getElementById('outputText');

//     // Bedingung für Eingabe 0 erfüllen
//     if (inputNumber == 0) {
//         console.log('correct')
//         outputText.innerHTML = array[0] + array[1];
//     }

//     // Bedingung für Eingabe > 0 erfüllen
//     else if (inputNumber > 0) {

//         // ------------------ohne Array-Methode--------------------------------
//         // let string = "o";
//         // let multiString = "";

//         // for (let i = 0; i < inputNumber; i++) {
//         //     multiString += string;
//         // }
//         // console.log(multiString);
//         // outputText.innerHTML = array[0] + multiString + array[1];


//         // ------------------mit Array-Methode--------------------------------
//         let push_o_array = [];
//         for (let i = 1; i <= inputNumber; i++) {
//             push_o_array.push(array.splice(1, 0, 'o'));

//         } console.log(array);
//         outputText.innerHTML = array.join('');

//         // ------------------mit Array-Methode----FEHLER----------------------------
//         // let newArray = array.splice(1, 0, 'o');
//         // for (let i = 0; i < inputNumber; i++) {
//         //     newArray += array;
//         // }

//         // console.log(newArray);

//     }

// }
/*
Fehler-Korrektur zu:

                    let newArray = array.splice(1, 0, 'o');
                    for (let i = 0; i < inputNumber; i++) {
                    newArray += array;
                    }
                    console.log(newArray);

    1. kein neues und leeres Array erstellt
    statt: let newArray = array.splice(1, 0, 'o');

       -->  es fehlt let push_o_array=[];
    sagt aus:
    erstelle ein neues und leeres Array, in das 'o' gepusht werden kann

    2. statt:
            newArray += array;
       -->  wiederholt nur: L,o,p (so oft wie im inputNmber eingegeben)

       -->  push_o_array.push(array.splice(1, 0, 'o'));
    sagt aus:
           push in das leere Array push_o_array ein 'o'
           füge es zu array an Stelle(index) 1 und ersetze dabei 0 Arrayelemente

*/


// --------------lev 3_3-----------------------------
// ------------------------------

// function

function loop() {
    //  Array erstellen
    let array = ['L', 'p'];
 
    // input-Wert für Multiplikation holen
    let inputNumber = document.getElementById('inputNumber').value;
    // console.log(Number(inputNumber))
 
    // Resultat-Anzeige holen
    let outputText = document.getElementById('outputText');
 
    // Bedingung für Eingabe 0 erfüllen
    if (inputNumber <= 0) { //gerade Zahl
       console.log('error')
       outputText.innerHTML = `ERROR`;
       document.getElementById("outputText").style.color = "red";
    }
 
    // Bedingung für Eingabe > 0 erfüllen
    else if (inputNumber > 0) {
       if (inputNumber % 2 == 0) { //wenn inputNumber gerade
          let push_o_array = []; // leeres Array initaliesieren
          for (let i = 1; i <= inputNumber; i++) {
             push_o_array.push(array.splice(1, 0, 'o'));
 
          } console.log('gerade');
          outputText.innerHTML = array.join('');
       }
       else {
          console.log('else ungerade')
          document.getElementById("outputText").style.color = "lightgreen";
 
          let push_o_array = []; // leeres Array initaliesieren
          for (let i = 1; i <= inputNumber; i++) {// Loop start, Bedingung und step
             if (push_o_array.length % 2 !== 0) {//wenn die Länge ungerade ist, dann
                push_o_array.push(array.splice(1, 0, '0'));//gib ein 'O' aus
             }
             else { push_o_array.push(array.splice(1, 0, 'o')); }// ansonsten 'o'
          }
          outputText.innerHTML = array.join('');// zeig den gesamten Loop
       }
    }
 }
 
 
 // -------------------lev-3-1----------------------------------------------------
 let text = " didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being  a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? our best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never";
 let textArr;
 
 /*
 Erstelle eine Variable mit einem Text (siehe Kommentarbereich)
 Erstelle eine Funktion, die einen Text in einem Abstand von 100 Zeichen trennt.
 Füge nach den 100 Zeichen “ - 1 of gesamte-Nachrichten”, “ - 2 of gesamte-Nachrichten” usw … hinzu.
 Jedes Element dieser Zeichenkette (100 Zeichen + - 1 of x ) soll in ein Array gepusht werden.
 
 Gib dir am Ende das Ergebnis in der Konsole aus.
 Rufe die Funktion mit der Variablen als Argument auf.
 */
 
 // const cut = (e) => {
 //     console.log('the main text:' + e);
 // }
 // cut(text);