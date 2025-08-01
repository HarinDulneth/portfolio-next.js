import React from 'react';
import { cn } from '@/lib/utils';

interface SaveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const SaveButton = React.forwardRef<HTMLButtonElement, SaveButtonProps>(
  ({ className, children = "Save", size = 'md', ...props }, ref) => {
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <button
        ref={ref}
        className={cn(
          // Base styles using design system tokens
          'inline-flex items-center justify-center',
          'bg-save border border-save-border',
          'text-save-text font-medium',
          'rounded-full',
          'shadow-[var(--shadow-save)]',
          'transition-[var(--transition-save)]',
          // Hover states
          'hover:bg-save-hover hover:border-save-border-hover',
          'hover:shadow-[var(--shadow-save-hover)]',
          // Active states
          'active:bg-save-active active:scale-[0.98]',
          // Focus states
          'focus:outline-none focus:ring-2 focus:ring-save-border focus:ring-offset-2',
          // Disabled states
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-save',
          // Size
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

SaveButton.displayName = 'SaveButton';

export default SaveButton;