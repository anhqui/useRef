import { useEffect, useRef, useState } from "react"

function App() {

  const [name, setName] = useState('')
  const renderCount = useRef(0)
  const inputRef = useRef()
  const prevName = useRef('')

  useEffect(() => {
    prevName.current = name
  }, [name])

  const focus = () => {
    inputRef.current.focus()
    inputRef.current.value = 'New value'
  }



  return (
    <>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
      {/* <div>I rendered {renderCount.current} times</div> */}
      <button onClick={focus}>Focus</button>
    </>
  )
}

export default App
