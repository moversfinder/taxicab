import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // Taxi-specific variants
        "taxi-primary": "border-transparent bg-taxi-yellow-500 text-taxi-black-900 hover:bg-taxi-yellow-600",
        "taxi-outline": "border-taxi-yellow-500 text-taxi-yellow-600 bg-transparent",
        // Status variants
        success: "border-transparent bg-success-500 text-white",
        warning: "border-transparent bg-warning-500 text-taxi-black-900",
        error: "border-transparent bg-error-500 text-white",
        info: "border-transparent bg-info-500 text-white",
        // Driver status variants
        online: "border-transparent bg-success-500 text-white",
        offline: "border-transparent bg-neutral-400 text-white",
        busy: "border-transparent bg-warning-500 text-taxi-black-900",
        emergency: "border-transparent bg-error-500 text-white animate-pulse",
        // Ride status variants
        "ride-requested": "border-transparent bg-info-500 text-white",
        "ride-accepted": "border-transparent bg-success-500 text-white",
        "ride-in-progress": "border-transparent bg-warning-500 text-taxi-black-900",
        "ride-completed": "border-transparent bg-success-600 text-white",
        "ride-cancelled": "border-transparent bg-error-500 text-white",
        // Payment method variants
        cash: "border-transparent bg-success-100 text-success-800 border-success-200",
        card: "border-transparent bg-info-100 text-info-800 border-info-200",
        ecocash: "border-transparent bg-pink-100 text-pink-800 border-pink-200",
        onemoney: "border-transparent bg-purple-100 text-purple-800 border-purple-200",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
        xl: "px-4 py-1.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
  removable?: boolean
  onRemove?: () => void
}

function Badge({ 
  className, 
  variant, 
  size, 
  icon, 
  removable = false,
  onRemove,
  children,
  ...props 
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
      {removable && onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:bg-black/10 rounded-full p-0.5 transition-colors"
          type="button"
        >
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}

// Specialized badge components for taxi platform
export interface StatusBadgeProps extends Omit<BadgeProps, 'variant'> {
  status: 'online' | 'offline' | 'busy' | 'emergency'
}

const StatusBadge = React.forwardRef<HTMLDivElement, StatusBadgeProps>(
  ({ status, className, ...props }, ref) => {
    const statusIcons = {
      online: '🟢',
      offline: '⚫',
      busy: '🟡',
      emergency: '🚨',
    }
    
    const statusLabels = {
      online: 'Online',
      offline: 'Offline',
      busy: 'Busy',
      emergency: 'Emergency',
    }
    
    return (
      <Badge
        ref={ref}
        variant={status}
        icon={statusIcons[status]}
        className={className}
        {...props}
      >
        {statusLabels[status]}
      </Badge>
    )
  }
)
StatusBadge.displayName = "StatusBadge"

export interface RideStatusBadgeProps extends Omit<BadgeProps, 'variant'> {
  status: 'ride-requested' | 'ride-accepted' | 'ride-in-progress' | 'ride-completed' | 'ride-cancelled'
}

const RideStatusBadge = React.forwardRef<HTMLDivElement, RideStatusBadgeProps>(
  ({ status, className, ...props }, ref) => {
    const statusLabels = {
      'ride-requested': 'Requested',
      'ride-accepted': 'Accepted',
      'ride-in-progress': 'In Progress',
      'ride-completed': 'Completed',
      'ride-cancelled': 'Cancelled',
    }
    
    return (
      <Badge
        ref={ref}
        variant={status}
        className={className}
        {...props}
      >
        {statusLabels[status]}
      </Badge>
    )
  }
)
RideStatusBadge.displayName = "RideStatusBadge"

export interface PaymentMethodBadgeProps extends Omit<BadgeProps, 'variant'> {
  method: 'cash' | 'card' | 'ecocash' | 'onemoney'
}

const PaymentMethodBadge = React.forwardRef<HTMLDivElement, PaymentMethodBadgeProps>(
  ({ method, className, ...props }, ref) => {
    const methodIcons = {
      cash: '💵',
      card: '💳',
      ecocash: '📱',
      onemoney: '📱',
    }
    
    const methodLabels = {
      cash: 'Cash',
      card: 'Card',
      ecocash: 'EcoCash',
      onemoney: 'OneMoney',
    }
    
    return (
      <Badge
        ref={ref}
        variant={method}
        icon={methodIcons[method]}
        className={className}
        {...props}
      >
        {methodLabels[method]}
      </Badge>
    )
  }
)
PaymentMethodBadge.displayName = "PaymentMethodBadge"

export interface PriorityBadgeProps extends Omit<BadgeProps, 'variant'> {
  priority: 'low' | 'normal' | 'high' | 'urgent'
}

const PriorityBadge = React.forwardRef<HTMLDivElement, PriorityBadgeProps>(
  ({ priority, className, ...props }, ref) => {
    const priorityVariants = {
      low: 'secondary',
      normal: 'outline',
      high: 'warning',
      urgent: 'error',
    } as const
    
    const priorityLabels = {
      low: 'Low',
      normal: 'Normal',
      high: 'High',
      urgent: 'Urgent',
    }
    
    return (
      <Badge
        ref={ref}
        variant={priorityVariants[priority]}
        className={cn(
          priority === 'urgent' && 'animate-pulse',
          className
        )}
        {...props}
      >
        {priorityLabels[priority]}
      </Badge>
    )
  }
)
PriorityBadge.displayName = "PriorityBadge"

export { 
  Badge, 
  StatusBadge, 
  RideStatusBadge, 
  PaymentMethodBadge, 
  PriorityBadge,
  badgeVariants 
}
