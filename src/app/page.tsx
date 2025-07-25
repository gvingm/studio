
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowRight, Bot, Code, ShoppingCart, Smartphone, PenTool, CheckCircle, BarChart } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header onProjectClick={() => setIsDialogOpen(true)} />
      <main className="flex-1">
        <section className="w-full pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-24 lg:pb-32 relative">
           <div
            className="absolute inset-0 bg-grid-pattern opacity-10"
            style={{
              maskImage: 'linear-gradient(to bottom, white 5%, transparent 80%)',
            }}
          />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Разрабатываем цифровые продукты, которые помогают бизнесу расти
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-6">
              Мы — команда экспертов, которая превращает идеи в успешные проекты.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Начать проект
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                 <p className="text-primary font-semibold">Наши услуги</p>
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Чем мы можем быть полезны</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
              <Card className="bg-card border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col items-center text-center p-6">
                 <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <ShoppingCart className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl mb-2">E-commerce</CardTitle>
                <CardContent className="text-muted-foreground">Создаем интернет-магазины, которые продают. Удобный интерфейс, интеграция с платежными системами и CRM.</CardContent>
              </Card>
              <Card className="bg-card border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col items-center text-center p-6">
                 <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Smartphone className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl mb-2">Мобильные приложения</CardTitle>
                <CardContent className="text-muted-foreground">Разработка нативных и кроссплатформенных приложений для iOS и Android. Воплотим вашу идею в жизнь.</CardContent>
              </Card>
              <Card className="bg-card border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col items-center text-center p-6">
                 <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Code className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl mb-2">Веб-сервисы</CardTitle>
                <CardContent className="text-muted-foreground">Проектируем и разрабатываем сложные веб-сервисы и порталы, которые автоматизируют бизнес-процессы.</CardContent>
              </Card>
               <Card className="bg-card border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col items-center text-center p-6">
                 <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Bot className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl mb-2">AI и чат-боты</CardTitle>
                <CardContent className="text-muted-foreground">Интегрируем искусственный интеллект для автоматизации и улучшения ваших продуктов.</CardContent>
              </Card>
               <Card className="bg-card border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col items-center text-center p-6">
                 <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <PenTool className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl mb-2">UX/UI Дизайн</CardTitle>
                <CardContent className="text-muted-foreground">Создаем красивый и удобный дизайн, который решает задачи бизнеса и нравится пользователям.</CardContent>
              </Card>
               <Card className="bg-card border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col items-center text-center p-6">
                 <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <BarChart className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl mb-2">IT-консалтинг</CardTitle>
                <CardContent className="text-muted-foreground">Помогаем выбрать правильные технологии и выстроить эффективные процессы разработки.</CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="cases" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <p className="text-primary font-semibold">Наши кейсы</p>
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Проекты, которыми мы гордимся</h2>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="group relative overflow-hidden rounded-lg">
                <Image src="https://placehold.co/600x400.png" alt="Проект 1" width={600} height={400} className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" data-ai-hint="technology abstract" />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">Платформа для онлайн-обучения</h3>
                  <p className="text-sm text-gray-300">Веб-сервис</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image src="https://placehold.co/600x400.png" alt="Проект 2" width={600} height={400} className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" data-ai-hint="finance app" />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">Мобильный банк для бизнеса</h3>
                  <p className="text-sm text-gray-300">Финтех</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image src="https://placehold.co/600x400.png" alt="Проект 3" width={600} height={400} className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" data-ai-hint="retail e-commerce" />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">Маркетплейс для локальных брендов</h3>
                  <p className="text-sm text-gray-300">E-commerce</p>
                </div>
              </div>
            </div>
             <div className="text-center mt-12">
                <Button variant="outline" size="lg">Смотреть все проекты</Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
           <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-primary font-semibold mb-2">О нас</p>
                        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl mb-6">Мы — ваш надежный партнер в мире цифровых технологий</h2>
                        <p className="text-muted-foreground mb-4">Polza — это не просто диджитал-агентство. Мы — команда увлеченных профессионалов, которые живут технологиями и дизайном. Наша цель — создавать продукты, которые не только выглядят потрясающе, но и решают реальные бизнес-задачи, принося пользу нашим клиентам и их пользователям.</p>
                        <p className="text-muted-foreground">Мы верим в партнерство, прозрачность и результат. Каждый проект для нас — это возможность сделать что-то значимое и внести свой вклад в успех вашего бизнеса.</p>
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-4 bg-background p-4 rounded-lg">
                           <CheckCircle className="h-8 w-8 text-primary" />
                           <div>
                             <p className="font-bold text-3xl">50+</p>
                             <p className="text-muted-foreground">Проектов</p>
                           </div>
                        </div>
                         <div className="flex items-center gap-4 bg-background p-4 rounded-lg">
                           <CheckCircle className="h-8 w-8 text-primary" />
                           <div>
                             <p className="font-bold text-3xl">5 лет</p>
                             <p className="text-muted-foreground">На рынке</p>
                           </div>
                        </div>
                         <div className="flex items-center gap-4 bg-background p-4 rounded-lg">
                           <CheckCircle className="h-8 w-8 text-primary" />
                           <div>
                             <p className="font-bold text-3xl">20+</p>
                             <p className="text-muted-foreground">Сотрудников</p>
                           </div>
                        </div>
                         <div className="flex items-center gap-4 bg-background p-4 rounded-lg">
                           <CheckCircle className="h-8 w-8 text-primary" />
                           <div>
                             <p className="font-bold text-3xl">99%</p>
                             <p className="text-muted-foreground">Довольных клиентов</p>
                           </div>
                        </div>
                    </div>
                </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
