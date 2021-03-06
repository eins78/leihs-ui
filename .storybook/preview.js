import { addParameters, addDecorator } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import React, { useEffect } from 'react'
import './fake-time'

const VIEWPORTS = ['iphone6', 'galaxys9', 'iphonex', 'iphonexsmax', 'ipad']
const DEFAULT_VIEWPORT = 'iphonex'

// theme config:
// add styles in a story decorator, so it can be set according to story params

// require the styles *lazy* so they are not automatically injected (we need to handle that on a per-story basis),
// BUT dont do it in test env - it breaks the snapshots because `jest` runs in nodejs, so the custom webpack require statements wont work
// (because the snapshots dont depend on styles we can disable the whole feature).
if (process.env.NODE_ENV !== 'test') {
  const styleNormal = require('!!style-loader?{"injectType":"lazySingletonStyleTag"}!css-loader!../src/theme/bootstrap-leihs.css')
  const styleMobile = require('!!style-loader?{"injectType":"lazySingletonStyleTag"}!css-loader!../src/theme/bootstrap-leihs-mobile.css')

  // Glue between React and Webpack lazy styles <https://github.com/webpack-contrib/style-loader/tree/1556c0b16a7e16b255d85f7a25ed95bb16a01471#lazystyletag>
  const ThemeSelector = ({ children, style }) => {
    useEffect(() => {
      style.use()
      return () => style.unuse()
    })
    return children
  }
  // decorator to to select the appropriate style per story
  // NOTE: could be extended to use parameters if needed, for now we only distinguish by "subfolder".
  const dynamicStylesheetDecorator = (Story, ctx) => {
    const [name, style] = ctx.kind.startsWith('MobileApp/') ? ['mobile', styleMobile] : ['normal', styleNormal]
    console.debug(`ThemeSelector: using "${name}" theme`)
    return (
      <ThemeSelector style={style}>
        <Story />
      </ThemeSelector>
    )
  }

  addDecorator(dynamicStylesheetDecorator)
}
// / end of theme config

export const parameters = {
  docs: {
    inlineStories: false
  },
  viewport: {
    viewports: Object.fromEntries(VIEWPORTS.map(key => [key, INITIAL_VIEWPORTS[key]])),
    defaultViewport: DEFAULT_VIEWPORT
  }
}
