import { useState } from 'react';
import './calculator.css';
import start from '../music/start.mp3'; // this is a tick sound for calculator

export default function Calculator() {

    let [displayValue, setDisplayValue] = useState("");
    const [font, setFont] = useState(false);
    let tick = new Audio(start)

    //all numbers display here
    const handleCalculator = (e) => {
        if (displayValue === "Error") {
            setDisplayValue("")
            return;
        }
        tick.play(); //
        displayValue += e.target.value;
        setDisplayValue(displayValue)
    }

    //a function to clear all numbers
    const handleAllClear = () => {
        tick.play()
        setDisplayValue("")
    }

    // a function to clear one number
    const handleDeleteOne = () => {
        tick.play()
        setDisplayValue(displayValue.slice(0, -1))
    }


    //a function to calculate numbers
    const handleEqual = () => {

        if (displayValue === "Error") {
            setDisplayValue("")
            return;
        }
        tick.play()
        try {
            setDisplayValue(eval(displayValue).toString()); //eval function to calculate numbers
        } catch (error) {

            setDisplayValue("Error")
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
                              
                                setDisplayValue(e.target.value)
                                if (displayValue.length >= 10) {
                                    console.log('ok');
                                    setFont(true);
                                }
                            }}
                            autoFocus className={font ? "font": 'unfont'} />
                    </div>
                    {/* buttons start from here (row-1) */}
                    <div>

                        <input type="button" value="AC" className='inputColor' onClick={handleAllClear} />
                        <input type="button" value="DE" className='inputColor' onClick={handleDeleteOne} />
                        <input type="button" value="." className='inputColor' onClick={handleCalculator} />
                        <input type="button" value="/" className='inputColor' onClick={handleCalculator} />
                    </div>
                    <div>
                        {/* buttons start from here (row-2) */}
                        <input type="button" value="7" onClick={handleCalculator} />
                        <input type="button" value="8" onClick={handleCalculator} />
                        <input type="button" value="9" onClick={handleCalculator} />
                        <input type="button" value="*" className='inputColor' onClick={handleCalculator} />
                    </div>
                    <div>
                        {/* buttons start from here (row-3) */}
                        <input type="button" value="4" onClick={handleCalculator} />
                        <input type="button" value="5" onClick={handleCalculator} />
                        <input type="button" value="6" onClick={handleCalculator} />
                        <input type="button" value="-" className='inputColor' onClick={handleCalculator} />
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
