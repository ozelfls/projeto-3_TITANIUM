// script carossel 

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

// Fim carossel 




//TEMA ESCURO 

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark') // algo nessa função faz o site todo ficar completamete preto
})



// mouse event novidads



const imagemCod = document.getElementById('cod');
const tituloNovo = document.getElementById('novo');


imagemCod.addEventListener('mouseover', () => {
    imagemCod.style.transform = 'scale(1.1)'; 
    imagemCod.style.transition = 'transform 0.3s';
});

imagemCod.addEventListener('mouseout', () => {
    imagemCod.style.transform = 'scale(1)';
});

tituloNovo.addEventListener('mouseover', () => {
    tituloNovo.style.color = '#ffd700'; 
});

tituloNovo.addEventListener('mouseout', () => {
    tituloNovo.style.color = ''; 
});



//efeito no botão de compra 



const botaoCompra = document.querySelector('.button-compra');

botaoCompra.addEventListener('click', () => {
    botaoCompra.style.transform = 'scale(0.9)';
    botaoCompra.style.transition = 'transform 0.1s';

    setTimeout(() => {
        alert("ocorreu um erro ao adicionar no carrinho: fora de estoque");
        botaoCompra.style.transform = 'scale(1)'; 
    }, 100);
});



// animação de novidades

tituloNovo.addEventListener('click', () => {
  document.querySelector('.novidade').scrollIntoView({
      behavior: 'smooth'
  });
});




// cards play plys 


function openTab(boxId) {
  
  const h5Elements = document.querySelectorAll('.column h5');
  h5Elements.forEach(h5 => h5.textContent = '');

  
  if (boxId === 'b1') {
      document.querySelector(".column[onclick=\"openTab('b1');\"] h5").textContent = 'Assinatura Essencial: R$36,90/mês';
  } else if (boxId === 'b2') {
      document.querySelector(".column[onclick=\"openTab('b2');\"] h5").textContent = 'Assinatura Plus: R$53,90/mês';
  } else if (boxId === 'b3') {
      document.querySelector(".column[onclick=\"openTab('b3');\"] h5").textContent = 'Assinatura Deluxe: R$59,90/mês';
  } // improviso temporrio, mas funciona 

  const columns = document.querySelectorAll('.column');
  columns.forEach(column => column.classList.remove('active'));

  columns.forEach(column => {
      if (column.getAttribute('onclick').includes(boxId)) {
          column.classList.add('active');
      }
  });
}

