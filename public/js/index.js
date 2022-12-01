console.log('JS vinculado correctamente!')
      //window.location.href = "https://google.com"

      const a = document.querySelector('a');
      const main = document.getElementById('containerMain');
      const h2 = document.querySelector('.subtitulo');
      const parrafos = document.querySelectorAll('p');

    setTimeout(() => {
        document.getElementById('cargando').style.display = "none";
        main.style.display = "block"
      }, 2000);

      const nombre = prompt('Decime tu nombre');
      if(nombre){
        h2.textContent += nombre
      }else{
        h2.textContent += "invitado"
      }
      
      h2.style.textTransform = "uppercase"
      a.style.color = "#E51B3E";
      const change = confirm('Queres cambiar el color de fondo?')

      if(change){
        document.body.classList.add('fondo')
      }

      parrafo.forEach((parrafo,index) => {
        if((index + 1) % 2 === 0){
          parrafo.classList.add('destacadoPar')
        }else{
          parrafo.classList.add('destacadoImpar')
        }
      });
