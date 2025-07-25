import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { Cpu, HardDrive, Network, CheckCircle, ArrowRight } from 'lucide-react';
import HeadlineGenerator from '@/components/headline-generator';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
              Build the Future on the Cloud That Just Works.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-6">
              Altitude Cloud provides the secure, scalable, and reliable infrastructure your business needs to innovate and grow without limits. Experience unparalleled performance with a platform designed for the enterprise.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">Our Premier Cloud Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tailored services to power your most demanding applications, from high-performance computing to global-scale networking.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Cpu className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl">Elastic Compute</CardTitle>
                  </div>
                  <CardDescription>Scalable virtual servers for any workload.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> 99.99% Uptime SLA</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> GPU-Accelerated Instances</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Pay-as-you-go pricing</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <HardDrive className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl">Titan Storage</CardTitle>
                  </div>
                  <CardDescription>Durable, secure, and cost-effective object storage.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> S3-Compatible API</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Automatic Data Tiering</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> 11 Nines of Durability</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Network className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl">Quantum Networking</CardTitle>
                  </div>
                  <CardDescription>Low-latency global network with built-in security.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Global Private Backbone</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Advanced DDoS Protection</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Terabit-scale Capacity</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold font-headline tracking-tighter text-center sm:text-5xl text-primary mb-12">Trusted by Industry Leaders</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="text-lg font-semibold leading-snug">
                    “Altitude Cloud's reliability and performance have been a game-changer for our data processing pipeline. Their support team is second to none.”
                  </blockquote>
                </CardContent>
                <CardFooter className="pt-4 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/100x100.png" alt="Jane Doe" data-ai-hint="person business" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Jane Doe</p>
                    <p className="text-sm text-muted-foreground">CTO, Innovate Inc.</p>
                  </div>
                  <Image src="https://placehold.co/120x40.png" alt="Innovate Inc. Logo" width={120} height={40} className="ml-auto" data-ai-hint="logo abstract" />
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="text-lg font-semibold leading-snug">
                    “We migrated our entire e-commerce platform to Altitude Cloud and saw a 40% reduction in latency. The scalability during peak traffic is phenomenal.”
                  </blockquote>
                </CardContent>
                <CardFooter className="pt-4 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/100x100.png" alt="John Smith" data-ai-hint="person business" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">John Smith</p>
                    <p className="text-sm text-muted-foreground">Head of Engineering, Retail Co.</p>
                  </div>
                  <Image src="https://placehold.co/120x40.png" alt="Retail Co. Logo" width={120} height={40} className="ml-auto" data-ai-hint="logo abstract" />
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="ai-tool" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">Optimize Your Message with AI</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Use our GenAI tool to craft the perfect headline for your own landing page. Enter your product details and get compelling options in seconds.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <HeadlineGenerator />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold font-headline tracking-tighter md:text-4xl/tight text-primary">Ready to Elevate Your Infrastructure?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how Altitude Cloud can accelerate your business goals. Our experts are ready to help you design the perfect solution.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
               <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                Request a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
