import React , { useRef }  from 'react'
import "./Form.css"

type FormInputValeur = {
    firstName: string;
    lastName: string;
    age: number;
    isDeveloper: boolean;
  };
  

export const Form = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const firstNameRef = useRef<HTMLInputElement>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const lastNameRef = useRef<HTMLInputElement>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ageRef = useRef<HTMLInputElement>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isDeveloperRef = useRef<HTMLInputElement>(null);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formInput: FormInputValeur = {
            firstName: firstNameRef.current?.value || "",
            lastName: lastNameRef.current?.value || "",
            age: Number(ageRef.current?.value) || 0,
            isDeveloper: isDeveloperRef.current?.checked || false,
        };

        console.log(formInput);
    };




  return (
    <div className='parent'>
        <form onSubmit={handleSubmit} className='fofo'>
        <label htmlFor="firstName">First name:</label>
        <input type="text" id="firstName" ref={firstNameRef} />

        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" ref={lastNameRef} />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" ref={ageRef} />

        <label htmlFor="isDeveloper">Is developer:</label>
        <input type="checkbox" id="isDeveloper" ref={isDeveloperRef} />

        <button type="submit">Valider</button>
        </form>
    </div>
    
    
  )
}