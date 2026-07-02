import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-text-secondary"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full px-4 py-3 rounded-xl border transition-all duration-200',
            'bg-card border-border text-text placeholder:text-text-muted',
            'focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30',
            error && 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30',
            className,
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    )
  },
)
Input.displayName = 'Input'

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-text-secondary"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          rows={5}
          className={cn(
            'w-full px-4 py-3 rounded-xl border transition-all duration-200 resize-none',
            'bg-card border-border text-text placeholder:text-text-muted',
            'focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30',
            error && 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30',
            className,
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    )
  },
)
Textarea.displayName = 'Textarea'
