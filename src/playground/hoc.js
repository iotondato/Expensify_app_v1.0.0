import React from 'react';
import ReactDOM from 'react-dom';


//Este é um stateless component que renderiza as informações que são 
// passadas como props para ele
const Info = (props) => (
    <div className="Info">
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);


//Este é um high Order Component, que adiciona um nível de informação e processamento para 
// qualquer componente que necessite das mesmas funcioonalidades. 
// Neste caso wrappedComponet é uma convenção para representar que qualquer componente pode 
// ser passado como parâmetro para este wrapper. Que nada mais é do que uma função que recebe um comente 
// como parâmetro e retorna o component porém com um processamento a mais.
const requireAuthetication = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAuthenticated ?  (
                <WrappedComponent {...props} />
            ) : (
                <p> Please login to see your info </p>
            )}
        </div>
    );
};

const AuthInfo = requireAuthetication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are yor info"/>, document.getElementById('app'));