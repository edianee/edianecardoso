 

window.sr = ScrollReveal({reset: true})
sr.reveal('.efeitoScrollReveal',{
    rotate: {x:20, y:20, z:0},
    duration: 1300}) /*duration é o tempo de duração da animação, 1000 é igual a 1 segundo */ 

// sr.reveal('.efeitoScrollReveal_Efeito2',{
//     rotate: {x:10, y:80, z:0},
//     duration: 2000
// })
sr.reveal('.efeitoScrollReveal_Efeito2',{
    rotate: {x:50, y:50, z:0},
    duration: 1500
})



 /* FUNÇÃO QUE ATIVA UM BACKGROUND QUANDO A ROLAGEM DO SCROLL É ACIONADA */ 
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {    /*Se scroll rolar */ 
      header.classList.add("scrolled");  /* colocar background determinado no css*/
      header.style.transition = "transform 1s"; 
      header.style.transform = "rotate(360deg)"; 
    } else {
      header.classList.remove("scrolled"); /*se não, ignora a classe scrolled*/ 
    }
  });
  