import clsx from 'clsx';

interface TagProps {
  item: string;
  /**
   * @default 'cta'
   */
  color?: 'cta' | 'secondary' | 'primary' | 'gray' | 'black' | 'green' | 'red';
  /**
   * @default 'xl'
   */
  rounded?: 'md' | 'lg' | 'xl' | 'full';
  /**
   * @default 'bold'
   */
  weight?: 'bold' | 'normal';
  /**
   * @default 'xs'
   */
  size?: 'xs' | 'sm';
  className?: string;
}

const colors = {
  cta: 'bg-brand text-white',
  secondary: 'bg-gray-200 text-neutral-800',
  primary: 'bg-neutral-900 text-white',
  gray: 'bg-neutral-600 text-white',
  black: 'bg-[#191f28] text-white',
  green: 'bg-green-500 text-white',
  red: 'bg-red-500 text-white',
};

const roundeds = {
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
};

const sizes = {
  xs: 'min-h-20 px-6 py-1 text-xs',
  sm: 'min-h-28 px-12 py-3 text-sm',
};

function Tag({
  item,
  color = 'cta',
  rounded = 'xl',
  weight = 'bold',
  size = 'xs',
  className,
}: TagProps) {
  const colorClasses = colors[color];
  const roundedClasses = roundeds[rounded];
  const sizeClasses = sizes[size];

  return (
    <span
      className={clsx(
        'inline-flex items-center justify-center',
        { 'font-bold': weight === 'bold' },
        colorClasses,
        roundedClasses,
        sizeClasses,
        className,
      )}
    >
      {item}
    </span>
  );
}

export default Tag;
