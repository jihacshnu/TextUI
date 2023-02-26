import React,{useState} from 'react'


export default function Textform(props) {
  const handelUpClick = ()=>{
  
    let upText=text.toUpperCase()
    setText(upText)
    if(text.length===0){
      props.showAlert("Please enter text!",'warning')
    }
    else{
      props.showAlert("Converted to uppercase!",'success')
    }
  }
  
  const handelLoClick = ()=>{
    let loText=text.toLowerCase()
    setText(loText)
    
    if(text.length===0){
      props.showAlert("Please enter text!",'warning')
    }
    else{
      props.showAlert("Converted to lowercase!",'success')
    }
  }
  
  const handelClear = ()=>{
    let clText="";
    setText(clText)
    
    if(text.length===0){
      props.showAlert("Please enter text!",'warning')
    }
    else{
      props.showAlert("Clear text!",'warning')
    }

  }
  


const handelCopy=()=>{
  var copyText=document.getElementById("textBox")
  copyText.select()
  navigator.clipboard.writeText(copyText.value)
  
  if(text.length===0){
    props.showAlert("Please enter text!",'warning')
  }
  else{
    props.showAlert("Text copied!",'success')
  }
}

const handelExtraSpace=()=>{
  let spaceText=text.split(/[ ]+/)
  setText(spaceText.join(" "))
  
  if(text.length===0){
    props.showAlert("Please enter text!",'warning')
  }
  else{
    props.showAlert("Extra space has been removed!",'success')
  }
}
  
  const handelonChange = (event)=>{
   
    setText(event.target.value)
  }
 
  const[text,setText]= useState("");
  // text="new text"; wrong Way 
  // setText("new text"); correct way
  
  return (
    <>
 
  <div className='container' style={{color:props.mode==='dark'?'white':'black'}}> 
  <h1>{props.heading}</h1>
  <div className="mb-3">
  
     <textarea className="form-control" value={text} id="textBox" rows="8" onChange={handelonChange} style={{backgroundColor:props.mode==='dark'?'#181818':'white' ,color:props.mode==='dark'?'white':'black'}}></textarea>
     
  </div >
  <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1 my-1`} onClick={handelUpClick}>Convert to uppercase</button>
  <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1 my-1`} onClick={handelLoClick}>Convert to lowercase</button>
  <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1 my-1`} onClick={handelClear}> ClearText</button>
  <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1 my-1`} onClick={handelCopy}> Copy Text</button>
  <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1 my-1`} onClick={handelExtraSpace}>Remove extra space </button>
  
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} Minutes to read </p>
  <h2>Perview</h2>
  <p>{text.length>0?text:"Enter something to preview"}</p>
</div>

</>   
  )
}
