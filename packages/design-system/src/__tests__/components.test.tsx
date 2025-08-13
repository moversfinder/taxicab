/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Import components to test
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Badge, StatusBadge } from '../components/ui/badge'

// Mock CSS imports
jest.mock('../styles/globals.css', () => ({}))

describe('Taxicab Design System Components', () => {
  describe('Button Component', () => {
    it('renders with default variant', () => {
      render(<Button>Click me</Button>)
      const button = screen.getByRole('button', { name: /click me/i })
      expect(button).toBeInTheDocument()
    })

    it('renders with taxi variant', () => {
      render(<Button variant="taxi">Taxi Button</Button>)
      const button = screen.getByRole('button', { name: /taxi button/i })
      expect(button).toBeInTheDocument()
    })

    it('shows loading state', () => {
      render(<Button loading>Loading</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('handles click events', () => {
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>Click me</Button>)
      const button = screen.getByRole('button', { name: /click me/i })
      button.click()
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Card Component', () => {
    it('renders card with content', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Test Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card content</p>
          </CardContent>
        </Card>
      )
      
      expect(screen.getByText('Test Card')).toBeInTheDocument()
      expect(screen.getByText('Card content')).toBeInTheDocument()
    })

    it('renders with taxi-primary variant', () => {
      render(
        <Card variant="taxi-primary" data-testid="taxi-card">
          <CardContent>Taxi card</CardContent>
        </Card>
      )
      
      const card = screen.getByTestId('taxi-card')
      expect(card).toBeInTheDocument()
    })
  })

  describe('Input Component', () => {
    it('renders input with placeholder', () => {
      render(<Input placeholder="Enter text" />)
      const input = screen.getByPlaceholderText('Enter text')
      expect(input).toBeInTheDocument()
    })

    it('renders with label', () => {
      render(<Input label="Test Label" />)
      expect(screen.getByText('Test Label')).toBeInTheDocument()
    })

    it('shows error message', () => {
      render(<Input error="This field is required" />)
      expect(screen.getByText('This field is required')).toBeInTheDocument()
    })

    it('renders with taxi variant', () => {
      render(<Input variant="taxi-primary" placeholder="Taxi input" />)
      const input = screen.getByPlaceholderText('Taxi input')
      expect(input).toBeInTheDocument()
    })
  })

  describe('Badge Component', () => {
    it('renders badge with text', () => {
      render(<Badge>Test Badge</Badge>)
      expect(screen.getByText('Test Badge')).toBeInTheDocument()
    })

    it('renders status badge', () => {
      render(<StatusBadge status="online" />)
      expect(screen.getByText('Online')).toBeInTheDocument()
    })

    it('renders with icon', () => {
      render(<Badge icon={<span>🚗</span>}>With Icon</Badge>)
      expect(screen.getByText('🚗')).toBeInTheDocument()
      expect(screen.getByText('With Icon')).toBeInTheDocument()
    })

    it('handles remove action', () => {
      const handleRemove = jest.fn()
      render(
        <Badge removable onRemove={handleRemove}>
          Removable Badge
        </Badge>
      )
      
      const removeButton = screen.getByRole('button')
      removeButton.click()
      expect(handleRemove).toHaveBeenCalledTimes(1)
    })
  })

  describe('Design Tokens', () => {
    it('exports design tokens', () => {
      const { colors } = require('../tokens/colors')
      const { typography } = require('../tokens/typography')
      const { spacing } = require('../tokens/spacing')
      
      expect(colors).toBeDefined()
      expect(colors.taxi).toBeDefined()
      expect(colors.taxi.yellow[500]).toBe('#F59E0B')
      
      expect(typography).toBeDefined()
      expect(typography.fontFamily.primary).toContain('Inter')
      
      expect(spacing).toBeDefined()
      expect(spacing[4]).toBe('16px')
    })
  })

  describe('Utility Functions', () => {
    it('formats currency correctly', () => {
      const { formatCurrency } = require('../lib/utils')
      
      expect(formatCurrency(1234.56)).toBe('$1,234.56')
      expect(formatCurrency(1000, 'EUR')).toBe('€1,000.00')
    })

    it('validates email addresses', () => {
      const { validateEmail } = require('../lib/utils')
      
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('invalid-email')).toBe(false)
      expect(validateEmail('test@')).toBe(false)
      expect(validateEmail('@example.com')).toBe(false)
    })

    it('validates Zimbabwe phone numbers', () => {
      const { validateZimbabwePhone } = require('../lib/utils')
      
      expect(validateZimbabwePhone('+263771234567')).toBe(true)
      expect(validateZimbabwePhone('0771234567')).toBe(true)
      expect(validateZimbabwePhone('263771234567')).toBe(true)
      expect(validateZimbabwePhone('1234567')).toBe(false)
    })

    it('calculates ride fare correctly', () => {
      const { calculateFare } = require('../lib/utils')
      
      const fare = calculateFare(5, 15, 2.5, 0.5, 5)
      expect(fare).toBe(25) // 5 + (5 * 2.5) + (15 * 0.5) = 5 + 12.5 + 7.5 = 25
    })

    it('generates initials from name', () => {
      const { getInitials } = require('../lib/utils')
      
      expect(getInitials('John Doe')).toBe('JD')
      expect(getInitials('Mary Jane Watson')).toBe('MJ')
      expect(getInitials('SingleName')).toBe('S')
    })
  })
})
