import React, { useState } from 'react'

export const SplitBill = () => {
    const [person, setPerson] = useState(1);
    const [selected, isSelected] = useState(false);
    const [amount, setAmount] = useState();
    const people= ["John", "Kane", "Mike", "Lucy"];
    
    const submitHandler=(e)=>{
        e.preventDefault();
        setAmount(amount);
        console.log(amount);
    }
    const handleChange=(e)=>{
        setAmount(e.target.value);
    }
    const handlePerson=(e)=>{
        const isChecked = e.target.checked;
        if(isChecked){
            setPerson(person+1);
        }
        else
        {
            setPerson(person-1);
        }
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <label> Enter Bill Amount: </label>
                <input type="text" value={amount} onChange={handleChange}></input>
                <button type='submit' value="submit">Submit</button>
                <h3>People</h3>
                {people.map((user, index)=> <div key={index}>
                <label>{user}</label>
                <input type="checkbox" name="person" value={selected} onChange={handlePerson}></input><br></br>
                </div>)}
            </form>
        <h1>Each selected needs to pay ${isNaN(amount/person)?0:(amount/person)}</h1>
        </>
    )
}
