import './App.css'
import Editor from './components/cv-editor/Editor'
import Preview from './components/preview/Preview'
import { data } from './data'

function App() {
  return (
    <>
      <Editor data={data} />
      <Preview />
    </>
  )
}

export default App
