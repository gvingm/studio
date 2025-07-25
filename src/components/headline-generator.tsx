
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateHeadlinesAction } from '@/app/actions';

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Loader2, Clipboard, Check } from 'lucide-react';

const formSchema = z.object({
  productName: z.string().min(2, { message: "Product name must be at least 2 characters."}),
  targetAudience: z.string().min(3, { message: "Target audience must be at least 3 characters." }),
  keyBenefit: z.string().min(10, { message: "Key benefit must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function HeadlineGenerator() {
    const [headlines, setHeadlines] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            productName: "Altitude Cloud",
            targetAudience: "Enterprise businesses",
            keyBenefit: "Provides secure, scalable, and reliable cloud infrastructure.",
        },
    });

    async function onSubmit(values: FormData) {
        setIsLoading(true);
        setError(null);
        setHeadlines([]);
        setCopiedIndex(null);

        const result = await generateHeadlinesAction(values);

        if (result.success && result.headlines) {
            setHeadlines(result.headlines);
        } else if (result.error && typeof result.error === 'string') {
            setError(result.error);
        } else {
            setError("An unexpected error occurred. Please check your inputs and try again.");
        }
        setIsLoading(false);
    }
    
    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <Card>
            <CardContent className="p-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="productName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., QuantumLeap CRM" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="targetAudience"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Target Audience</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., Small business owners" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="keyBenefit"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Key Benefit</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="e.g., Automates sales funnels to increase revenue by 30%." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Generating...
                                </>
                            ) : (
                                "Generate Headlines"
                            )}
                        </Button>
                    </form>
                </Form>

                {error && (
                    <Alert variant="destructive" className="mt-6">
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {headlines.length > 0 && (
                    <div className="mt-8 space-y-4">
                        <h3 className="font-headline text-lg font-semibold text-primary">Generated Headlines:</h3>
                        <ul className="space-y-3">
                            {headlines.map((headline, index) => (
                                <li key={index} className="flex items-center justify-between gap-2 p-3 rounded-md bg-background border">
                                    <div className="flex items-start gap-3">
                                        <Lightbulb className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                                        <span className="flex-1">{headline}</span>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(headline, index)}>
                                        {copiedIndex === index ? <Check className="h-4 w-4 text-green-500" /> : <Clipboard className="h-4 w-4" />}
                                        <span className="sr-only">Copy headline</span>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
