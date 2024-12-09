import { NavLink } from 'react-router-dom';
import React, { useRef } from 'react';

const Login: React.FC = () => {
  
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

      
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (email && password) {
            console.log('Email:', email);
            console.log('Mot de passe:', password);
          
        } else {
            console.error('Tous les champs doivent être remplis.');
        }
    };

    return <>
                <header>
                    <h1 className='center'>Connexion</h1>
                </header>
                <main>
                    <section>
                        <h2>Connexion</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Votre adresse mail<br />
                                <input
                                    id='email'
                                    type='email'
                                    name='email'
                                    placeholder='adresse@mail.com'
                                    pattern='[a-z]{1}[a-z0-9\\-_\\.]{5,50}@[a-z]{1}[a-z0-9\\-_\\.]{5,50}\\.[a-z]{2,4}'
                                    required
                                    ref={emailRef} 
                                />
                            </label>
                            <label>
                                Entrez votre mot de passe<br />
                                <input
                                    id='password'
                                    type='password'
                                    name='password'
                                    placeholder='Mot de passe'
                                    required
                                    ref={passwordRef} 
                                />
                            </label>
                            <button type='submit'>Se connecter</button>
                        </form>
                        <p className='center'>
                            <NavLink to='/forgot-password'>Mot de passe perdu</NavLink>
                        </p>
                    </section>
                </main>
            </>;
};

export default Login;
