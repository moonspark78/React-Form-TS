import React , { useRef, useState }  from 'react'
import "./Form.css"

type FormInputValeur = {
    firstName: string;
    lastName: string;
    age: number;
    isDeveloper: boolean;
};



  

export const Form = () => {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const isDeveloperRef = useRef<HTMLInputElement>(null);

    const [error, setError] = useState<string>("");


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
        <input type="text" id="firstName" ref={firstNameRef}  placeholder="your Name" required={true} />
        
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" ref={lastNameRef} placeholder="your LastName" />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" ref={ageRef} placeholder="Age" />

        <label htmlFor="isDeveloper">Is developer:</label>
        <input type="checkbox" id="isDeveloper" ref={isDeveloperRef} />

        <button type="submit">Valider</button>
        
        <input type="reset" value="clear" />
        </form>
    </div>
    
    
  )
}
