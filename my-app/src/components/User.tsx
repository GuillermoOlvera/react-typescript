import { useState } from "react";

interface User {
    uid: string;
    name: string;
};

export const User = () => {

    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 'abc123',
            name: 'Guillermo Olvera'
        });
    };

  return (

    <div className="mt-5">
        <h3>User: useState</h3>

        <button 
            className="btn btn-primary" onClick={ login }
        >
            Login
        </button>

        {
            !user 
                ? <pre> { 'No users found' } </pre>
                : <pre> { JSON.stringify(user) } </pre>
        }

    </div>

  )
}
