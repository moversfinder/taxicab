/**
 * Taxicab Design System
 * 
 * A comprehensive design system for the Taxicab ride-hailing platform
 * Built with React, TypeScript, and Tailwind CSS
 */

// Design Tokens
export * from './tokens'

// Utility Functions
export * from './lib/utils'

// Base UI Components
export * from './components/ui'

// Taxi-specific Components
export * from './components/taxi/driver-status-card'
export * from './components/taxi/earnings-display'

// Layout Components
export * from './components/layouts/dashboard-layout'

// Styles
export './styles/globals.css'

// Version
export const VERSION = '1.0.0'

// Design System Metadata
export const DESIGN_SYSTEM_INFO = {
  name: 'Taxicab Design System',
  version: VERSION,
  description: 'A comprehensive design system for the Taxicab ride-hailing platform',
  author: 'Taxicab Platform Team',
  license: 'MIT',
  repository: 'https://github.com/moversfinder/taxicab',
  documentation: 'https://taxicab-design-system.vercel.app',
  keywords: [
    'design-system',
    'ui-components',
    'react',
    'typescript',
    'tailwindcss',
    'shadcn',
    'taxi',
    'ride-hailing',
    'zimbabwe'
  ],
} as const
