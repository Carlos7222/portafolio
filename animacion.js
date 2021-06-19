
var text=document.getElementById('minombre')
var str= text.innerHTML;

text.innerHTML="";
var speed= 200;
 var i=0
 function escribir(){
     if(i<str.length){
         text.innerHTML+=str.charAt(i);
         i++
         setTimeout(escribir,speed);
     }
 }
setTimeout(escribir, speed)


let animado=document.getElementById("animacioncard")
 
function mostrar(){
    let scrol=document.documentElement.scrollTop;
    
        let distanciaelemento=animado.offsetTop ;
 
        if(distanciaelemento-600 <scrol){
            
            animado.style.opacity=1;
            animado.classList.add("mostrarArriba")
        }
    }

window.addEventListener('scroll',mostrar);

window.sr=ScrollReveal();
    sr.reveal('.image_acerca_de_mi',{ 
        duration:2000,
        origin:'bottom',
        distance:'-200px'
    });
    sr.reveal('.texto_me',{ 
        duration:2000,
        origin:'left',
        distance:'400px'
    });

    sr.reveal('.card',{ 
        rotate:{
            x:1,
            y:180
        }
    });

   
    sr.reveal('.contenedor-habilidad',{ 
        rotate:{
            x:1,
            y:180
        }
    });
    sr.reveal('.texto-contactame',{ 
        duration:2000,
        origin:'left',
        distance:'500px'
    });
    sr.reveal('.image_contacto',{ 
        duration:2000,
        origin:'top',
        distance:'500px'
    });
    sr.reveal('.icon_contactame',{ 
        duration:2000,
        origin:'bottom',
        distance:'500px'
    });
   