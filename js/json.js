const user = {
    id:1,
    name: 'goriber amir',
    job: 'actor'
}
//JavaScript Object Notation
const stingifyed = JSON.stringify(user);
// console.log(user);
// console.log(stingifyed)

const shop = {
    owner: 'alia', 
    address:{
        steet:'kochukhet', 
        city: 'romna',
        country: 'bd',
    },
    products:['laptop', 'mobile', 'mic', 'monitor', 'keyboard'],
    revinue: 45000, 
    isOpen: true, 
    isNew: false,
}

const shopJSON = JSON.stringify(shop);
// console.log(shop, shopJSON)

const shopObj = JSON.parse(shopJSON);
console.log(shopObj)
