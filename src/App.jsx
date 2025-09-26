import './App.css'
import { useState } from 'react'
import Editor from './components/cv-editor/Editor'
import Preview from './components/preview/Preview'
import { data as initData, prefillData } from './data'

function App() {
  const [data, setData] = useState(initData)

  return (
    <>
      <Editor data={data} setData={setData} />
      {/* Data is prefill if it's untouched, once changed, it will use the data variable */}
      <Preview data={data == initData ? prefillData : data} />
    </>
  )
}

export default App
