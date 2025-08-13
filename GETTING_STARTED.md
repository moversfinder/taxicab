# 🚀 Getting Started with Taxicab Platform

Welcome to the Taxicab platform! This guide will help you get started with development.

## 📁 **Project Overview**

The Taxicab platform is a comprehensive ride-hailing solution designed for Zimbabwe, featuring:

- 🚁 **Multi-Platform**: Web dashboard + iOS/Android apps
- 🏢 **Taxi Association Integration**: Local taxi company support
- ‡ **Real-Time Operations**: Live tracking and notifications
- 💼 **Corporate Beatures**: Business client support
- 💳 **Local Payments**: EcoCash, OneMoney, cards

## 🛠️ **Technology Stack**

- **Frontend**: React 18+ with TypeScript, Shadcn UI
- **Mobile**: React Native with TypeScript
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **State Management**: Zustand + React Query
- **Testing**: Jest, Playwright, Detox, K6
- **Deployment**: Vercel, App Store, Google Play

## 🚀 **Quick Start**

### **1. Prerequisites**

Before you begin, ensure you have:

- Node.js 18+ and npm
- Git
- Supabase account
- Google Maps API key
- React Native development environment (for mobile apps)

### **2. Clone and Install**

```bash
# Clone the repository
git clone https://github.com/moversfinder/taxicab.git
cd taxicab

# Install dependencies
npm install
```

### **3. Environment Setup**

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your configuration:
# - Supabase URL and keys
# - Google Maps API key
# - Payment gateway credentials
```

### **4. Database Setup**

```bash
# Start Supabase locally (optional)
npm run supabase:start

# Run database migrations
npm run db:migrate

# Seed initial data
npm run db:seed
```

### **5. Start Development**

```bash
# Start all applications
npm run dev

# Or start individually
npm run dev:admin      # Admin dashboard
npm run dev:passenger  # Passenger mobile app
npm run dev:driver     # Driver mobile app
```

## 📖 **Documentation**

Comprehensive implementation documentation is available in the `docs/` directory:

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

## 🤫 **Contributing**

1. Fork the repository
2. Create a feature branch (g`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📘 **Next Steps**

1. **Review Documentation**: Start with `docs/README.md` for a complete overview
2. **Setup Development Environment**: Follow Phase 1 documentation
3. **Implement Database Schema**: Follow Phase 2 documentation
4. **Build Core Features**: Follow Phase 3-7 documentation

## 📞 **Support**

- **Documentation**: Check the `docs/` directory for comprehensive guides
- **Issues**: Report bugs and request features via GitHub Issues
- **Discussions**: Join community discussions in GitHub Discussions

---

**🇺🇷 Ready to build Zimbabwe's premier ride-hailing platform? Let's get started!** 🚆