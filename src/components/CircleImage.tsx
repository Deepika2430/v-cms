import { cn } from "@/lib/utils";

interface CircleImageProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CircleImage = ({ 
  src, 
  alt, 
  className,
  size = 'md' 
}: CircleImageProps) => {
  const sizeClasses = {
    sm: 'w-24 h-24 md:w-32 md:h-32',
    md: 'w-32 h-32 md:w-48 md:h-48',
    lg: 'w-40 h-40 md:w-64 md:h-64'
  };

  return (
    <div 
      className={cn(
        "rounded-full overflow-hidden border-4 border-white shadow-lg",
        sizeClasses[size],
        className
      )}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
      />
    </div>
  );
};