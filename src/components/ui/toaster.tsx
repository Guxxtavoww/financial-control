'use client';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';
import { cn } from '@/utils/cn.util';
import { useToast } from '@/hooks/use-toast.hook';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose
              className={cn({
                'text-gray-200 opacity-80 hover:opacity-100 hover:text-white':
                  props.variant === 'success',
              })}
            />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
