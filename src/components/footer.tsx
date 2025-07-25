import { Logo } from "./logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-card text-card-foreground">
      <div className="container mx-auto py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo />
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Altitude Cloud. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 text-sm font-medium">
          <Link href="#" className="hover:text-primary">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
