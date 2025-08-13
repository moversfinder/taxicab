import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { cn } from "../../lib/utils"

export interface EarningsData {
  amount: number
  period: string
  change?: {
    value: number
    isPositive: boolean
  }
}

export interface EarningsDisplayProps {
  title: string
  earnings: EarningsData[]
  currency?: string
  showTrends?: boolean
  className?: string
}

export const EarningsDisplay = React.forwardRef<HTMLDivElement, EarningsDisplayProps>(
  ({ 
    title, 
    earnings, 
    currency = "USD", 
    showTrends = true,
    className,
    ...props 
  }, ref) => {
    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount)
    }
    
    return (
      <Card 
        ref={ref}
        variant="earnings"
        className={cn("w-full", className)}
        {...props}
      >
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {earnings.map((earning, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-white border border-taxi-yellow-200"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {earning.period}
                </p>
                <p className="text-2xl font-bold text-taxi-yellow-700">
                  {formatCurrency(earning.amount)}
                </p>
                
                {showTrends && earning.change && (
                  <div className={cn(
                    "flex items-center text-sm font-medium",
                    earning.change.isPositive ? "text-success-600" : "text-error-600"
                  )}>
                    <span className="mr-1">
                      {earning.change.isPositive ? "↗" : "↘"}
                    </span>
                    {Math.abs(earning.change.value)}% from last {earning.period.toLowerCase()}
                  </div>
                )}
              </div>
              
              <div className="text-taxi-yellow-500 opacity-60">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          ))}
          
          {/* Summary Section */}
          <div className="pt-4 border-t border-taxi-yellow-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                Total Earnings
              </span>
              <span className="text-lg font-bold text-foreground">
                {formatCurrency(earnings.reduce((sum, earning) => sum + earning.amount, 0))}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
)

EarningsDisplay.displayName = "EarningsDisplay"

// Specialized earnings components
export interface DailyEarningsProps {
  amount: number
  ridesCompleted: number
  hoursWorked: number
  currency?: string
  className?: string
}

export const DailyEarnings = React.forwardRef<HTMLDivElement, DailyEarningsProps>(
  ({ amount, ridesCompleted, hoursWorked, currency = "USD", className, ...props }, ref) => {
    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount)
    }
    
    const averagePerRide = ridesCompleted > 0 ? amount / ridesCompleted : 0
    const averagePerHour = hoursWorked > 0 ? amount / hoursWorked : 0
    
    return (
      <Card 
        ref={ref}
        variant="earnings"
        className={cn("w-full", className)}
        {...props}
      >
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-foreground">
            Today's Performance
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Main Earnings */}
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-taxi-yellow-50 to-taxi-yellow-100">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Total Earnings Today
            </p>
            <p className="text-4xl font-bold text-taxi-yellow-700">
              {formatCurrency(amount)}
            </p>
          </div>
          
          {/* Performance Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 rounded-lg bg-white border border-gray-200">
              <p className="text-2xl font-bold text-foreground">{ridesCompleted}</p>
              <p className="text-sm text-muted-foreground">Rides Completed</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-white border border-gray-200">
              <p className="text-2xl font-bold text-foreground">{hoursWorked.toFixed(1)}h</p>
              <p className="text-sm text-muted-foreground">Hours Worked</p>
            </div>
          </div>
          
          {/* Averages */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <p className="text-lg font-semibold text-foreground">
                {formatCurrency(averagePerRide)}
              </p>
              <p className="text-xs text-muted-foreground">Per Ride</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <p className="text-lg font-semibold text-foreground">
                {formatCurrency(averagePerHour)}
              </p>
              <p className="text-xs text-muted-foreground">Per Hour</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
)

DailyEarnings.displayName = "DailyEarnings"
