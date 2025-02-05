import React, {useEffect, useState} from 'react';

const App = () =>{
    const [statement, setStatement] = useState("Loading...")

    useEffect(() => {
        fetch('http://localhost:8080/')
            .then((response) => {
                response.text().then(text => {setStatement(text)})
            })
            .catch((error) => {console.log(error.stackTrace)})
    }, []);

    return (
        <>{statement}</>
    )
}

export default App;
