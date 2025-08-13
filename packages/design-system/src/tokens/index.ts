/**
 * Taxicab Design System - Design Tokens
 * 
 * This file exports all design tokens for the Taxicab platform.
 * Import from here to access colors, typography, spacing, and other design tokens.
 */

// Export all color tokens
export * from './colors'
export { colors as designColors } from './colors'

// Export all typography tokens
export * from './typography'
export { typography as designTypography } from './typography'

// Export all spacing tokens
export * from './spacing'
export { spacing as designSpacing, grid } from './spacing'

// Combined design tokens object for easy access
export const designTokens = {
  colors: require('./colors').colors,
  typography: require('./typography').typography,
  spacing: require('./spacing').spacing,
  grid: require('./spacing').grid,
} as const

// Breakpoints for responsive design
export const breakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// Z-index scale
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const

// Border radius scale
export const borderRadius = {
  none: '0px',
  sm: '2px',
  base: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px',
} as const

// Box shadow scale
export const boxShadow = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  // Taxi-specific shadows
  'taxi-glow': '0 4px 14px 0 rgba(245, 158, 11, 0.15)',
  'taxi-glow-lg': '0 10px 25px -3px rgba(245, 158, 11, 0.2), 0 4px 6px -2px rgba(245, 158, 11, 0.1)',
} as const

// Transition durations
export const transitionDuration = {
  75: '75ms',
  100: '100ms',
  150: '150ms',
  200: '200ms',
  300: '300ms',
  500: '500ms',
  700: '700ms',
  1000: '1000ms',
} as const

// Transition timing functions
export const transitionTimingFunction = {
  linear: 'linear',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const

// Animation keyframes
export const animations = {
  spin: 'spin 1s linear infinite',
  ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  bounce: 'bounce 1s infinite',
  // Taxi-specific animations
  'fade-in': 'fadeIn 0.2s ease-out',
  'slide-in': 'slideIn 0.3s ease-out',
  'scale-in': 'scaleIn 0.2s ease-out',
  'shimmer': 'shimmer 1.5s infinite',
} as const

// Opacity scale
export const opacity = {
  0: '0',
  5: '0.05',
  10: '0.1',
  20: '0.2',
  25: '0.25',
  30: '0.3',
  40: '0.4',
  50: '0.5',
  60: '0.6',
  70: '0.7',
  75: '0.75',
  80: '0.8',
  90: '0.9',
  95: '0.95',
  100: '1',
} as const

// Component-specific tokens
export const components = {
  button: {
    height: {
      sm: '32px',
      md: '40px',
      lg: '48px',
    },
    padding: {
      sm: '8px 12px',
      md: '10px 16px',
      lg: '12px 24px',
    },
    borderRadius: borderRadius.md,
  },
  input: {
    height: {
      sm: '32px',
      md: '40px',
      lg: '48px',
    },
    padding: {
      sm: '6px 8px',
      md: '8px 12px',
      lg: '12px 16px',
    },
    borderRadius: borderRadius.md,
  },
  card: {
    padding: {
      sm: '12px',
      md: '16px',
      lg: '24px',
      xl: '32px',
    },
    borderRadius: borderRadius.lg,
    shadow: boxShadow.base,
  },
  modal: {
    borderRadius: borderRadius.xl,
    shadow: boxShadow.xl,
    backdrop: 'rgba(0, 0, 0, 0.75)',
  },
} as const

// Export utility functions for accessing tokens
export const getToken = {
  color: (path: string) => {
    const keys = path.split('.')
    let value: any = designTokens.colors
    for (const key of keys) {
      value = value?.[key]
    }
    return value
  },
  spacing: (size: string) => {
    return designTokens.spacing[size as keyof typeof designTokens.spacing]
  },
  typography: (style: string) => {
    return designTokens.typography.textStyles[style as keyof typeof designTokens.typography.textStyles]
  },
} as const

// Theme configuration for different contexts
export const themes = {
  light: {
    background: '#FFFFFF',
    foreground: '#111827',
    primary: '#F59E0B',
    secondary: '#F3F4F6',
    accent: '#3B82F6',
    muted: '#6B7280',
  },
  dark: {
    background: '#111827',
    foreground: '#F9FAFB',
    primary: '#F59E0B',
    secondary: '#374151',
    accent: '#60A5FA',
    muted: '#9CA3AF',
  },
  'high-contrast': {
    background: '#000000',
    foreground: '#FFFFFF',
    primary: '#FFFF00',
    secondary: '#FFFFFF',
    accent: '#00FFFF',
    muted: '#CCCCCC',
  },
} as const

// Export everything as a single design system object
export const taxicabDesignSystem = {
  tokens: designTokens,
  breakpoints,
  zIndex,
  borderRadius,
  boxShadow,
  transitionDuration,
  transitionTimingFunction,
  animations,
  opacity,
  components,
  themes,
  getToken,
} as const
