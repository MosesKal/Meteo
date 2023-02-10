async function fetchUsers (){
    const r = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({title : 'article 1'})
    });

    if(r.ok === true){
        return r.json();
    }
    throw new Error('Impossible de contacter le serveur');

}
fetchUsers().then(users => console.log(users));