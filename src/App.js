import { useState } from 'react';
import './App.css';


function App() {
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    return (
        <div className="App">
            <section className='userInput'>
                <input type="text" name="" id="" placeholder='Firstname'
                    value={userFirstName} onChange={(elt) => {
                        setUserFirstName(elt.target.value);
                    }} />
                {<input type="text" name="" id="" placeholder='Lastname'
                    value={userLastName} onChange={(elt) => setUserLastName(elt.target.value)} />}
                <input type="email" name="" id="" placeholder='Email'
                    value={userEmail} onChange={(elt) =>
                        setUserEmail(elt.target.value)
                    } />
            </section>
            <section className='printUserInput'>
                <p>Firstname: {userFirstName}</p>
                <p>Lastname: {userLastName}</p>
                <p>Email: {userEmail}</p>
            </section>
        </div>
    );
};

export default App;
