import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";

type FooterProps = {
  onProjectClick?: () => void;
};


export function Footer({ onProjectClick }: FooterProps) {
  return (
    <footer className="w-full border-t border-border bg-card text-card-foreground">
       <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl mb-4">Есть идея для проекта?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Давайте обсудим, как мы можем помочь вашему бизнесу достичь новых высот. Мы всегда открыты для новых вызовов и интересных задач.</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6" onClick={onProjectClick}>
            Начать проект
          </Button>
       </div>
      <div className="container mx-auto py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo />
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Polza.Agency. Все права защищены.
          </p>
        </div>
        <div className="flex gap-4 text-sm font-medium">
          <Link href="#" className="hover:text-primary">Политика конфиденциальности</Link>
          <Link href="#" className="hover:text-primary">Условия использования</Link>
        </div>
      </div>
    </footer>
  );
}
