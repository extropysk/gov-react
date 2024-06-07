import { VariantProps, cva, cx } from 'class-variance-authority'

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
  disabled?: boolean
}

export const AtButton = ({ label, variant, disabled, onClick }: AtButtonProps) => {
  return (
    <button className={cx(buttonVariants({ variant }))} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  )
}
