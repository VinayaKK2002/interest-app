import { TextField , Stack ,Button} from '@mui/material'
import { useState } from 'react'
import './App.css'


function App() {
  const [interest, setInterest ] = useState(0)
  const [principle, setPrinciple ] = useState(0)
  const [rate, setRate ] = useState(0)
  const [year, setYear ] = useState(0)
 const [invalidPrinciple, setinvalidPrinciple] = useState(false)
 const [invalidRate, setinvalidRate] = useState(false)
 const [invalidYear, setinvalidYear] = useState(false)


const validateInput=(inputTag)=>{
  console.log(inputTag, typeof inputTag);
  const {name,value} = inputTag
  console.log(!!value.match(/^[0-9]*.[0-9]+$/));
  console.log(!!value.match(/^\d+(\.\d+)?$/));

if(name=='principle'){
  setPrinciple(value)
  if (!!value.match(/^\d+(\.\d+)?$/)) {
    setinvalidPrinciple(false)
  }
  else{
    setinvalidPrinciple(true)
  }
}else if(name=='rate'){
  setRate(value)
  if (!!value.match(/^\d+(\.\d+)?$/)) {
    setinvalidRate(false)
  }
  else{
    setinvalidRate(true)
  }
}
else if(name=='year'){
  setYear(value)
  if (!!value.match(/^\d+(\.\d+)?$/)) {
    setinvalidYear(false)
  }
  else{
    setinvalidYear(true)
  }
}

}

const handleCalculate = (e) =>{
  e.preventDefault()
  console.log("button click");
  if( principle && rate && year){
    setInterest(principle*rate*year/100)

  }
  else{
    alert("please fill form compltely")
  }
}

const handleReset = () =>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setinvalidPrinciple(false)
  setinvalidRate(false)
  setinvalidYear(false)

 }



  return (
    <>
    <div style={{width:'100%',minHeight:"100vh"}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div className='bg-light p-5 rounded'>
        <h3>simple interest calculator</h3>
        <p>calculate your simple interest easily </p>
        <div  className='bg-warning p-5 rounded text-center'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>total simple interest</p>
        </div>
        <form  className='mt-5'>
          {/* priciple Amount */}
        <div className='mb-3'>
          <TextField value={principle || ""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
          </div>
          {/* invalid principle */}
          {invalidPrinciple && <div className='text-danger '>
          invalid principle
          </div>}
          {/* rate */}
          <div className='mb-3'>
          <TextField value={rate || ""}  name='rate'  onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label="% rate" variant="outlined" />
          </div>
          {/* invalid rate */}
          {invalidRate && <div className='text-danger '>
          invalid rate
          </div>}
          {/* year */}
          <div className='mb-3'>
          <TextField value={year || ""}  name='year'  onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-year" label="₹ time period (Yr)" variant="outlined" />
          </div>
          {/* invalid year */}
          {invalidYear && <div className='text-danger '>
          invalid year
          </div>}
          {/* button */}
          <Stack direction="row" spacing={2}>
          <Button type="submit" onClick={handleCalculate} disabled={invalidPrinciple || invalidRate|| invalidYear} variant="contained" style={{width:'50%' ,height:'70px'}} className='bg-dark'>Calculate</Button>
          <Button  onClick={handleReset} variant="outlined" style={{width:'50%' ,height:'70px'}} className='text-dark border-dark'>Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
      
    </>
  )
}

export default App
