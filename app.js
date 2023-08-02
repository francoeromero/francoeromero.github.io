// ELEMENTOS DOM
      // secciones
      const HOME = document.getElementById('home');
      const ABOUT= document.getElementById('about');
      const PROJECTS = document.getElementById('projects');
      const SKILLS = document.getElementById('skills');
      const CERTIFICATES = document.getElementById('certificates');

      const texto1 = document.querySelector('.texto1');
      const texto2 = document.querySelector('.texto2');
      const texto3 = document.querySelector('.texto3');
      const texto4 = document.querySelector('.texto4');
      const texto5 = document.querySelector('.texto5');
      const texto5_parpadeo = document.querySelector('.parpadeo');
      const boton = document.querySelector('.boton');
      const circulos = document.querySelectorAll('.circle');
      const activo = document.querySelector('.active');
      const iconos = document.querySelectorAll('i');
      const cursor = document.querySelector('.cursor');
      const logo = document.querySelectorAll('.logo');
      const engranaje = document.getElementById('engranaje');
      const casco = document.getElementById('casco');
      const transicion = document.querySelector('.transicion')
      const contentTransicion = document.querySelector('.content-transicion') 
      const contentLogoAnimado = document.querySelector('.content-logoAnimado');
      const cascoAnimado = document.querySelector('.cascoAnimado');
      const engranajeAnimado = document.querySelector('.engranajeAnimado');
      const textIcono = document.querySelectorAll('.textIcono');
      const skl = document.querySelectorAll('.skl');


      logo.forEach((e)=>{
        e.addEventListener('click', function(){
          window.location.reload();
        })
      })


      skl.forEach((e, i) => {
        e.onmouseover = () => {
          textIcono[i].style.display = 'block';
        };

        e.onmouseout = () => {
          textIcono[i].style.display = 'none';
        }
      })



    ABOUT.style.display = 'none';
    PROJECTS.style.display = 'none';
    CERTIFICATES.style.display = 'none';
    SKILLS.style.display = 'none';
    // AL CARGARSE ANIMACION ESCRITURA
    document.addEventListener('DOMContentLoaded', function(){
      let agregarBorde = true;
      setInterval(function(){
        if(agregarBorde){
          texto5.style.borderRight = '0.5rem solid white';
        }
        else{
          texto5.style.borderRight = 'none';
        }
        agregarBorde = !agregarBorde;
      },500)
      setTimeout(function(){
              texto5.style.animation = 'teclear 3s steps(16)';
            }, 10)

      setTimeout(function(){        
              texto5_parpadeo.style.display = 'block';  
      }, 3000)
      
      setTimeout(function(){
            texto5_parpadeo.style.display = 'none';  
            texto5.style.animation = 'teclear-reverse 3s 1';
      }, 6000)

      setTimeout(function(){
        texto5_parpadeo.style.left = '40rem';  
        texto5.style.animation = 'teclear 3s steps(16)';
        texto5.innerText = 'I will design your project in your style'
      }, 9000)

      setTimeout(function(){        
              texto5_parpadeo.style.display = 'block'; 
              texto5_parpadeo.style.left = '40.3rem';  
      }, 12000)
    })



    // BOTON CV AL PASAR MOUSE
    boton.onmouseover = () => {
      let letra = document.querySelector('.cv');
      setTimeout(function(){
        letra.style.color = '#0b0b0b';
        letra.style.transition = '1s'
      },100)
      setTimeout(function(){
        letra.style.color = 'white';
      // letra.style.transition = '1s'
      },2000)
    }
    // BOTON CV AL DARLE CLICK
    boton.addEventListener('click', function(){
      let letra = document.querySelector('.cv');
      setTimeout(function(){
        letra.innerText = 'Loading..'
        letra.style.transition = '1s';
      }, 10);
      setTimeout(function(){
        letra.innerText = 'Done!';
        letra.style.transition = '1s';
      },2000);
      setTimeout(function(){
        letra.innerText = 'Download CV';
        letra.style.transition = '1s';
        letra.style.color = 'white'
      },3000)
    })


    // CURSOR MOUSE
    function posicionMouse(e){
      let x = e.pageX;
      let y = e.pageY;

      cursor.style.top = y + 'px';
      cursor.style.left = x + 'px';
    }
    
    document.addEventListener('mousemove', posicionMouse)

    // MI NOMBRE EFECTO 
      texto1.onmouseover = () => {
        setTimeout(function(){
              texto2.style.animation = 'none';
              texto3.style.animation = 'none';
          }, 10)
          setTimeout(function(){
              texto2.style.animation = 'animacion2 2s 3';
              texto3.style.animation = 'animacion1 2s 3';
              texto1.style.fontStyle = 'italic'
              texto2.style.fontStyle = 'italic'
              texto3.style.fontStyle = 'italic'
          }, 100)
          setTimeout(function(){
              texto2.style.animation = 'none';
              texto3.style.animation = 'none';
          }, 2000)
      }



// EVENTO AL PASAR EL MOUSE POR EL MENU 
circulos.forEach((circle) => {
circle.addEventListener('mouseover', () => {
  const icon = circle.querySelector('i');
  const currentClass = icon.className; // Obtenemos las clases existentes del elemento i
  const newClass = currentClass + '-fill'; // Agregamos el sufijo '-fill'
  icon.className = newClass; // Asignamos la nueva clase al elemento i
  circle.style.transition = '1s';
});

circle.addEventListener('mouseout', () => {
  const icon = circle.querySelector('i');
  const currentClass = icon.className;
  const newClass = currentClass.replace('-fill', ''); // Quitamos el sufijo '-fill'
  icon.className = newClass;
  icon.style.transition = '1s'
});
});


// EVENTO AL DARLE CLICK AL MENU
circulos.forEach(function(elemento, index) {
  elemento.addEventListener('click', function() {
  elemento.classList.remove('circle');
  elemento.classList.add('active');

  // ANIMACION TRANSICION
  setTimeout(function(){
    contentTransicion.style.display = 'flex';
    contentLogoAnimado.style.display = 'flex';
    transicion.style.animation = 'transicion 1.6s ease-in-out';
    cascoAnimado.style.animation = 'cascoAnimado 1.7s 1';
    engranajeAnimado.style.animation = 'engranajeAnimado 2s 1';
  },10)
  setTimeout(function(){
        // DISTRIBUIR LAS SECTIONS 
        switch(elemento.classList.value) {
      case 'home active':
        ABOUT.style.display = 'none';
        HOME.style.display = 'block';
        PROJECTS.style.display = 'none';
        SKILLS.style.display = 'none';
        CERTIFICATES.style.display = 'none';
        cursor.style.display = 'block';
      break;
      case 'aboutMe active':
        ABOUT.style.display = 'block';
        HOME.style.display = 'none';
        PROJECTS.style.display = 'none';
        SKILLS.style.display = 'none';
        CERTIFICATES.style.display = 'none';
        cursor.style.display = 'block';
      break;
      case 'projects active':
        ABOUT.style.display = 'none';
        HOME.style.display = 'none';
        PROJECTS.style.display = 'block';
        SKILLS.style.display = 'none';
        CERTIFICATES.style.display = 'none';
        cursor.style.display = 'none';
      break;
      case 'skills active':
        ABOUT.style.display = 'none';
        HOME.style.display = 'none';
        PROJECTS.style.display = 'none';
        SKILLS.style.display = 'block';
        CERTIFICATES.style.display = 'none';
        cursor.style.display = 'none';
      break;
      default:
        ABOUT.style.display = 'none';
        HOME.style.display = 'none';
        PROJECTS.style.display = 'none';
        SKILLS.style.display = 'none';
        CERTIFICATES.style.display = 'block';
        cursor.style.display = 'block';
      break;
    }

  },1200)
  setTimeout(function(){
    transicion.style.animation = 'none';
    contentTransicion.style.display = 'none';
    contentLogoAnimado.style.display = 'none';
    cascoAnimado.style.animation = 'none';
    engranajeAnimado.style.animation = 'none';
    engranaje.style.animation = 'engranaje 6s infinite linear';

  },1600)




  setTimeout(function(){
    elemento.style.animation = 'girarRapido 5s 1';
  },10)
  setTimeout(function(){
    elemento.style.animation = 'none';
  },1000)

  
  // Recorre los demás elementos para eliminar la clase 'active'.
  circulos.forEach(function(otroElemento, otroIndex) {
    if (otroIndex !== index) {
      otroElemento.classList.remove('active');
      otroElemento.classList.add('circle');
    }
  });
});




// Simular clic en el primer elemento
if (index === 0) {
  elemento.click();
}
});

// SECTION ABOUT

const contactos = document.querySelectorAll('.contacto');
const forma3 = document.querySelector('.forma3');
const forma2 = document.querySelector('.forma2');
const formaContacto = document.querySelectorAll('.forma-contacto');
const formaContactoSegundo = document.querySelectorAll('.forma-contacto-segundo');

// imprimir la segunda clase de formaContacto y la segunda clase de contactos
contactos.forEach(function(elemento) {
        elemento.addEventListener('mouseover', function(event) {
          // hago a todos blancos
          formaContacto.forEach(function(forma) {
            forma.style.background = 'white';
            forma.style.boxShadow = 'none';
          });
          formaContactoSegundo.forEach(function(forma){
            forma.style.background = 'white';
          })
          // convierto las clases de contacto y forma en objetos para compararlos 
          // y al seleccionar al elemento que paso por el mouse se agrega los estilos
          let objetoContactos =  elemento.className.split(' ');
          formaContacto.forEach(function(forma) {
            let objetoFormaContacto = forma.className.split(' ');
            if(objetoContactos[1] === objetoFormaContacto[1]){
              forma.style.background = '#2696E8';
              forma.style.boxShadow = '0 0 20px rgba(38, 150, 232, 0.8),0 0 60px rgba(38, 150, 232, 0.8),0 0 100px rgba(38, 150, 232, 0.8)';
              forma.style.transition = '1s';
              event.target.style.animation = 'girar 1s 1';
              setTimeout(function() {
                event.target.style.animation = 'none';
              }, 1000);
            }
          });
          //  ahora lo mismo con el segundo elemento de forma
          formaContactoSegundo.forEach(function(forma){
            let objetoContactoSegundo = forma.className.split(' ');
            if(objetoContactos[1] === objetoContactoSegundo[1]){
              forma.style.background = '#b02eae';
              forma.style.transition = '1s';
            }
          })

        });
      });
// let clases = formaContacto[i].className.split(' ')
// console.log(formaContacto[i])

// let clases = e.className.split(' ');
// console.log()
// formaContacto.style.background = 'red';

// contactos.forEach((e) => {
//   e.onmouseover = () => {
//     setTimeout(function(){
//       formaContacto.forEach(function(e){
//         e.style.background = 'rgb(107, 26, 97)';
//         e.style.transition = '1s';
//       })
//       formaContactoSegundo.forEach(function(e){
//         e.style.background = 'rgb(41, 75, 126)';
//         e.style.transition = '1s';
//       })
//     }, 10)
//     setTimeout(function(){
//       formaContacto.forEach(function(e){
//         e.style.background = 'white';
//         e.style.transition = '1s';
//       })
//       formaContactoSegundo.forEach(function(e){
//         e.style.background = 'white';
//         e.style.transition = '1s';
//       })
//     }, 10000)
//   }
// })

const linkedin = document.querySelector('.linkedin');
const github = document.querySelector('.github');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');


linkedin.addEventListener('click', function(e){
  e.preventDefault();
  window.open('https://www.linkedin.com/in/francoeromero/', '_blank');
});

github.addEventListener('click', function(e){
  e.preventDefault();
  window.open('https://github.com/francoeromero', '_blank');
});

email.addEventListener('click', function(e){
  e.preventDefault();
  window.open('mailto:francoeromero@gmail.com?subject=contacto&body=Hola%2C%20te%20contacto%20desde%20tu%20p%C3%A1gina%20y%20%20estoy%20interesado%20en%20conocer%20m%C3%A1s%20sobre%20ti%20y%20tu%20trabajo.%20', '_blank');
});
phone.addEventListener('click', function(e){
  e.preventDefault();
  window.open('http://wa.link/d80sr2');
});

// CARRUSEL

const carrusel = document.querySelector('.carrusel-items');

let intervalo = null;
let step = 1;
const start = () =>{
  intervalo = setInterval(function(){
    carrusel.scrollLeft += step;
  },10)
}

const stop = () =>{

} 
start();