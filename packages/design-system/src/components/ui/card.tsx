import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      variant: {
        default: "border-border",
        elevated: "shadow-md hover:shadow-lg transition-shadow duration-200",
        outlined: "border-2 border-border",
        filled: "bg-muted/50",
        // Taxi-specific variants
        "taxi-primary": "border-l-4 border-l-taxi-yellow-500 bg-white shadow-sm hover:shadow-md transition-shadow duration-200",
        "taxi-success": "border-l-4 border-l-success-500 bg-success-50",
        "taxi-warning": "border-l-4 border-l-warning-500 bg-warning-50",
        "taxi-error": "border-l-4 border-l-error-500 bg-error-50",
        "ride-request": "border border-taxi-yellow-200 bg-taxi-yellow-50 hover:bg-taxi-yellow-100 transition-colors duration-200",
        "driver-status": "bg-white border border-gray-200 shadow-sm",
        "earnings": "bg-gradient-to-br from-taxi-yellow-50 to-taxi-yellow-100 border border-taxi-yellow-200",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        xl: "p-10",
        // Taxi-specific sizes
        compact: "p-3",
        "mobile-friendly": "p-4 min-h-[80px]", // Better touch targets on mobile
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, size, className }))}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// Specialized taxi card components
export interface StatCardProps extends CardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: React.ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ title, value, subtitle, icon, trend, className, ...props }, ref) => (
    <Card
      ref={ref}
      variant="taxi-primary"
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {title}
            </p>
            <p className="text-3xl font-bold text-foreground">
              {value}
            </p>
            {subtitle && (
              <p className="text-sm text-muted-foreground">
                {subtitle}
              </p>
            )}
            {trend && (
              <div className={cn(
                "flex items-center text-sm font-medium",
                trend.isPositive ? "text-success-600" : "text-error-600"
              )}>
                <span className="mr-1">
                  {trend.isPositive ? "↗" : "↘"}
                </span>
                {Math.abs(trend.value)}%
              </div>
            )}
          </div>
          {icon && (
            <div className="text-taxi-yellow-500 opacity-80">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
)
StatCard.displayName = "StatCard"

export interface RideRequestCardProps extends CardProps {
  pickup: string
  destination: string
  fare: number
  distance: string
  duration: string
  paymentMethod: string
  onAccept?: () => void
  onDecline?: () => void
  onViewRoute?: () => void
}

const RideRequestCard = React.forwardRef<HTMLDivElement, RideRequestCardProps>(
  ({ 
    pickup, 
    destination, 
    fare, 
    distance, 
    duration, 
    paymentMethod,
    onAccept,
    onDecline,
    onViewRoute,
    className, 
    ...props 
  }, ref) => (
    <Card
      ref={ref}
      variant="ride-request"
      className={cn("w-full", className)}
      {...props}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-lg">${fare}</CardTitle>
            <CardDescription>{distance} • {duration}</CardDescription>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            💳 {paymentMethod}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success-500 rounded-full"></div>
            <p className="text-sm font-medium truncate">{pickup}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-error-500 rounded-full"></div>
            <p className="text-sm font-medium truncate">{destination}</p>
          </div>
        </div>
      </CardContent>
      
      {(onAccept || onDecline || onViewRoute) && (
        <CardFooter className="flex gap-2 pt-4">
          {onDecline && (
            <button
              onClick={onDecline}
              className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Decline
            </button>
          )}
          {onViewRoute && (
            <button
              onClick={onViewRoute}
              className="flex-1 px-3 py-2 text-sm font-medium text-taxi-yellow-700 bg-taxi-yellow-50 border border-taxi-yellow-200 rounded-md hover:bg-taxi-yellow-100 transition-colors"
            >
              View Route
            </button>
          )}
          {onAccept && (
            <button
              onClick={onAccept}
              className="flex-1 px-3 py-2 text-sm font-medium text-taxi-black-900 bg-taxi-yellow-500 rounded-md hover:bg-taxi-yellow-600 transition-colors"
            >
              Accept
            </button>
          )}
        </CardFooter>
      )}
    </Card>
  )
)
RideRequestCard.displayName = "RideRequestCard"

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  StatCard,
  RideRequestCard,
  cardVariants 
}
