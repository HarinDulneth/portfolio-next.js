import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GenerateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

const GenerateButton = React.forwardRef<HTMLButtonElement, GenerateButtonProps>(
  ({ className, children = "Generate", size = 'md', showIcon = true, ...props }, ref) => {
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg'
    };

    const iconSizes = {
      sm: 16,
      md: 18,
      lg: 20
    };

    return (
      <button
        ref={ref}
        className={cn(
          // Base styles using design system tokens
          'inline-flex items-center justify-center gap-3',
          'bg-generate border border-generate-border',
          'text-generate-text font-medium',
          'rounded-full',
          'shadow-[var(--shadow-generate)]',
          'transition-[var(--transition-generate)]',
          // Hover states
          'hover:bg-generate-hover hover:border-generate-border-hover',
          'hover:shadow-[var(--shadow-generate-hover)]',
          // Active states
          'active:bg-generate-active active:scale-[0.98]',
          // Focus states
          'focus:outline-none focus:ring-2 focus:ring-generate-border focus:ring-offset-2',
          // Disabled states
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-generate',
          // Size
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {showIcon && (
          <div className="flex items-center gap-1">
            <Sparkles 
              size={iconSizes[size]} 
              className="text-generate-icon fill-current opacity-80" 
            />
            <Sparkles 
              size={iconSizes[size] - 2} 
              className="text-generate-icon fill-current opacity-60" 
            />
          </div>
        )}
        {children}
      </button>
    );
  }
);

GenerateButton.displayName = 'GenerateButton';

export default GenerateButton;