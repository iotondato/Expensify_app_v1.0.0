console.log('Destructuring.js')


const Person = {
    name: "Brenno",
    age: 25,
    location:{
        city: 'SBC',
        temp: 17
    }
}

const { name: firstName = "Anonymous", age} = Person;

console.log(firstName, age);

const address = ['Rua Santos Dumont 2333', 'São Barnardo do Campo', 'São Paulo'];

const [ , city, state, country = 'Inner core'] = address;

console.log(city, state, country);


