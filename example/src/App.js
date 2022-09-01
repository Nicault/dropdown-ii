import React from 'react'

import { DropdownComponent } from 'dropdown-ii'
import 'dropdown-ii/dist/index.css'

const list = [{ name: 1 }, { name: 2 }, { name: 3 }]

const App = () => {
  const name = list.map((option) => option.name)

  return <DropdownComponent list={name} firstOption='select' />
}

export default App
