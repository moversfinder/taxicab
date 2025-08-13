import * as React from "react"
import { cn } from "../../lib/utils"

export interface DashboardLayoutProps {
  children: React.ReactNode
  sidebar?: React.ReactNode
  header?: React.ReactNode
  className?: string
}

export const DashboardLayout = React.forwardRef<HTMLDivElement, DashboardLayoutProps>(
  ({ children, sidebar, header, className, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn("min-h-screen bg-background", className)}
        {...props}
      >
        {/* Header */}
        {header && (
          <header className="dashboard-header">
            {header}
          </header>
        )}
        
        <div className="flex flex-1">
          {/* Sidebar */}
          {sidebar && (
            <aside className="dashboard-sidebar">
              {sidebar}
            </aside>
          )}
          
          {/* Main Content */}
          <main className="dashboard-main">
            <div className="dashboard-content">
              {children}
            </div>
          </main>
        </div>
      </div>
    )
  }
)

DashboardLayout.displayName = "DashboardLayout"

// Specialized dashboard layouts
export interface AdminDashboardLayoutProps extends DashboardLayoutProps {
  user?: {
    name: string
    email: string
    avatar?: string
  }
  notifications?: number
}

export const AdminDashboardLayout = React.forwardRef<HTMLDivElement, AdminDashboardLayoutProps>(
  ({ user, notifications, children, ...props }, ref) => {
    const header = (
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-foreground">
            Taxicab Admin Dashboard
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          {notifications && notifications > 0 && (
            <button className="relative p-2 text-muted-foreground hover:text-foreground">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.5L6 8h4v12l4.5-4.5" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-error-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notifications}
              </span>
            </button>
          )}
          
          {/* User Menu */}
          {user && (
            <div className="flex items-center space-x-2">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
              <div className="w-8 h-8 bg-taxi-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-taxi-black-900">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    )
    
    const sidebar = (
      <nav className="p-4 space-y-2">
        <div className="mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-taxi-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-taxi-black-900 font-bold">T</span>
            </div>
            <span className="text-lg font-semibold text-foreground">Taxicab</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted">
            <span>📊</span>
            <span>Overview</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
            <span>🚗</span>
            <span>Drivers</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
            <span>👥</span>
            <span>Clients</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
            <span>🏢</span>
            <span>Companies</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
            <span>📋</span>
            <span>Requests</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
            <span>📈</span>
            <span>Analytics</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
            <span>⚙️</span>
            <span>Settings</span>
          </a>
        </div>
      </nav>
    )
    
    return (
      <DashboardLayout
        ref={ref}
        header={header}
        sidebar={sidebar}
        {...props}
      >
        {children}
      </DashboardLayout>
    )
  }
)

AdminDashboardLayout.displayName = "AdminDashboardLayout"

export interface DriverDashboardLayoutProps extends DashboardLayoutProps {
  driverName?: string
  status?: 'online' | 'offline' | 'busy'
  earnings?: number
}

export const DriverDashboardLayout = React.forwardRef<HTMLDivElement, DriverDashboardLayoutProps>(
  ({ driverName, status = 'offline', earnings = 0, children, ...props }, ref) => {
    const header = (
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-taxi-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-taxi-black-900 font-bold">T</span>
            </div>
            <span className="text-lg font-semibold text-foreground">Taxicab Driver</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Status Indicator */}
          <div className="flex items-center space-x-2">
            <div className={cn(
              "w-3 h-3 rounded-full",
              status === 'online' && "bg-success-500",
              status === 'offline' && "bg-neutral-400",
              status === 'busy' && "bg-warning-500"
            )} />
            <span className="text-sm font-medium capitalize">{status}</span>
          </div>
          
          {/* Earnings */}
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Today's Earnings</p>
            <p className="text-lg font-bold text-taxi-yellow-600">${earnings.toFixed(2)}</p>
          </div>
          
          {/* Driver Info */}
          {driverName && (
            <div className="w-8 h-8 bg-taxi-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-taxi-black-900">
                {driverName.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>
    )
    
    return (
      <DashboardLayout
        ref={ref}
        header={header}
        {...props}
      >
        {children}
      </DashboardLayout>
    )
  }
)

DriverDashboardLayout.displayName = "DriverDashboardLayout"
