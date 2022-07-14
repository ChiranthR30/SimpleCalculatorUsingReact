import React from "react";
import "./comps.css"

function Ans()
{

    const [inp,setinput] =React.useState('');

    
    function handleClick(event){
        setinput(inp.concat(event.target.name));
    }

    function handleClick1(){
        setinput("");
    }

    function handleClick2(){
        setinput(inp.slice(0,inp.length-1));
    }

    function handleClick3(){
        try{
            setinput(eval(inp).toString());
        }catch(err){
            setinput("Logical error")
        }
    }

    return(
        <>
        <div className="calculator">
            <h1  className="screen" >{inp}</h1>
            <div className="calc-keys">
                <button type="button" name="+" className="operator" onClick={handleClick}>+</button>
                <button type="button" name="-" className="operator" onClick={handleClick}>-</button>
                <button type="button" name="*" className="operator" onClick={handleClick}>&times;</button>
                <button type="button" name="/" className="operator" onClick={handleClick}>&divide;</button>

                <button type="button" name="7"  onClick={handleClick}>7</button>
                <button type="button"  name="8" onClick={handleClick}>8</button>
                <button type="button"name="9"  onClick={handleClick}>9</button>


                <button type="button" name="4" onClick={handleClick}>4</button>
                <button type="button" name="5" onClick={handleClick}>5</button>
                <button type="button" name="6" onClick={handleClick}>6</button>


                <button type="button"  name="1" onClick={handleClick}>1</button>
                <button type="button"  name="2" onClick={handleClick}>2</button>
                <button type="button" name="3"  onClick={handleClick}>3</button>


                <button type="button" name="0" onClick={handleClick}>0</button>
                <button type="button" name="." className="decimal" onClick={handleClick}>.</button>
                <button type="button"  className="all-clear" onClick={handleClick1}>AC</button>

                <button type="button"  className="equal-sign" onClick={handleClick3}>=</button>
                <button type="button"  className="equal-sign" onClick={handleClick2}>B</button>

            </div>
        </div>
        </>
    )
}

export default Ans;