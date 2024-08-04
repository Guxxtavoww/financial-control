import Link, { type LinkProps } from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const customLinkVariants = cva(
  'inline-flex items-center gap-3 justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary hover:bg-accent hover:text-accent-foreground min-h-10 px-4',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-5',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        fit: 'min-h-fit max-w-fit'
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'default',
    },
  }
);

export interface iCustomLinkProps
  extends LinkProps,
    VariantProps<typeof customLinkVariants> {
  className?: string;
}

export function CustomLink({
  className,
  children,
  variant,
  size,
  ...rest
}: WithChildren<iCustomLinkProps>) {
  return (
    <Link
      {...rest}
      className={customLinkVariants({ className, size, variant })}
    >
      {children}
    </Link>
  );
}
