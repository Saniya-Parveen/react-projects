

export default function NumberSelector({error, setError, selectedNumber, setSelectedNumber}) {
    const arrNumber = [
        1,2,3,4,5,6
    ]
    const numberSelectorHandler = (val) => {
      setSelectedNumber(val);
      setError("");
    }
  return (
    <div className='number-selector'>
      <p className="error">{error}</p>
        <div className='dicebox-content'>
        {
            
            arrNumber.map((val, index)=>{
                return <div
                className={`dice ${selectedNumber == val ? "selected" : ""} `}
                key={index}
                onClick={() => numberSelectorHandler(val)}>{val}</div>
            })
        }
       
       </div> 
       <p>Select Number</p>

    </div>
  )
}
