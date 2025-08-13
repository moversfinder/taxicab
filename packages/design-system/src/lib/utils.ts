import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format currency for display in the taxi platform
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Format distance for display
 */
export function formatDistance(distanceInKm: number): string {
  if (distanceInKm < 1) {
    return `${Math.round(distanceInKm * 1000)}m`
  }
  return `${distanceInKm.toFixed(1)}km`
}

/**
 * Format duration for display
 */
export function formatDuration(durationInMinutes: number): string {
  if (durationInMinutes < 60) {
    return `${Math.round(durationInMinutes)}min`
  }
  const hours = Math.floor(durationInMinutes / 60)
  const minutes = Math.round(durationInMinutes % 60)
  return `${hours}h ${minutes}min`
}

/**
 * Validate email address
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (Zimbabwe format)
 */
export function validateZimbabwePhone(phone: string): boolean {
  // Zimbabwe phone number patterns
  const patterns = [
    /^(\+263|263|0)(7[1-9]|8[6-9])\d{7}$/, // Mobile numbers
    /^(\+263|263|0)(24|25|26|27|28|29)\d{6}$/, // Landline numbers
  ]
  return patterns.some(pattern => pattern.test(phone.replace(/\s/g, '')))
}

/**
 * Generate initials from a name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')
}

/**
 * Calculate ride fare based on distance and time
 */
export function calculateFare(
  distanceKm: number,
  durationMinutes: number,
  ratePerKm: number = 2.5,
  ratePerMinute: number = 0.5,
  baseFare: number = 5
): number {
  const distanceFare = distanceKm * ratePerKm
  const timeFare = durationMinutes * ratePerMinute
  return baseFare + distanceFare + timeFare
}

/**
 * Get status color class based on status
 */
export function getStatusColorClass(status: string): string {
  const statusColors: Record<string, string> = {
    online: 'bg-success-500',
    offline: 'bg-neutral-400',
    busy: 'bg-warning-500',
    emergency: 'bg-error-500',
    'ride-requested': 'bg-info-500',
    'ride-accepted': 'bg-success-500',
    'ride-completed': 'bg-success-600',
    'ride-cancelled': 'bg-error-500',
  }
  return statusColors[status] || 'bg-neutral-400'
}

/**
 * Get payment method icon and color
 */
export function getPaymentMethodInfo(method: string): { icon: string; color: string } {
  const paymentMethods: Record<string, { icon: string; color: string }> = {
    cash: { icon: '💵', color: 'text-success-600' },
    card: { icon: '💳', color: 'text-info-600' },
    ecocash: { icon: '📱', color: 'text-pink-600' },
    onemoney: { icon: '📱', color: 'text-purple-600' },
  }
  return paymentMethods[method] || { icon: '💰', color: 'text-neutral-600' }
}

/**
 * Debounce function for search inputs
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Throttle function for scroll events
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Generate a random ID
 */
export function generateId(prefix: string = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Check if device is mobile
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

/**
 * Check if device is tablet
 */
export function isTablet(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 768 && window.innerWidth < 1024
}

/**
 * Check if device is desktop
 */
export function isDesktop(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 1024
}

/**
 * Format time for display (24-hour format)
 */
export function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

/**
 * Format date for display
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

/**
 * Calculate time ago
 */
export function timeAgo(date: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) return 'Just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`
  
  return formatDate(date)
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - 3) + '...'
}

/**
 * Capitalize first letter of each word
 */
export function capitalizeWords(text: string): string {
  return text.replace(/\b\w/g, char => char.toUpperCase())
}
