import type { Preview } from '@storybook/react'
import 'govuk-frontend/dist/govuk/govuk-frontend.min.css'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
