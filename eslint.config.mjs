import next from 'eslint-config-next'

const config = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'public/admin/netlify-cms.js'],
  },
  ...next,
  {
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
]

export default config
