import * as React from "react"
import { Card, CardContent, CardHeader } from "../ui/card"
import { StatusBadge } from "../ui/badge"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

export interface DriverStatusCardProps {
  driverName: string
  status: 'online' | 'offline' | 'busy' | 'emergency'
  earnings: {
    today: number
    thisWeek: number
  }
  ridesCompleted: {
    today: number
    thisWeek: number
  }
  onStatusChange?: (newStatus: 'online' | 'offline' | 'busy') => void
  onEmergency?: () => void
  className?: string
}

export const DriverStatusCard = React.forwardRef<HTMLDivElement, DriverStatusCardProps>(
  ({ 
    driverName, 
    status, 
    earnings, 
    ridesCompleted, 
    onStatusChange, 
    onEmergency,
    className,
    ...props 
  }, ref) => {
    const [currentStatus, setCurrentStatus] = React.useState(status)
    
    const handleStatusToggle = () => {
      if (currentStatus === 'online') {
        setCurrentStatus('offline')
        onStatusChange?.('offline')
      } else {
        setCurrentStatus('online')
        onStatusChange?.('online')
      }
    }
    
    const handleBusyToggle = () => {
      if (currentStatus === 'busy') {
        setCurrentStatus('online')
        onStatusChange?.('online')
      } else {
        setCurrentStatus('busy')
        onStatusChange?.('busy')
      }
    }
    
    return (
      <Card 
        ref={ref}
        variant="driver-status"
        className={cn("w-full", className)}
        {...props}
      >
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Welcome, {driverName}
              </h3>
              <p className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString('en-GB', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <StatusBadge status={currentStatus} />
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Earnings Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Today's Earnings</p>
              <p className="text-2xl font-bold text-taxi-yellow-600">
                ${earnings.today.toFixed(2)}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">This Week</p>
              <p className="text-2xl font-bold text-foreground">
                ${earnings.thisWeek.toFixed(2)}
              </p>
            </div>
          </div>
          
          {/* Rides Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Rides Today</p>
              <p className="text-xl font-semibold text-foreground">
                {ridesCompleted.today}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">This Week</p>
              <p className="text-xl font-semibold text-foreground">
                {ridesCompleted.thisWeek}
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <Button
                variant={currentStatus === 'online' ? 'success' : 'taxi'}
                size="touch-friendly"
                onClick={handleStatusToggle}
                className="flex-1"
              >
                {currentStatus === 'online' ? '🟢 Go Offline' : '🔴 Go Online'}
              </Button>
              
              {currentStatus === 'online' && (
                <Button
                  variant={currentStatus === 'busy' ? 'outline' : 'warning'}
                  size="touch-friendly"
                  onClick={handleBusyToggle}
                  className="flex-1"
                >
                  {currentStatus === 'busy' ? 'Available' : 'Busy'}
                </Button>
              )}
            </div>
            
            <Button
              variant="error"
              size="touch-friendly"
              onClick={onEmergency}
              className="w-full"
            >
              🚨 Emergency
            </Button>
          </div>
          
          {/* Status Messages */}
          <div className="p-3 rounded-md bg-muted/50">
            {currentStatus === 'online' && (
              <p className="text-sm text-success-700">
                ✅ You're online and ready to receive ride requests
              </p>
            )}
            {currentStatus === 'offline' && (
              <p className="text-sm text-muted-foreground">
                ⏸️ You're offline. Go online to start receiving requests
              </p>
            )}
            {currentStatus === 'busy' && (
              <p className="text-sm text-warning-700">
                ⏳ You're marked as busy. New requests are paused
              </p>
            )}
            {currentStatus === 'emergency' && (
              <p className="text-sm text-error-700 font-medium">
                🚨 Emergency mode activated. Help is on the way
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }
)

DriverStatusCard.displayName = "DriverStatusCard"
