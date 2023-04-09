AOS.init();

// tout d'abord on sélectionne les éléments sur lequel on souhaite executer nos animations(
const rotationCard = document.querySelectorAll('.card-info');
// puis on sélectionne le bouton qui actionnera nos fonctions on créant une variable à laquelle on assigne nos notre selection
const button = document.querySelector('.myButton');

//on greffe une oreille qui réagira à notre évênement,
button.addEventListener('click', () => {  //cette oreille dois réagir au click de notre bouton 
    //  le setTimeout va donner un délai de réaction     
    setTimeout(() => {
        //pour chaque div portant la classe"card-info" on appliquera ces
        rotationCard.forEach(myCardInfo => { 
            
        //le toggle va vérifier si notre classe "changemode" n'est pas active sur le card-info et l'activer
        //et s'il elle est déjà active alors il l'a désactive    
         myCardInfo.classList.toggle("changeMode");
   
         // On crèe une variable et lui assigne la sélection de tous les paragraphes dans la div "card-info"
         const paragraphs = myCardInfo.querySelectorAll("p");
   
         // On change le contenu de chaque(foreach) paragraphe contenu dans notre card-info 
         paragraphs.forEach(paragraph => {
        //on vérifie si la classe "changeMode" est présent dans l'élément parent on utilisant classLlist.contains
           if (myCardInfo.classList.contains("changeMode")) { // si "vrai" on fait une mise à jour du text dans les paragraphs
             paragraph.innerHTML = "<strong>Get More</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam nam veritatis impedit sequi totam blanditiis ex quisquam pariatur iste beatae. ";
            
           } else {  // si "faux" on change le contenu à nouveau et on enlève le gras pour mettre le tout en italique,  
             paragraph.innerHTML = "<em>Nuevo Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam nam veritatis impedit sequi totam blanditiis ex quisquam pariatur iste beatae.</em>";
           }
         });
     });
   }, 500)//c'est la valeur de notre setTimeout
});

/*// tout d'abord on sélectionne les éléments sur lequels on souhaite executer nos animations
const rotationCard = document.querySelectorAll('.card-info'); 

rotationCard.foreach(element => { 
    element.addEventListener('mouse', (module) => { 
        module.classList.toggle("change-mode")
       })
} )
;
 */