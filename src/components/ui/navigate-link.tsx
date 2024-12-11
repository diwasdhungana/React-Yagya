import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const navigateLinkVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'text-primary hover:text-primary/80',
        destructive: 'text-destructive hover:text-destructive/80',
        muted: 'text-muted-foreground hover:text-muted-foreground/80',
        accent: 'text-accent-foreground hover:text-accent-foreground/80',
      },
      size: {
        default: 'h-10',
        sm: 'h-9 text-xs',
        lg: 'h-11 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface NavigateLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navigateLinkVariants> {
  to: string;
  children: React.ReactNode;
}

export const LinkTo = React.forwardRef<HTMLAnchorElement, NavigateLinkProps>(
  ({ className, variant, size, to, children, ...props }, ref) => {
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      navigate(to);
    };

    return (
      <a
        className={cn(navigateLinkVariants({ variant, size, className }))}
        ref={ref}
        href={to}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }
);
