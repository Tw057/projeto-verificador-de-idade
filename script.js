function verificar() {
   var data = new Date();
   var ano = data.getFullYear();
   var fano = document.getElementById('nascimento');
   var resu = document.getElementById('res');
   var Img = document.getElementById('minhaImagem');

   if (fano.value.length == 0 || fano.value > ano) {
       alert('Erro: verifique novamente');
   } else {
       var fsex = document.getElementsByName('radsex');
       var idade = ano - Number(fano.value);
       var genero = '';

       if (fsex[0].checked) {
           genero = 'Homem';

           if (idade >= 0 && idade < 10) {
               Img.setAttribute('src', 'bebe-m.png');
           } else if (idade <= 21) {
               Img.setAttribute('src', 'jovem-m.png');
           } else if (idade < 50) {
               Img.setAttribute('src', 'adulto-m.png');
           } else {
               Img.setAttribute('src', 'idoso-m.png');
           }

       } else if (fsex[1].checked) { // Para mulheres
           genero = 'Mulher';
           if (idade >= 0 && idade < 10) {
               Img.setAttribute('src', 'bebe-f.png');
           } else if (idade <= 21) {
               Img.setAttribute('src', 'jovem-f.png');
           } else if (idade < 50) {
               Img.setAttribute('src', 'adulta-f.png');
           } else if (idade >= 50) { // Aqui deve funcionar
               Img.setAttribute('src', 'idoso-f.png');
           }
       }

       // Exibir a imagem
       Img.style.display = 'block'; // Mostra a imagem
       resu.style.textAlign = 'center';
       resu.innerHTML = `Detectamos: ${genero} com ${idade} anos`;
   }
}
