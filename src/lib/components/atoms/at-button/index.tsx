import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva, cx } from 'class-variance-authority'
import React from 'react'

const buttonVariants = cva('govuk-button', {
  variants: {
    variant: {
      default: '',
      secondary: 'govuk-button--secondary',
      warning: 'govuk-button--warning',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface AtButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string
  asChild?: boolean
}

export const AtButton = React.forwardRef<HTMLButtonElement, AtButtonProps>(
  ({ className, variant, label, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cx(buttonVariants({ variant, className }))} ref={ref} {...props}>
        {label}
      </Comp>
    )
  },
)
AtButton.displayName = 'Button'
