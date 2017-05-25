# react-platform-render

[platform](https://github.com/bestiejs/platform.js) wrapper component for react

![screenshot](https://github.com/axetroy/react-platform-render/raw/master/screenshot.PNG)

[Online demo](https://axetroy.github.io/react-platform-render/)

## Install

```bash
yarn add react          # requirement
yarn add platform      # requirement
yarn add @axetroy/react-platform-render
```

## Usage

```javascript
import React from 'react';
import { render } from 'react-dom';
import platform from 'platform';
import PlatformRender, {
  Chrome,
  Firefox,
  Ie,
  Opera,
  Safari,
  Edge
} from '../../lib/react-platform-render';

const element = document.createElement('div');
document.body.appendChild(element);
render(
  <div>
    hello world
    Your platform: {platform.name}
    <PlatformRender platform="Ie">
      If you are using Ie. You should see this block
    </PlatformRender>
    <Chrome>
      This is Chrome block
    </Chrome>
    <Ie>
      This is IE block
    </Ie>
    <Safari>
      This is Safari block
    </Safari>
    <Edge>
      This is Microsoft Edge block
    </Edge>
  </div>,
  element
);

```

## Props

- platform: string
    
## Run the Demo

```bash
git clone https://github.com/axetroy/react-platform-render.git
yarn
yarn start
```

### License

The [MIT License](https://github.com/axetroy/react-platform-render/blob/master/LICENSE)
