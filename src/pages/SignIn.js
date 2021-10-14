import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

function SignIn() {
    //10.button functioneel maken
    const { logInFunction } = useContext(AuthContext)

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form>
          {/*bonus 1. invoervelden maken*/}
          <section>
              <label htmlFor = "email-address">Emailadres:</label>
              <input
                  name="email"
                  id="email-address"
                  type="email"
              />
          </section>
          <section>
              <label htmlFor = "pass-word">Wachtwoord:</label>
              <input
                  name="password"
                  id="pass-word"
                  type="password"
              />
          </section>
            {/*onClick opzetten*/}
          <button
              type="button"
              onClick={() => logInFunction()}
          >Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;