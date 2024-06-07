import { ButtonHTMLAttributes } from 'react'

export const AT_BUTTON_VARIANT = {
  DEFAULT: 'default',
  SECONDARY: 'secondary',
  WARNING: 'warning',
} as const
export type AtButtonVariant = keyof typeof AT_BUTTON_VARIANT

export const variantClasses: Record<AtButtonVariant, string> = {
  DEFAULT: '',
  SECONDARY: 'govuk-button--secondary',
  WARNING: 'govuk-button--warning',
}

export interface AtButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: AtButtonVariant
  isDisabled?: boolean
}

export const AtButton = ({ label, variant = 'DEFAULT', isDisabled = false, onClick }: AtButtonProps) => {
  return (
    <button
      className={`govuk-button ${variantClasses[variant]} ${
        isDisabled ? 'bg-gray-300 text-slate-600 cursor-not-allowed pointer-events-none' : ''
      }`}
      disabled={isDisabled}
      onClick={isDisabled ? onClick : undefined}
    >
      {label}
    </button>
  )
}
