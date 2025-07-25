
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type HeaderProps = {
  onProjectClick?: () => void;
};

export function Header({ onProjectClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "px-4 lg:px-6 h-20 flex items-center sticky top-0 z-50 transition-colors duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent"
    )}>
      <Link href="/" className="flex items-center justify-center mr-auto">
        <Logo />
      </Link>
      <nav className="hidden lg:flex gap-6 items-center">
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="#cases">
          Кейсы
        </Link>
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="#services">
          Услуги
        </Link>
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="#about">
          О нас
        </Link>
        <Button variant="outline" onClick={onProjectClick}>
          Начать проект
        </Button>
      </nav>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card border-border">
            <div className="grid gap-4 p-4">
              <Link href="/" className="flex items-center mb-4">
                <Logo />
              </Link>
              <Link className="font-medium text-lg" href="#cases">
                Кейсы
              </Link>
              <Link className="font-medium text-lg" href="#services">
                Услуги
              </Link>
              <Link className="font-medium text-lg" href="#about">
                О нас
              </Link>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-6" onClick={onProjectClick}>
                Начать проект
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
