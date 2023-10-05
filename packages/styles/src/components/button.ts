type buttonType = string
interface ButtonProps {
    [k: string]: buttonType
}

export const container: string = `button inline-block text-center py-2 lg:py-3 px-8 lg:px-10 rounded-full transition-all border-2 border-green-600 font-normal whitespace-nowrap`

export const button: ButtonProps = {
    primary: `${container} button--primary bg-green-600 text-white hover:bg-white [:not(button--disabled)]:hover:text-green-600`,
    secondary: `${container} button--secondary text-green-600 [:not(button--disabled)]:hover:bg-green-600 [:not(button--disabled)]:hover:text-white`,
    disabled: `button--disabled opacity-50 cursor-not-allowed`,
    full: `button--full-width w-full`,
    sm: `py-1 px-6 lg:py-1 lg:px-6`,
    md: ``,
    lg: `py-3 px-10 lg:py-4 lg:px-12`,
}
