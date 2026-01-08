import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}: ButtonProps) {
  
  const buttonClassName = [
    styles.button,
    styles[variant],
    styles[size],
    props.disabled ? styles.disabled : '',
    className
  ].join(' ');

  return (
    <button 
      className={buttonClassName} 
      {...props}
    >
      <span className={styles.label}>{children}</span>
    </button>
  );
}
