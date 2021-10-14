import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form>
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
          <section>
              <label htmlFor = "user-name">Gebruikersnaam:</label>
              <input
                  name="user-name"
                  id="user-name"
                  type="text"
              />
          </section>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;