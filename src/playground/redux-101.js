import { createStore } from "redux";

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({setCounter = 0} = {}) => ({
    type: 'SET',
    setCounter
});

const resetCount = () => ({
    type: 'RESET'
});


// Aqui eu criei um sotore que controla o estatdo do meu satate. 
// Nele eu passo um função e esta função recebe como parâmetros 
// Um state que eu quero controlar e uma ação.
// A ação é caracterizada por uma string, onde cada string definida 
//vai modificar o state de uma forma.   
const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };

        case 'SET':
            return{
                count: action.setCounter
            }

        case 'RESET':
            return{
                count: 0
            };

        default:
            return state;
    }
});


// Para assistirmos as mudanças que ocorrem no state podemos usar a função subcribe
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Para realizar a modificação que desejamos com o store, fazemos a chamada de uma função 
// que se chama dispatch onde retrornamos um objeto que possuí a string da modificação 
// que queremos fazer no state. 
store.dispatch(incrementCount());

store.dispatch(incrementCount());

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(incrementCount({incrementBy: 20}));

store.dispatch(decrementCount({decrementBy: 200}));

store.dispatch(setCount({setCounter: 900}));

store.dispatch(resetCount());


//Também podemos pssar dados dinâmicos que são passados 
// Para o state através de actions

// Se chamarmos a função unsbscribe antes de uma nova ação, uremos fazer com que o redux
// assista as mudanças 





