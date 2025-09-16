import { useState } from 'react'

import './App.css'
import Editor from './components/cv-editor/Editor'
import Preview from './components/preview/Preview'
import { data as initData } from './data'

function App() {
  const [data, setData] = useState(initData)

  return (
    <>
      <Editor data={data} setData={setData} />
      <Preview data={data} />
    </>
  )
}

export default App
