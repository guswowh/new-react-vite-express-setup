// import logo from "./logo.svg";
import axios from 'axios'
import './App.css'
import { useRef } from 'react'

function App() {
  const fileInputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(fileInputRef.current.files[0])
    const formData = new FormData()
    // console.log(event.target.files)
    formData.append('file', fileInputRef.current.files[0])
    console.log(formData.getAll('file'))
    axios.post('/api/upload', formData).then((response) => {
      console.log(response)
    })
  }

  return (
    <div className="App">
      <div>hi front</div>
      <button
        onClick={() => {
          console.log('dd')
          axios.post(`/api/test`, { data: 'hi4444hi' }).then((response) => {
            console.log(response)
          })
        }}
      >
        test btn
      </button>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="file" ref={fileInputRef} />
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default App
