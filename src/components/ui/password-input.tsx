'use client';

import { useState, forwardRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { cn } from '@/utils/cn.util';

import { Input, type InputProps } from './input';
import { Icon } from '../tools/icon';

export const PasswordInput = forwardRef<
  HTMLInputElement,
  Omit<InputProps, 'type' | 'ref'>
>(({ className, ...rest }, ref) => {
  const [inputType, setInputType] = useState<'password' | 'text'>('password');

  return (
    <div className="relative flex items-center flex-[1]">
      <Input
        className={cn('pr-8 rounded-xl', className)}
        type={inputType}
        ref={ref}
        {...rest}
      />
      <button
        className="absolute right-[0px] mr-2.5"
        type="button"
        disabled={rest.disabled}
        tabIndex={-1}
        onClick={() =>
          setInputType((prev) => (prev === 'password' ? 'text' : 'password'))
        }
      >
        <Icon icon={inputType === 'password' ? EyeOff : Eye} size="sm" />
      </button>
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';
