// koden nedan hämtar elementet från html och ger namn eller variabel//
const themeButton = document.querySelector("#toggleTheme");
const darkmode = document.querySelector("body");
const bodyAll = document.querySelectorAll("p");
const navbarlinks=document.querySelectorAll(".navigationbar a");
const footer1 =document.querySelectorAll(".footer");




// Den lägger en click funktion för att klicka  på en knapp med namnet "themeButton". När knappen klickas på kommer funktionen "toggleTheme" att köras.//
themeButton.addEventListener("click", function toggleTheme(event) {
  if (document.querySelector("body").style.backgroundColor == "") {
    themeButton.innerText = "Dark Mode";
    //Den hämtar HTML elementet med taggen "body"  genom att använda metoden "querySelector" Sedan ändrar den bakgrundsfärgen på elementet till vitt//
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".sarkis").style.color = "black";
    //Den hämtar HTML elementet med taggen "h1"  genom att använda metoden "querySelector" Sedan ändrar den färgen på texten till svart//
    document.querySelector("h1").style.color = "black";
    document.querySelector("h2").style.color = "black";
    document.querySelector("h3").style.color = "black";
    
    
    for (let i = 0; i < bodyAll.length; i++) {
      bodyAll[i].style.color = "black";
    }
    
    //hämtar den alla HTML-element med klassen "navigationbar" och taggen "a" genom att använda
    // "querySelector" på document-objektet, och ändrar färgen på texten i dessa element till "svart" på samma sätt.

    for (let i = 0; i<navbarlinks.length;i++) {
      navbarlinks[i].style.color="black";
      document.querySelector(".navigationbar a").style.color = "black";
    }
  
    for (let i = 0; i<footer1.length;i++) {
      footer1[i].style.color="black";
      document.querySelector(".footer").style.color = "black";
    }
    
   
   
    
  
  //***************************************************************************************************************************** */
    // "else" är en keyword en annan handling som ska utföras om det första villkoret i en if-sats är falskt./
  } else {
    themeButton.innerText = "Light Mode";
    document.querySelector("body").style.backgroundColor = "";
    document.querySelector(".sarkis").style.color = "white";
    document.querySelector("h1").style.color = "white";
    document.querySelector("h2").style.color = "#14b3b3";
    document.querySelector("h3").style.color = "aliceblue";
    
    for (let i = 0; i < bodyAll.length; i++) {
      bodyAll[i].style.color = "aliceblue";
    }
    
    for (let i = 0; i<navbarlinks.length;i++) {
      navbarlinks[i].style.color="white";
      document.querySelector(".navigationbar a").style.color = "white";
    }
   
  
    
    
     
  }
  console.log(document.querySelector("body").style.backgroundColor);
});

//WCAG krav//
//krav2.4.8 uppfylls navigationbar //
//krav 1.4.8 uppfylls användaren har möjlighet att att byta bakgrundsfärg (lightmode och darkmode)//
//krav 1.1.1 eftersom det finns alternativ text till alla bilder.
//
