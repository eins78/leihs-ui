import initStoryshots from '@storybook/addon-storyshots'
import { puppeteerTest } from '../../test/node_modules/@storybook/addon-storyshots-puppeteer'

initStoryshots({ suite: 'HTML Snapshots' })
initStoryshots({ suite: 'Visual Snapshots', test: puppeteerTest() })
