function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => users(user))
}

function users(user){
    console.log(user);
    /* for(const use of user){
        console.log(use.name)
    } */
    const name = user.map(person => person.name.length);
    console.log(name)
}