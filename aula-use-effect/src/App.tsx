import { useEffect, useState } from "react"

function avisarAPI() {
  console.log("Lista salva!")
}

export function App() {
  const [list, setList] = useState<string[]>([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    avisarAPI()
  }, [list])

  useEffect(() => {
    fetch('https://api.github.com/users/leoneville/repos')
      .then((response) => response.json())
      .then((data) => {
        setList(data.map((item: any) => item.full_name))
      })
  }, [])

  const filteredList = list.filter(item => item.includes(filter))

  function addToList() {
    setList((state) => [...state, 'Novo item'])
  }

  return (
    <div>
      <input 
        type="text" 
        onChange={(e) => setFilter(e.target.value)} 
        value={filter}
      />
      <ul>
        {list.map((item) => {
          return <li>{item}</li>
        })}
      </ul>

      <ul>
        {filteredList.map((item) => {
          return <li>{item}</li>
        })}
      </ul>

      <button onClick={addToList}>Add to list</button>
    </div>
  )
}

// useEffect -> Side-Effect -> Efeito Colateral