# dropdown-ii

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/dropdown-ii.svg)](https://www.npmjs.com/package/dropdown-ii) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dropdown-ii
yarn add dropdown-ii
```

## Usage

```jsx
import React, { Component } from 'react'

import { DropdownComponent } from 'dropdown-ii'
import 'dropdown-ii/dist/index.css'

class Example extends Component {
  render() {
    return (
      <DropdownComponent
        name='name'
        className='className'
        id='id'
        onChange='onChange'
        value='value'
        firstOption='firstOption'
        list='list'
      />
    )
  }
}
```

## License

MIT © [Nicault](https://github.com/Nicault)
