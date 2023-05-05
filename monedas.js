
//console.log('correcto');
document.querySelector('#dolarbtn').addEventListener('click', function(){
    obtenerDatos('dolar');
});
document.querySelector('#uf').addEventListener('click', function(){
    obtenerDatos('uf');
});

function obtenerDatos(tipo){
    //console.log('diste click');
    let url = `https://mindicador.cl/api/${tipo}`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function(){

        if (this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            let resultado = document.querySelector('#resultado');

            resultado.innerHTML = '';
            for(let item of datos.serie){
                resultado.innerHTML += `<li>${item.fecha.slice(0,10)} | ${item.valor}</li>`;
            }
        }
    }
}