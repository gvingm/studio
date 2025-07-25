import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ArrowRight } from 'lucide-react';

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center shadow-sm bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center justify-center mr-auto">
        <Logo />
      </Link>
      <nav className="hidden lg:flex gap-6 items-center">
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="#products">
          Products
        </Link>
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="#testimonials">
          Customers
        </Link>
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="#ai-tool">
          AI Tool
        </Link>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
          Request a Consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </nav>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link href="/" className="flex items-center">
                <Logo />
              </Link>
              <Link className="font-medium" href="#products">
                Products
              </Link>
              <Link className="font-medium" href="#testimonials">
                Customers
              </Link>
              <Link className="font-medium" href="#ai-tool">
                AI Tool
              </Link>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full mt-4">
                Request a Consultation
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
