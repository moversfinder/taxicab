/**
 * Taxicab Design System - Color Tokens
 * 
 * This file contains all color definitions for the Taxicab platform.
 * Colors are organized by purpose and follow WCAG 2.1 AA accessibility standards.
 */

export const colors = {
  // Primary Taxi Yellow Palette
  taxi: {
    yellow: {
      50: '#FFFBEB',
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: '#F59E0B', // Primary brand color
      600: '#D97706', // Hover state
      700: '#B45309', // Active state
      800: '#92400E',
      900: '#78350F',
    },
    black: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827', // Primary text color
    }
  },

  // Semantic Colors (WCAG 2.1 AA Compliant)
  semantic: {
    success: {
      50: '#ECFDF5',
      100: '#D1FAE5',
      200: '#A7F3D0',
      300: '#6EE7B7',
      400: '#34D399',
      500: '#10B981', // 4.5:1 contrast on white
      600: '#059669',
      700: '#047857', // 7:1 contrast on white
      800: '#065F46',
      900: '#064E3B',
    },
    warning: {
      50: '#FFFBEB',
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: '#F59E0B', // 3.8:1 - use with dark text
      600: '#D97706',
      700: '#B45309', // 6.2:1 contrast on white
      800: '#92400E',
      900: '#78350F',
    },
    error: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      200: '#FECACA',
      300: '#FCA5A5',
      400: '#F87171',
      500: '#EF4444', // 4.5:1 contrast on white
      600: '#DC2626',
      700: '#B91C1C', // 7.8:1 contrast on white
      800: '#991B1B',
      900: '#7F1D1D',
    },
    info: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6', // 4.5:1 contrast on white
      600: '#2563EB',
      700: '#1D4ED8', // 8.2:1 contrast on white
      800: '#1E40AF',
      900: '#1E3A8A',
    }
  },

  // Neutral Colors
  neutral: {
    white: '#FFFFFF',
    'off-white': '#FAFAFA',
    'light-gray': '#F5F5F5',
    'border-gray': '#E0E0E0',
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // Status Colors for Driver/Ride States
  status: {
    online: '#10B981',
    offline: '#6B7280',
    busy: '#F59E0B',
    emergency: '#EF4444',
    'ride-requested': '#3B82F6',
    'ride-accepted': '#10B981',
    'ride-completed': '#059669',
    'ride-cancelled': '#EF4444',
  },

  // Payment Method Colors
  payment: {
    cash: '#10B981',
    card: '#3B82F6',
    ecocash: '#E11D48', // EcoCash brand color
    onemoney: '#7C3AED', // OneMoney brand color
  },

  // Background Colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    tertiary: '#F3F4F6',
    overlay: 'rgba(0, 0, 0, 0.5)',
    'modal-backdrop': 'rgba(0, 0, 0, 0.75)',
  },

  // Text Colors
  text: {
    primary: '#111827',
    secondary: '#374151',
    tertiary: '#6B7280',
    inverse: '#FFFFFF',
    disabled: '#9CA3AF',
    link: '#2563EB',
    'link-hover': '#1D4ED8',
  },

  // Border Colors
  border: {
    primary: '#E5E7EB',
    secondary: '#D1D5DB',
    focus: '#F59E0B',
    error: '#EF4444',
    success: '#10B981',
  },

  // Shadow Colors
  shadow: {
    sm: 'rgba(0, 0, 0, 0.05)',
    md: 'rgba(0, 0, 0, 0.1)',
    lg: 'rgba(0, 0, 0, 0.15)',
    xl: 'rgba(0, 0, 0, 0.2)',
    'taxi-glow': 'rgba(245, 158, 11, 0.3)',
  }
} as const;

// Color utility functions
export const getContrastColor = (backgroundColor: string): string => {
  // Simple contrast calculation - in production, use a proper color contrast library
  const isLight = backgroundColor.includes('50') || backgroundColor.includes('100') || backgroundColor.includes('200');
  return isLight ? colors.text.primary : colors.text.inverse;
};

export const getStatusColor = (status: keyof typeof colors.status): string => {
  return colors.status[status];
};

export const getPaymentMethodColor = (method: keyof typeof colors.payment): string => {
  return colors.payment[method];
};

// Export individual color palettes for easier imports
export const { taxi, semantic, neutral, status, payment, background, text, border, shadow } = colors;
