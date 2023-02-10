document.querySelector('#cp').addEventListener('input', function(){
    if(this.value.length == 5){
    let url =`https://geo.api.gouv.fr/communes?codePostal=${this.value}`;      
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        let affichage = '<ul>';
        for(let ville of json){
            affichage += `<li>${ville.nom}</li>`;
        }
        affichage += '</ul>';
        document.querySelector('#affichage').innerHTML = affichage;
    });
    }
})



