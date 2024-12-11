import { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PageProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Page({ title, children, className }: PageProps) {
  useEffect(() => {
    document.title = `${title} | Yagya Ai`;
  }, [title]);

  return <div className={cn('min-h-screen bg-background', className)}>{children}</div>;
}
