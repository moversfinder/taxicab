/**
 * Basic Usage Example - Taxicab Design System
 * 
 * This example demonstrates how to use the core components
 * of the Taxicab Design System in a typical application.
 */

import React from 'react'
import {
  // Layout Components
  AdminDashboardLayout,
  DriverDashboardLayout,
  
  // UI Components
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  SearchInput,
  LocationInput,
  
  // Badges
  StatusBadge,
  PaymentMethodBadge,
  RideStatusBadge,
  
  // Taxi Components
  DriverStatusCard,
  EarningsDisplay,
  RideRequestCard,
  StatCard,
  
  // Specialized Buttons
  AcceptRideButton,
  DeclineRideButton,
  EmergencyButton,
} from '../src'

// Example: Admin Dashboard
export function AdminDashboardExample() {
  return (
    <AdminDashboardLayout
      user={{
        name: "Admin User",
        email: "admin@taxicab.co.zw"
      }}
      notifications={5}
    >
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Active Drivers"
            value="142"
            subtitle="12 more than yesterday"
            trend={{ value: 8.5, isPositive: true }}
            icon={<span className="text-2xl">🚗</span>}
          />
          <StatCard
            title="Total Rides Today"
            value="1,247"
            subtitle="Last updated 2 min ago"
            trend={{ value: 12.3, isPositive: true }}
            icon={<span className="text-2xl">📍</span>}
          />
          <StatCard
            title="Revenue Today"
            value="$3,456"
            subtitle="Target: $4,000"
            trend={{ value: 5.2, isPositive: false }}
            icon={<span className="text-2xl">💰</span>}
          />
          <StatCard
            title="Customer Satisfaction"
            value="4.8"
            subtitle="Out of 5.0"
            trend={{ value: 2.1, isPositive: true }}
            icon={<span className="text-2xl">⭐</span>}
          />
        </div>
        
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <StatusBadge status="online" />
                  <span>Driver John Doe went online</span>
                </div>
                <span className="text-sm text-muted-foreground">2 min ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <RideStatusBadge status="ride-completed" />
                  <span>Ride #1247 completed successfully</span>
                </div>
                <span className="text-sm text-muted-foreground">5 min ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <PaymentMethodBadge method="ecocash" />
                  <span>Payment processed via EcoCash</span>
                </div>
                <span className="text-sm text-muted-foreground">8 min ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminDashboardLayout>
  )
}

// Example: Driver Dashboard
export function DriverDashboardExample() {
  return (
    <DriverDashboardLayout
      driverName="John Doe"
      status="online"
      earnings={45.50}
    >
      <div className="space-y-6">
        {/* Driver Status */}
        <DriverStatusCard
          driverName="John Doe"
          status="online"
          earnings={{ today: 45.50, thisWeek: 320.75 }}
          ridesCompleted={{ today: 8, thisWeek: 42 }}
          onStatusChange={(status) => console.log('Status changed:', status)}
          onEmergency={() => console.log('Emergency activated')}
        />
        
        {/* Ride Requests */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Incoming Ride Requests</h2>
          
          <RideRequestCard
            pickup="Harare CBD, Jason Moyo Avenue"
            destination="Avondale Shopping Centre"
            fare={12.50}
            distance="5.2km"
            duration="15min"
            paymentMethod="EcoCash"
            onAccept={() => console.log('Ride accepted')}
            onDecline={() => console.log('Ride declined')}
            onViewRoute={() => console.log('View route')}
          />
          
          <RideRequestCard
            pickup="University of Zimbabwe"
            destination="Borrowdale Village"
            fare={18.75}
            distance="8.1km"
            duration="22min"
            paymentMethod="Cash"
            onAccept={() => console.log('Ride accepted')}
            onDecline={() => console.log('Ride declined')}
            onViewRoute={() => console.log('View route')}
          />
        </div>
        
        {/* Earnings Display */}
        <EarningsDisplay
          title="Weekly Earnings"
          earnings={[
            { amount: 45.50, period: "Today", change: { value: 12.5, isPositive: true } },
            { amount: 320.75, period: "This Week", change: { value: 8.2, isPositive: true } },
            { amount: 1250.30, period: "This Month", change: { value: 15.7, isPositive: true } },
          ]}
        />
      </div>
    </DriverDashboardLayout>
  )
}

// Example: Component Showcase
export function ComponentShowcase() {
  return (
    <div className="p-8 space-y-8 bg-background">
      <h1 className="text-3xl font-bold text-foreground">Taxicab Design System Components</h1>
      
      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="taxi">Taxi Primary</Button>
          <Button variant="taxi-outline">Taxi Outline</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="error">Error</Button>
          <AcceptRideButton />
          <DeclineRideButton />
          <EmergencyButton />
        </div>
      </section>
      
      {/* Inputs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <Input placeholder="Regular input" />
          <SearchInput placeholder="Search locations..." />
          <LocationInput placeholder="Enter pickup location" currentLocation />
          <Input variant="taxi-primary" placeholder="Taxi themed input" />
        </div>
      </section>
      
      {/* Badges */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <StatusBadge status="online" />
          <StatusBadge status="offline" />
          <StatusBadge status="busy" />
          <StatusBadge status="emergency" />
          <PaymentMethodBadge method="cash" />
          <PaymentMethodBadge method="ecocash" />
          <PaymentMethodBadge method="onemoney" />
          <RideStatusBadge status="ride-in-progress" />
          <RideStatusBadge status="ride-completed" />
        </div>
      </section>
      
      {/* Cards */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="taxi-primary">
            <CardHeader>
              <CardTitle>Taxi Primary Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is a taxi-themed card with yellow accent.</p>
            </CardContent>
          </Card>
          
          <Card variant="taxi-success">
            <CardHeader>
              <CardTitle>Success Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Used for successful operations and confirmations.</p>
            </CardContent>
          </Card>
          
          <Card variant="taxi-warning">
            <CardHeader>
              <CardTitle>Warning Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Used for warnings and important notices.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default ComponentShowcase
