/**
 * Taxicab Design System - Spacing Tokens
 * 
 * This file contains all spacing definitions including margins, padding,
 * gaps, and layout dimensions optimized for the taxi platform.
 */

export const spacing = {
  // Base spacing scale (8px base unit)
  0: '0px',
  px: '1px',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  2.5: '10px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '64px',
  18: '72px', // Custom for taxi platform
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  88: '352px', // Custom for taxi platform
  96: '384px',

  // Semantic spacing for common use cases
  semantic: {
    // Component internal spacing
    'component-xs': '4px',
    'component-sm': '8px',
    'component-md': '12px',
    'component-lg': '16px',
    'component-xl': '24px',

    // Layout spacing
    'layout-xs': '8px',
    'layout-sm': '16px',
    'layout-md': '24px',
    'layout-lg': '32px',
    'layout-xl': '48px',
    'layout-2xl': '64px',

    // Section spacing
    'section-sm': '32px',
    'section-md': '48px',
    'section-lg': '64px',
    'section-xl': '96px',

    // Container spacing
    'container-sm': '16px',
    'container-md': '24px',
    'container-lg': '32px',
    'container-xl': '48px',
  },

  // Touch target sizes (important for mobile)
  touch: {
    'min-target': '44px', // Minimum touch target size
    'comfortable-target': '48px', // Comfortable touch target
    'large-target': '56px', // Large touch target for primary actions
  },

  // Dashboard-specific spacing
  dashboard: {
    'sidebar-width': '256px',
    'sidebar-collapsed': '64px',
    'header-height': '64px',
    'mobile-header': '56px',
    'content-padding': '24px',
    'mobile-content-padding': '16px',
    'card-gap': '16px',
    'section-gap': '32px',
  },

  // Form spacing
  form: {
    'field-gap': '16px',
    'group-gap': '24px',
    'section-gap': '32px',
    'input-padding-x': '12px',
    'input-padding-y': '8px',
    'button-padding-x': '16px',
    'button-padding-y': '8px',
    'button-padding-x-lg': '24px',
    'button-padding-y-lg': '12px',
  },

  // Card spacing
  card: {
    'padding-sm': '12px',
    'padding-md': '16px',
    'padding-lg': '24px',
    'padding-xl': '32px',
    'gap': '16px',
    'header-gap': '8px',
    'content-gap': '12px',
    'footer-gap': '16px',
  },

  // Modal and overlay spacing
  modal: {
    'padding': '24px',
    'mobile-padding': '16px',
    'gap': '16px',
    'header-gap': '12px',
    'footer-gap': '16px',
  },

  // Navigation spacing
  navigation: {
    'item-padding-x': '16px',
    'item-padding-y': '8px',
    'item-gap': '4px',
    'group-gap': '16px',
    'mobile-item-padding': '12px',
  },

  // Taxi-specific spacing
  taxi: {
    // Ride request card spacing
    'ride-card-padding': '16px',
    'ride-card-gap': '12px',
    'ride-info-gap': '8px',
    
    // Driver status spacing
    'status-indicator-size': '12px',
    'status-gap': '8px',
    
    // Map interface spacing
    'map-control-margin': '16px',
    'map-button-size': '48px',
    'map-fab-margin': '24px',
    
    // Fare display spacing
    'fare-padding': '12px',
    'fare-gap': '4px',
    
    // Vehicle info spacing
    'vehicle-card-padding': '16px',
    'vehicle-info-gap': '8px',
  },
} as const;

// Breakpoint-specific spacing adjustments
export const responsiveSpacing = {
  mobile: {
    'container-padding': spacing.semantic['container-sm'],
    'section-gap': spacing.semantic['section-sm'],
    'card-padding': spacing.card['padding-sm'],
    'modal-padding': spacing.modal['mobile-padding'],
  },
  tablet: {
    'container-padding': spacing.semantic['container-md'],
    'section-gap': spacing.semantic['section-md'],
    'card-padding': spacing.card['padding-md'],
    'modal-padding': spacing.modal.padding,
  },
  desktop: {
    'container-padding': spacing.semantic['container-lg'],
    'section-gap': spacing.semantic['section-lg'],
    'card-padding': spacing.card['padding-lg'],
    'modal-padding': spacing.modal.padding,
  },
} as const;

// Utility functions
export const getSpacing = (size: keyof typeof spacing): string => {
  return spacing[size];
};

export const getSemanticSpacing = (semantic: keyof typeof spacing.semantic): string => {
  return spacing.semantic[semantic];
};

export const getTouchTargetSize = (size: keyof typeof spacing.touch): string => {
  return spacing.touch[size];
};

export const getDashboardSpacing = (element: keyof typeof spacing.dashboard): string => {
  return spacing.dashboard[element];
};

export const getResponsiveSpacing = (
  element: keyof typeof responsiveSpacing.mobile,
  breakpoint: keyof typeof responsiveSpacing
): string => {
  return responsiveSpacing[breakpoint][element];
};

// Grid system spacing
export const grid = {
  columns: 12,
  gutter: {
    xs: spacing[2], // 8px
    sm: spacing[4], // 16px
    md: spacing[6], // 24px
    lg: spacing[8], // 32px
  },
  container: {
    xs: '100%',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  breakpoints: {
    xs: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// Export individual spacing categories
export const {
  semantic,
  touch,
  dashboard,
  form,
  card,
  modal,
  navigation,
  taxi,
} = spacing;
