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
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
