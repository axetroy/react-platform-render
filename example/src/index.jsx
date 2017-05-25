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
