import React, { forwardRef } from 'react';
import { cls } from '../../utils/util';

const classes = {
  base: 'focus:outline-none enabled:transition enabled:ease-in-out enabled:duration-300',
  disabled: 'opacity-50 cursor-not-allowed bg-slate-400 rounded-full',
  pill: 'rounded-full',
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-4 py-2',
    large: 'px-8 py-3 text-lg',
  },
  variant: {
    primary:
      'bg-slate-900 ring-2 hover:bg-slate-800 focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50 text-white rounded-full',
    secondary:
      'bg-teal-900 hover:bg-rose-600 focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 text-white enabled:hover:text-white rounded-full',
    danger:
      'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white rounded-full',
    green:
      'bg-green-500 hover:bg-green-800 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-white rounded-full',
  },
};

const Button = forwardRef(
  (
    {
      children,
      type = 'button',
      className,
      variant = 'primary',
      size = 'normal',
      pill,
      disabled = false,
      inProgress = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={cls(`
                ${!disabled ? classes.base : ''}
                ${classes.size[size]}
                ${disabled ? '' : classes.variant[variant]}
                ${pill && classes.pill}
                ${disabled ? classes.disabled : ''} 
                ${className}
            `)}
      {...props}
    >
      <div className="flex justify-start">
        {inProgress && (
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </div>
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
