import { useState } from 'react';
import './App.css'
import { TextField, Stack, Button } from '@mui/material';
function App() {
  const [interest, setinterest] = useState(0)
  const [principle, setprinciple] = useState(0)
  const [rate, setrate] = useState(0)
  const [year, setyear] = useState(0)

  const [principleAmountValid, setPrincipleAmountValid] = useState(true)
  const [rateAmountValid, setRateAmountValid] = useState(true)
  const [yearAmountValid, setYearAmountValid] = useState(true)

  const handleReset = () => {
    setinterest(0)
    setprinciple(0)
    setrate(0)
    setyear(0)
    setPrincipleAmountValid(true)
    setRateAmountValid(true)
    setYearAmountValid(true)
  }
  const handleValidation = (tag) => {
    console.log('inside handleValidation');
    const { value, name } = tag
    console.log(value, name);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^\d*\.?\d+$/)) {
      // if valid
      if (name == 'principle') {
        setprinciple(value)
        setPrincipleAmountValid(true)
      } 
      else if (name == 'rate') {
        setrate(value)
        setRateAmountValid(true)
      } 
      else {
        setyear(value)
        setYearAmountValid(true)
      }
    }else{
    //if invalid

    if (name == 'principle') {
      setprinciple(value)
      setPrincipleAmountValid(false)
    }
     else if (name == 'rate') {
      setrate(value)
      setRateAmountValid(false)
    } 
    else {
      setyear(value)
      setYearAmountValid(false)
    }

  }
}

const handleCalculate =()=>{
  if(principle&&rate&&year){
setinterest(principle*year*rate/100)
  }else{
    alert('plz fill the forms')
  }
}
  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center        align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light p-5 rounded'>
        <h3 >Simple Interest App</h3>
        <p>Calculate your Simple interest Easily</p>
        <div className='d-flex justify-content-center  align-items-center bg-warning p-3 rounded shadow flex-column text-light'>
          <h1>₹{interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>
          {/* {principle } */}
          <div className="mt-3">
            <TextField className='w-100' id="outlined-basic-principle" label="₹  Principle Amount" variant="outlined" value={principle || ''} name='principle' onChange={e => handleValidation(e.target)} />
          </div>
          {!principleAmountValid && <div className="text-danger mb-3">* Invalid User Input</div>}
          {/* {rate} */}
          <div className="mt-3">
            <TextField className='w-100' id="outlined-basic-rate" label="Rate of interest (p.a) %  " variant="outlined" value={rate || ''} name='rate' onChange={e => handleValidation(e.target)} />
          </div>
          {!rateAmountValid && <div className="text-danger mb-3">* Invalid User Input</div>}
          {/* {time} */}
          <div className="mt-3">
            <TextField className='w-100' id="outlined-basic-time" label="Time Period (yr)" variant="outlined" value={year || ''} name='year' onChange={e => handleValidation(e.target)} />
          </div>
          {!yearAmountValid && <div className="text-danger mb-3">* Invalid User Input</div>}

          {/* {btn colection} */}
          <Stack direction="row" spacing={2}>
            <Button onClick={handleCalculate} disabled={!principleAmountValid ||!rateAmountValid ||!yearAmountValid} style={{ width: '50%', height: '70px' }} className='bg-dark mt-3' variant="contained">Calculate</Button>

            <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} className='mt-3' variant="outlined">Reset</Button>
          </Stack>

        </form>
      </div>
    </div>
  )
}

export default App
