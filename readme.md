# react-before-after-slider ([demo](https://transitive-bullshit.github.io/react-before-after-slider/))

> A sexy image comparison slider for React.

[![NPM](https://img.shields.io/npm/v/react-before-after-slider.svg)](https://www.npmjs.com/package/react-before-after-slider) [![Build Status](https://travis-ci.com/transitive-bullshit/react-starfield-animation.svg?branch=master)](https://travis-ci.com/transitive-bullshit/react-starfield-animation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This component is perfect for displaying the differences between two images, allowing the user to slide over them for an enticing before & after reveal effect.

## Install

```bash
npm install --save react-before-after-slider
```

## Usage

Check out the [demo](https://transitive-bullshit.github.io/react-before-after-slider/).

```jsx
import React, { Component } from 'react'

import BeforeAfterSlider from 'react-before-after-slider'

class Example extends Component {
  render () {
    const before = 'https://...example1.jpg'
    const after = 'https://...example2.jpg'

    return (
      <BeforeAfterSlider
        before={before}
        after={after}
        width={640}
        height={480}
      />
    )
  }
}
```

## Props

| Property      | Type               | Default                               | Description                                                                                                                                  |
|:--------------|:-------------------|:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| `before`  | string           | **Required**                                  | URL of before image to use. |
| `after`   | string           | **Required**                                  | URL of after image to use. |
| `width`     | number           | **Required**                                  | Width in pixels for the component. |
| `height`     | number           | **Required**                                  | Height in pixels for the component. |
| `defaultProgress`     | number           | 0.5                                  | Where the progress slider should start (float between 0 and 1). |
| `className`     | string           |                                   | Class name to add to root div element.  |
| `beforeClassName`     | string           |                                   | Class name to add to before element.  |
| `afterClassName`     | string           |                                   | Class name to add to after element.  |
| `beforeProps`     | object           | { }                                  | Optional extra props to pass to the before [BlockImage](https://github.com/transitive-bullshit/react-block-image).  |
| `afterProps`     | object           | { }                                  | Optional extra props to pass to the after [BlockImage](https://github.com/transitive-bullshit/react-block-image).  |
| `...`           | ...              | undefined                            | Any other props are applied to the root div element. |

Note that both `before` and `after` will by default be displayed as background images with `background-size: cover` via [react-block-image](https://github.com/transitive-bullshit/react-block-image).

## Todo

- [ ] Remove restriction on passing a hard-coded `width` and `height`

## Related

- [justapose](https://juxtapose.knightlab.com/) - JS library for creating before / after image sliders.
- [before-after.js](https://github.com/jotform/before-after.js) - jQuery image comparison slider.

## License

MIT © [transitive-bullshit](https://github.com/transitive-bullshit)
