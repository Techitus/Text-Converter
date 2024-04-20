
import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const[text,setText] = useState("")

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

const toUppercase = ()=>{
  setText(text.toUpperCase());
  
}
const toLowercase =()=>{
setText(text.toLowerCase())
}
const toSentenceCase =()=>{
  setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
}
const toTitleCase =()=>{
  setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '))
  
}
const toReverseCase =()=>{
  setText(text.split('').reverse().join(''))
}
const toCamelCase =()=>{
  setText(text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(''))
}
const toPascalCase =()=>{
  setText(text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('').charAt(0).toUpperCase() + text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('').slice(1))
}
const toClear = ()=>{
  setText("")
}

  return (
    <>
      <div className="container items-center justify-center  ml-48 mt-2 p-16  ">
        <h2 className='header text-center text-5xl '>Text converter</h2>
     <div className="inputField">
      <textarea name="" value={text} onChange={handleTextChange} id="" cols="140" rows="15" placeholder='Enter a text here...' className='mt-10 ml-20 rounded-md bg-[#f2f2f2] text-black'></textarea>
     </div>
     <div className="buttons mt-5  ml-64 gap-10 space-x-7">
     <Button handler={toSentenceCase} value ="Sentence case"  />
      <Button handler={toUppercase} value ="UPPERCASE"  />
      <Button value ="lowercase" handler={toLowercase} />
      <Button value ="Title Case" handler={toTitleCase} />
      <Button value ="reverse case" handler={toReverseCase} />
      <Button value ="CamelCase" handler={toCamelCase} />
      <Button value ="PascalCase" handler={toPascalCase} />
      <Button value ="clear" handler={toClear} />




      

     </div>
     <div className="summary">
      <h3 className='text-gray-950'>Your Text summary:</h3> <br />
      <p className="text-gray-900 dark:text-gray-700">{text.split(" ").length  }  words and {text.length} characters</p> <br />
      <p className="text-gray-900 dark:text-gray-700">{0.008 * text.split(" ").length } Minutes to read</p>


     </div>
        </div>      
    </>
  )
}

export default App
