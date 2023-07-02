import { useState } from 'react';
import './calculator.css'; //calculator css file
import start from '../music/start.mp3'; // this is a tick sound for calculator

export default function Calculator() {

    let [displayValue, setDisplayValue] = useState("");
    const tick = new Audio(start);

    //all numbers display here when i click the button
    const handleCalculator = (e) => {
        if (displayValue === "Error") {
            setDisplayValue("")
            return;
        }
        console.log(e.target.value);
        tick.play(); // tick sound
        displayValue += e.target.value;
        setDisplayValue(displayValue);
    }

    //a function to clear all numbers in input box
    const handleAllClear = () => {
        tick.play()
        setDisplayValue("")
    }

    // a function to clear one number in input box
    const handleDeleteOne = () => {
        tick.play()
        setDisplayValue(displayValue.slice(0, -1))
    }


    //a function to calculate numbers when i click equal button
    const handleEqual = () => {

        if (displayValue === "Error") {
            setDisplayValue("")
            return;
        }
        tick.play()
        try {
            setDisplayValue(eval(displayValue).toString()); //eval function to calculate numbers
        } catch (error) {
            setDisplayValue("Error");
        }
    }
    return (

        // calculator start from here
        <div className='calculatorContainer'>
            <div className="calculator">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='display'>

                        {/* input box to display numbers and calculations */}
                        <input autoComplete='off' type="text" name='display' value={displayValue} required
                            onChange={(e) => {
                                setDisplayValue(e.target.value);
                            }}
                            autoFocus />
                    </div>

                    {/* buttons start from here (row-1) */}
                    <div>
                        <input type="button" value="AC" className='inputColor' onClick={handleAllClear} />
                        <button type="button"  value="DE" className='inputColor delete' onClick={handleDeleteOne} > <i class="material-icons">&#xe14a;</i></button>
                        <input type="button" value="." className='inputColor' onClick={handleCalculator} />
                        <button type="button" value="/" className='inputColor' onClick={handleCalculator} >&#247;</button>
                    </div>

                    <div>
                        {/* buttons start from here (row-2) */}
                        <input type="button" value="7" onClick={handleCalculator} />
                        <input type="button" value="8" onClick={handleCalculator} />
                        <input type="button" value="9" onClick={handleCalculator} />
                        <button type="button" value="*" className='inputColor' onClick={handleCalculator} >&#215; </button>
                    </div>

                    <div>
                        {/* buttons start from here (row-3) */}
                        <input type="button" value="4" onClick={handleCalculator} />
                        <input type="button" value="5" onClick={handleCalculator} />
                        <input type="button" value="6" onClick={handleCalculator} />
                        <button type="button" value="-" className='inputColor' onClick={handleCalculator} >&#8722;</button>
                    </div>

                    <div>
                        {/* buttons start from here (row-4) */}
                        <input type="button" value="1" onClick={handleCalculator} />
                        <input type="button" value="2" onClick={handleCalculator} />
                        <input type="button" value="3" onClick={handleCalculator} />
                        <input type="button" value="+" className='inputColor' onClick={handleCalculator} />
                    </div>

                    <div>
                        {/* buttons start from here (row-5) */}
                        <input type="button" value="00" onClick={handleCalculator} />
                        <input type="button" value="0" onClick={handleCalculator} />
                        <input type="button" value="=" className='equal' onClick={handleEqual} />
                    </div>
                </form>
            </div>
        </div>
    )
}
