# Taxicab Design System

A comprehensive design system for the Taxicab ride-hailing platform, built with React, TypeScript, and Tailwind CSS. This design system provides a consistent, accessible, and scalable foundation for all Taxicab applications.

## 🎨 Design Philosophy

The Taxicab Design System is built around the core principles of:

- **Accessibility First**: WCAG 2.1 AA compliant components
- **Mobile Optimized**: Touch-friendly interfaces for Zimbabwe's mobile-first market
- **Taxi Industry Focus**: Purpose-built components for ride-hailing workflows
- **Local Context**: Optimized for Zimbabwe's infrastructure and user preferences

## 🚀 Quick Start

### Installation

```bash
npm install @taxicab/design-system
```

### Basic Usage

```tsx
import { Button, Card, StatusBadge } from '@taxicab/design-system'
import '@taxicab/design-system/styles'

function App() {
  return (
    <Card variant="taxi-primary">
      <h1>Welcome to Taxicab</h1>
      <StatusBadge status="online" />
      <Button variant="taxi">Book a Ride</Button>
    </Card>
  )
}
```

## 🎯 Core Features

### Design Tokens
- **Colors**: Taxi yellow, professional black, and semantic colors
- **Typography**: Inter and Poppins fonts with responsive scales
- **Spacing**: 8px base grid system with semantic naming
- **Breakpoints**: Mobile-first responsive design

### UI Components
- **Base Components**: Button, Card, Input, Badge
- **Taxi Components**: DriverStatusCard, EarningsDisplay, RideRequestCard
- **Specialized Inputs**: LocationInput, PhoneInput, SearchInput

### Accessibility Features
- WCAG 2.1 AA compliance
- High contrast mode support
- Screen reader optimization
- Keyboard navigation
- Touch-friendly sizing (44px minimum)

## 📱 Component Examples

### Driver Status Card
```tsx
import { DriverStatusCard } from '@taxicab/design-system'

<DriverStatusCard
  driverName="John Doe"
  status="online"
  earnings={{ today: 45.50, thisWeek: 320.75 }}
  ridesCompleted={{ today: 8, thisWeek: 42 }}
  onStatusChange={(status) => console.log('Status changed:', status)}
  onEmergency={() => console.log('Emergency activated')}
/>
```

### Ride Request Card
```tsx
import { RideRequestCard } from '@taxicab/design-system'

<RideRequestCard
  pickup="Harare CBD"
  destination="Avondale Shopping Centre"
  fare={12.50}
  distance="5.2km"
  duration="15min"
  paymentMethod="EcoCash"
  onAccept={() => console.log('Ride accepted')}
  onDecline={() => console.log('Ride declined')}
/>
```

### Status Badges
```tsx
import { StatusBadge, PaymentMethodBadge, RideStatusBadge } from '@taxicab/design-system'

<StatusBadge status="online" />
<PaymentMethodBadge method="ecocash" />
<RideStatusBadge status="ride-in-progress" />
```

## 🎨 Design Tokens

### Colors
```tsx
import { colors } from '@taxicab/design-system'

// Primary taxi colors
colors.taxi.yellow[500] // #F59E0B
colors.taxi.black[900]  // #111827

// Semantic colors
colors.semantic.success[500] // #10B981
colors.semantic.warning[500] // #F59E0B
colors.semantic.error[500]   // #EF4444

// Status colors
colors.status.online    // #10B981
colors.status.offline   // #6B7280
colors.status.emergency // #EF4444
```

### Typography
```tsx
import { typography } from '@taxicab/design-system'

// Font families
typography.fontFamily.primary  // ['Inter', 'system-ui', 'sans-serif']
typography.fontFamily.heading  // ['Poppins', 'Inter', 'system-ui', 'sans-serif']

// Text styles
typography.textStyles['heading-1']
typography.textStyles['body-medium']
typography.textStyles['fare-display']
```

### Spacing
```tsx
import { spacing } from '@taxicab/design-system'

// Base spacing
spacing[4]  // '16px'
spacing[8]  // '32px'

// Semantic spacing
spacing.semantic['component-lg']  // '16px'
spacing.dashboard['sidebar-width'] // '256px'
spacing.taxi['ride-card-padding'] // '16px'
```

## 🌍 Zimbabwe Market Optimizations

### Mobile-First Design
- Touch-friendly button sizes (minimum 44px)
- Optimized for slower internet connections
- Battery-efficient animations
- Offline-capable components

### Local Payment Methods
- EcoCash integration styling
- OneMoney support
- Cash payment indicators
- Multi-currency support (USD, ZWL)

### Language Support
- English (primary)
- Shona language considerations
- Ndebele language considerations
- RTL language preparation

## 🛠 Development

### Building the Design System

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch for changes during development
npm run dev

# Run tests
npm test

# Type checking
npm run type-check
```

### Using with Tailwind CSS

Add the design system's Tailwind config to your project:

```js
// tailwind.config.js
module.exports = {
  presets: [require('@taxicab/design-system/tailwind.config.js')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@taxicab/design-system/dist/**/*.js',
  ],
}
```

## 📚 Documentation

- [Component Documentation](./docs/components.md)
- [Design Tokens](./docs/tokens.md)
- [Accessibility Guidelines](./docs/accessibility.md)
- [Contributing Guide](./docs/contributing.md)

## 🤝 Contributing

We welcome contributions to the Taxicab Design System! Please read our [Contributing Guide](./docs/contributing.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/moversfinder/taxicab)
- [Design System Documentation](https://taxicab-design-system.vercel.app)
- [Figma Design Files](https://figma.com/taxicab-design-system)
- [Storybook](https://taxicab-storybook.vercel.app)

## 📞 Support

For questions and support, please:
- Open an issue on [GitHub](https://github.com/moversfinder/taxicab/issues)
- Join our [Discord community](https://discord.gg/taxicab)
- Email us at design-system@taxicab.co.zw
