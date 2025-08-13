# 🚖 Taxicab Platform

[[!License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[[TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://typescriptlang.org)
[[React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org)
[[React Native](https://img.shields.io/badge/React_Native-20232A?logo=react&logoColor=61DAFB)](https://reactnative.dev)
[[Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com)

A comprehensive ride-hailing platform designed specifically for the Zimbabwean market, featuring taxi association integration, multi-platform support, and robust real-time capabilities.

## 🌟 **Key Features**

- **🚁 Multi-Platform Support**: Web admin dashboard + iOS/Android mobile apps
- **🏢 Taxi Association Integration**: Driver company selection and commission management
- **℡ Real-Time Operations**: Live ride tracking, driver locations, instant notifications
- **💼 Corporate Billing**: Enterprise features for business clients
- **💬 Driver Community**: In-app chat and community features for drivers
- **💳 Local Payment Integration**: EcoCash, OneMoney, and card payments
- **📊 Comprehensive Analytics**: Detailed reporting and business intelligence

## 🛠️ **Technology Stack**

- **Frontend**: React 18+ with TypeScript, Shadcn UI, Tailwind CSS
- **Mobile**: React Native with TypeScript (iOS & Android)
- **Backend**: Supabase (PostgreSQL, Auth, Real-time, Edge Functions)
- **State Management**: Zustand + React Query
- **Testing**: Jest, Playwright, Detox, K6
- **Deployment**: Vercel, App Store, Google Play Store

## 📁 **Project Structure**

```
taxicab-platform/
├── apps/
│   ├── admin-dashboard/     # React admin web application
│   ├── passenger-app/       # React Native passenger mobile app
│   └── driver-app/          # React Native driver mobile app
├── packages/
│   ├── api-client/          # Shared API client library
│   ├── design-system/       # UI components and design tokens
│   ├── shared-types/        # TypeScript type definitions
│   └── shared-utils/        # Utility functions and helpers
├── supabase/
│   ├── migrations/          # Database migrations
│   ├── functions/           # Edge Functions
│   └── seed.sql            # Database seed data
├── docs/                   # Complete implementation documentation
└── tests/                  # Integration and E2E tests
```

## 🚀 **Quick Start**

### **Prerequisites**

- Node.js 18+ and npm
- Git
- Supabase account
- React Native development environment (for mobile apps)
- Google Maps API key

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/moversfinder/taxicab.git
cd taxicab
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment setup**
```bash
# Copy environment templates
cp .env.example .env.local
cp apps/admin-dashboard/.env.example apps/admin-dashboard/.env.local
cp apps/passenger-app/.env.example apps/passenger-app/.env.local
cp apps/driver-app/.env.example apps/driver-app/.env.local

# Configure your environment variables
# - Supabase URL and keys
# - Google Maps API key
# - Payment gateway credentials
```

4. **Database setup**
```bash
# Start Supabase locally (optional for development)
npm run supabase:start

# Run migrations
npm run db:migrate

# Seed initial data
npm run db:seed
```

5. **Start development servers**
```bash
# Start all applications
npm run dev

# Or start individually
npm run dev:admin      # Admin dashboard at http://localhost:3000
npm run dev:passenger  # Passenger mobile app
npm run dev:driver     # Driver mobile app
```

## 📖 **Documentation**

Comprehensive implementation documentation is available in the [`docs/`](./docs/) directory:

### **Implementation Phases**
1. **[Project Foundation](./docs/1_project_foundation/)** - Setup and architecture
2. **[Database Schema](./docs/2_database_schema/)** - Database design and configuration
3. **[Core Features](./docs/3_core_features/)** - User management, rides, payments
4. **[Backend Implementation](./docs/4_backend_implementation/)** - API and business logic
5. **[Frontend Implementation](./docs/5_frontend_implementation/)** - Web and mobile apps
6. **[Integration & Testing](./docs/6_integration_testing/)** - Testing strategies
7. **[Deployment & Operations](./docs/7_deployment_operations/)** - Production deployment

### **Quick Links**
- **[Complete Implementation Guide](./docs/README.md)** - Start here for full overview
- **[Implementation Summary](./docs/IMPLEMENTATION_SUMMARY,�d)** - Project completion status
- **[Database Schema](./docs/2_database_schema/1_database_schema_design.md)** - Database design
- **[API Documentation](./docs/4_backend_implementation/3_api_development.md)** - API endpoints
- **[Deployment Guide](./docs/7_deployment_operations/1_production_deployment.md)** - Production setup

## 🧪 **Testing**

```bash
# Run all tests
npm run test

# Run tests in CI mode
npm run test:ci

# Run end-to-end tests
npm run test:e2e

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🚀 **Deployment**

### **Web Application (Admin Dashboard)**
- Deployed to Vercel
- Automatic deployments from main branch
- Environment variables configured in Vercel dashboard

### **Mobile Applications**
- **iOS**: Deployed to App Store via Fastlane
- **Android**: Deployed to Google Play Store via Fastlane
- CI/CD pipelines handle automated builds and deployments

### **Database & Backend**
- Supabase handles database hosting and API
- Edge Functions deployed automatically
- Environment-specific configurations

## 🤫 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Development Guidelines**
- Follow TypeScript best practices
- Write tests for new features
- Update documentation as needed
- Follow the existing code style and conventions

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- Built with [Supabase](https://supabase.com) for backend infrastructure
- UI components from [Shadcn UI](https://ui.shadcn.com)
- Icons from [Lucide React](https://lucide.dev)
- Maps powered by [Google Maps](https://developers.google.com/maps)

## 📞 **Support**

- **Documentation**: Check the [docs/](./docs/) directory for comprehensive guides
- **Issues**: Report bugs and request features via [GitHub Issues](https://github.com/moversfinder/taxicab/issues)
- **Discussions**: Join community discussions in [GitHub Discussions](https://github.com/moversfinder/taxicab/discussions)

---

**🇺🇷 Built for Zimbabwe's transportation future**

*This platform represents a complete, production-ready solution for building Zimbabwe's premier ride-hailing service with modern technology and local market focus.*