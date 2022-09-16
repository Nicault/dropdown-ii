# dropdown-ii

> Made with create-react-library

React simple dropdown component

[![NPM](https://img.shields.io/npm/v/dropdown-ii.svg)](https://www.npmjs.com/package/dropdown-ii) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

To install, you can use npm or yarn:

```bash
npm install --save dropdown-ii
yarn add dropdown-ii
```

## Usage

```jsx
import React, { Component } from 'react'

import { DropdownComponent } from 'dropdown-ii'

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
        list={list}
      />
    )
  }
}
```

## License

MIT © [Nicault](https://github.com/Nicault)
