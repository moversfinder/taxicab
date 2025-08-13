/**
 * Taxicab Design System - UI Components
 * 
 * This file exports all UI components for easy importing.
 */

// Base UI Components
export * from './button'
export * from './card'
export * from './input'
export * from './badge'

// Re-export commonly used components with aliases
export { 
  Button as TaxiButton,
  TaxiButton as PrimaryButton,
  AcceptRideButton,
  DeclineRideButton,
  EmergencyButton
} from './button'

export {
  Card as TaxiCard,
  StatCard,
  RideRequestCard
} from './card'

export {
  Input as TaxiInput,
  SearchInput,
  LocationInput,
  PhoneInput
} from './input'

export {
  Badge as TaxiBadge,
  StatusBadge,
  RideStatusBadge,
  PaymentMethodBadge,
  PriorityBadge
} from './badge'
