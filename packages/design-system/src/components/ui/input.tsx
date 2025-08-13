import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input",
        error: "border-error-500 focus-visible:ring-error-500",
        success: "border-success-500 focus-visible:ring-success-500",
        // Taxi-specific variants
        "taxi-primary": "border-taxi-yellow-300 focus-visible:ring-taxi-yellow-500 focus-visible:border-taxi-yellow-500",
      },
      size: {
        default: "h-10",
        sm: "h-9 px-2 text-xs",
        lg: "h-11 px-4",
        xl: "h-12 px-4 text-base",
        // Mobile-friendly size
        "touch-friendly": "h-12 px-4 text-base", // Better for mobile devices
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  error?: string
  label?: string
  helperText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant, 
    size, 
    type = "text",
    leftIcon,
    rightIcon,
    error,
    label,
    helperText,
    id,
    ...props 
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
    const hasError = !!error
    const finalVariant = hasError ? "error" : variant

    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {leftIcon}
            </div>
          )}
          
          <input
            type={type}
            id={inputId}
            className={cn(
              inputVariants({ variant: finalVariant, size, className }),
              leftIcon && "pl-10",
              rightIcon && "pr-10"
            )}
            ref={ref}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </div>
          )}
        </div>
        
        {(error || helperText) && (
          <p className={cn(
            "text-sm",
            hasError ? "text-error-600" : "text-muted-foreground"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

// Specialized input components for taxi platform
export interface SearchInputProps extends Omit<InputProps, 'leftIcon' | 'type'> {
  onSearch?: (value: string) => void
  onClear?: () => void
  showClearButton?: boolean
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, onClear, showClearButton = true, className, ...props }, ref) => {
    const [value, setValue] = React.useState(props.value || "")
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setValue(newValue)
      props.onChange?.(e)
      onSearch?.(newValue)
    }
    
    const handleClear = () => {
      setValue("")
      onClear?.()
    }
    
    return (
      <Input
        {...props}
        ref={ref}
        type="search"
        value={value}
        onChange={handleChange}
        leftIcon={
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
        rightIcon={
          showClearButton && value ? (
            <button
              type="button"
              onClick={handleClear}
              className="text-muted-foreground hover:text-foreground"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : undefined
        }
        className={cn("pr-8", className)}
      />
    )
  }
)
SearchInput.displayName = "SearchInput"

export interface LocationInputProps extends Omit<InputProps, 'leftIcon'> {
  onLocationSelect?: (location: any) => void
  currentLocation?: boolean
}

const LocationInput = React.forwardRef<HTMLInputElement, LocationInputProps>(
  ({ onLocationSelect, currentLocation = false, ...props }, ref) => {
    return (
      <Input
        {...props}
        ref={ref}
        leftIcon={
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
        rightIcon={
          currentLocation ? (
            <button
              type="button"
              className="text-taxi-yellow-600 hover:text-taxi-yellow-700"
              title="Use current location"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
              </svg>
            </button>
          ) : undefined
        }
        placeholder="Enter location..."
        variant="taxi-primary"
      />
    )
  }
)
LocationInput.displayName = "LocationInput"

export interface PhoneInputProps extends Omit<InputProps, 'type' | 'leftIcon'> {
  countryCode?: string
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ countryCode = "+263", ...props }, ref) => {
    return (
      <Input
        {...props}
        ref={ref}
        type="tel"
        leftIcon={
          <span className="text-sm font-medium text-muted-foreground">
            {countryCode}
          </span>
        }
        placeholder="77 123 4567"
        className="pl-16"
      />
    )
  }
)
PhoneInput.displayName = "PhoneInput"

export { 
  Input, 
  SearchInput, 
  LocationInput, 
  PhoneInput,
  inputVariants 
}
