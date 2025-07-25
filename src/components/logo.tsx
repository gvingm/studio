import { Cloud } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Altitude Cloud Home">
      <Cloud className="h-7 w-7 text-primary" />
      <span className="text-2xl font-bold font-headline text-primary">
        Altitude Cloud
      </span>
    </div>
  );
}
