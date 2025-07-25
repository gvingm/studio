import { PocketKnife } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Polza.Agency Home">
       <div className="bg-primary p-2 rounded-md">
        <PocketKnife className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-2xl font-bold font-headline text-foreground">
        Polza
      </span>
    </div>
  );
}
