import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  paddingX?: 'sm' | 'md' | 'lg' | 'xl';
  paddingY?: 'sm' | 'md' | 'lg' | 'xl';
}

const spacingMap = {
  sm: 'space-y-10 md:space-y-12',
  md: 'space-y-16 md:space-y-20',
  lg: 'space-y-20 md:space-y-24',
  xl: 'space-y-24 md:space-y-32',
};

const maxWidthMap = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

const paddingXMap = {
  sm: 'px-4 md:px-6',
  md: 'px-6 md:px-8 lg:px-12',
  lg: 'px-8 md:px-12 lg:px-16',
  xl: 'px-12 md:px-16 lg:px-20',
};

const paddingYMap = {
  sm: 'py-8 md:py-10',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-20',
  xl: 'py-20 md:py-24',
};

export default function PageContainer({
  children,
  className = '',
  spacing = 'lg',
  maxWidth = 'lg',
  paddingX = 'lg',
  paddingY = 'lg',
}: PageContainerProps) {
  const containerClasses = [
    'w-full mx-auto',
    maxWidthMap[maxWidth],
    paddingXMap[paddingX],
    paddingYMap[paddingY],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const innerClasses = spacingMap[spacing];

  return (
    <div className={containerClasses}>
      <div className={innerClasses}>{children}</div>
    </div>
  );
}