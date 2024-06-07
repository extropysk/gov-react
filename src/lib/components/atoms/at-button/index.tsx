import { ButtonHTMLAttributes } from 'react'

export const AT_BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
} as const
export type AtButtonVariant = keyof typeof AT_BUTTON_VARIANT

export const variantClasses: Record<AtButtonVariant, string> = {
  PRIMARY: 'bg-green-200 hover:bg-green-400 active:bg-green-500',
  SECONDARY: 'bg-blue-200 hover:bg-blue-400 active:bg-blue-500',
  TERTIARY: 'bg-red-200 hover:bg-red-400 active:bg-red-500',
}

export interface AtButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: AtButtonVariant
  isDisabled?: boolean
}

export const AtButton = ({ label, variant = 'PRIMARY', isDisabled = false, onClick }: AtButtonProps) => {
  return (
    <button type="submit" className="govuk-button" data-module="govuk-button">
      Save and continue
    </button>
  )
}
