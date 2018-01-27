console.log("destructuring");

// Object Destruturing
const person = {
    name :'Hamza',
    age : 27,
    location : {
        city : 'SALE',
        temp : 16
    }
};

const { name : firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}`);
const {city, temp:temper} = person.location;
console.log(`It's ${temper} in ${city}`);


const book = {
    title : 'Ego is the Enemy',
    author : 'Ryan Holiday',
    publisher : {
        name : 'Penguin'
    }
};

const { name : publisherName = 'Self-Published' } = book.publisher; 
console.log(publisherName);

// Array Destructuring

const adresse = ['Dar hamra', 'Sale', 'Maroc'];
 
const [quartier,ville,pays='World'] = adresse;
console.log(pays);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , priceMedium] = item;
console.log(`A medium ${itemName} costs ${priceMedium}`);