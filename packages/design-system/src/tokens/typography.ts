/**
 * Taxicab Design System - Typography Tokens
 * 
 * This file contains all typography definitions including font families,
 * sizes, weights, and line heights optimized for the taxi platform.
 */

export const typography = {
  // Font Families
  fontFamily: {
    primary: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
    heading: ['Poppins', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
    mono: ['JetBrains Mono', 'Monaco', 'Cascadia Code', 'Segoe UI Mono', 'Roboto Mono', 'monospace'],
    // Local language support
    local: ['Noto Sans', 'Inter', 'system-ui', 'sans-serif'], // Better Unicode support for Shona/Ndebele
  },

  // Font Sizes with corresponding line heights
  fontSize: {
    // Caption and small text
    xs: {
      size: '12px',
      lineHeight: '16px',
      letterSpacing: '0.025em',
    },
    sm: {
      size: '14px',
      lineHeight: '20px',
      letterSpacing: '0.025em',
    },
    
    // Body text
    base: {
      size: '16px',
      lineHeight: '24px',
      letterSpacing: '0',
    },
    lg: {
      size: '18px',
      lineHeight: '28px',
      letterSpacing: '0',
    },
    
    // Headings
    xl: {
      size: '20px',
      lineHeight: '28px',
      letterSpacing: '-0.025em',
    },
    '2xl': {
      size: '24px',
      lineHeight: '32px',
      letterSpacing: '-0.025em',
    },
    '3xl': {
      size: '32px',
      lineHeight: '40px',
      letterSpacing: '-0.025em',
    },
    '4xl': {
      size: '40px',
      lineHeight: '48px',
      letterSpacing: '-0.025em',
    },
    '5xl': {
      size: '48px',
      lineHeight: '56px',
      letterSpacing: '-0.025em',
    },
    
    // Display sizes
    '6xl': {
      size: '64px',
      lineHeight: '72px',
      letterSpacing: '-0.025em',
    },
  },

  // Font Weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // Line Heights (for custom usage)
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625', // Better for longer text in local languages
    loose: '2',
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Text Styles (Semantic combinations)
  textStyles: {
    // Display styles
    'display-large': {
      fontFamily: 'heading',
      fontSize: '5xl',
      fontWeight: 'bold',
      lineHeight: 'tight',
      letterSpacing: 'tight',
    },
    'display-medium': {
      fontFamily: 'heading',
      fontSize: '4xl',
      fontWeight: 'bold',
      lineHeight: 'tight',
      letterSpacing: 'tight',
    },
    'display-small': {
      fontFamily: 'heading',
      fontSize: '3xl',
      fontWeight: 'semibold',
      lineHeight: 'tight',
      letterSpacing: 'tight',
    },

    // Heading styles
    'heading-1': {
      fontFamily: 'heading',
      fontSize: '2xl',
      fontWeight: 'semibold',
      lineHeight: 'tight',
      letterSpacing: 'tight',
    },
    'heading-2': {
      fontFamily: 'heading',
      fontSize: 'xl',
      fontWeight: 'semibold',
      lineHeight: 'snug',
      letterSpacing: 'tight',
    },
    'heading-3': {
      fontFamily: 'heading',
      fontSize: 'lg',
      fontWeight: 'medium',
      lineHeight: 'snug',
      letterSpacing: 'normal',
    },

    // Body styles
    'body-large': {
      fontFamily: 'primary',
      fontSize: 'lg',
      fontWeight: 'normal',
      lineHeight: 'relaxed',
      letterSpacing: 'normal',
    },
    'body-medium': {
      fontFamily: 'primary',
      fontSize: 'base',
      fontWeight: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    'body-small': {
      fontFamily: 'primary',
      fontSize: 'sm',
      fontWeight: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'wide',
    },

    // UI element styles
    'button-large': {
      fontFamily: 'primary',
      fontSize: 'base',
      fontWeight: 'medium',
      lineHeight: 'none',
      letterSpacing: 'wide',
    },
    'button-medium': {
      fontFamily: 'primary',
      fontSize: 'sm',
      fontWeight: 'medium',
      lineHeight: 'none',
      letterSpacing: 'wide',
    },
    'button-small': {
      fontFamily: 'primary',
      fontSize: 'xs',
      fontWeight: 'medium',
      lineHeight: 'none',
      letterSpacing: 'wider',
    },

    // Label and caption styles
    'label': {
      fontFamily: 'primary',
      fontSize: 'sm',
      fontWeight: 'medium',
      lineHeight: 'normal',
      letterSpacing: 'wide',
    },
    'caption': {
      fontFamily: 'primary',
      fontSize: 'xs',
      fontWeight: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'wide',
    },

    // Code and monospace
    'code': {
      fontFamily: 'mono',
      fontSize: 'sm',
      fontWeight: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },

    // Taxi-specific styles
    'fare-display': {
      fontFamily: 'heading',
      fontSize: '3xl',
      fontWeight: 'bold',
      lineHeight: 'none',
      letterSpacing: 'tight',
    },
    'status-text': {
      fontFamily: 'primary',
      fontSize: 'sm',
      fontWeight: 'semibold',
      lineHeight: 'none',
      letterSpacing: 'wider',
      textTransform: 'uppercase',
    },
    'location-text': {
      fontFamily: 'primary',
      fontSize: 'base',
      fontWeight: 'medium',
      lineHeight: 'snug',
      letterSpacing: 'normal',
    },
  },

  // Responsive typography scales
  responsive: {
    mobile: {
      // Adjusted for mobile readability
      'display-large': { fontSize: '3xl' },
      'display-medium': { fontSize: '2xl' },
      'display-small': { fontSize: 'xl' },
      'heading-1': { fontSize: 'xl' },
      'heading-2': { fontSize: 'lg' },
      'heading-3': { fontSize: 'base' },
    },
    tablet: {
      // Tablet-specific adjustments
      'display-large': { fontSize: '4xl' },
      'display-medium': { fontSize: '3xl' },
      'display-small': { fontSize: '2xl' },
    },
  },

  // Language-specific adjustments
  languages: {
    // Shona language adjustments
    sn: {
      fontFamily: 'local',
      lineHeight: 'relaxed',
    },
    // Ndebele language adjustments
    nd: {
      fontFamily: 'local',
      lineHeight: 'relaxed',
    },
  },
} as const;

// Utility functions
export const getFontSize = (size: keyof typeof typography.fontSize) => {
  return typography.fontSize[size];
};

export const getTextStyle = (style: keyof typeof typography.textStyles) => {
  return typography.textStyles[style];
};

export const getResponsiveTextStyle = (
  style: keyof typeof typography.textStyles,
  breakpoint: keyof typeof typography.responsive
) => {
  const baseStyle = typography.textStyles[style];
  const responsiveOverrides = typography.responsive[breakpoint]?.[style] || {};
  return { ...baseStyle, ...responsiveOverrides };
};

// Export individual typography tokens
export const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textStyles } = typography;
