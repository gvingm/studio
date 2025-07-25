'use server';

/**
 * @fileOverview A flow for generating multiple headline options for A/B testing.
 *
 * - generateHeadlineOptions - A function that generates headline options.
 * - GenerateHeadlineOptionsInput - The input type for the generateHeadlineOptions function.
 * - GenerateHeadlineOptionsOutput - The return type for the generateHeadlineOptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeadlineOptionsInputSchema = z.object({
  productName: z.string().describe('The name of the product or service.'),
  targetAudience: z.string().describe('The target audience for the headline.'),
  keyBenefit: z.string().describe('The main benefit of the product or service.'),
});
export type GenerateHeadlineOptionsInput = z.infer<typeof GenerateHeadlineOptionsInputSchema>;

const GenerateHeadlineOptionsOutputSchema = z.object({
  headlines: z.array(z.string()).describe('An array of generated headline options.'),
});
export type GenerateHeadlineOptionsOutput = z.infer<typeof GenerateHeadlineOptionsOutputSchema>;

export async function generateHeadlineOptions(input: GenerateHeadlineOptionsInput): Promise<GenerateHeadlineOptionsOutput> {
  return generateHeadlineOptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeadlineOptionsPrompt',
  input: {schema: GenerateHeadlineOptionsInputSchema},
  output: {schema: GenerateHeadlineOptionsOutputSchema},
  prompt: `You are an expert marketing copywriter. Generate 5 compelling headline options for our landing page.

Product Name: {{{productName}}}
Target Audience: {{{targetAudience}}}
Key Benefit: {{{keyBenefit}}}

Format each headline option on a new line.
Headlines:`, 
});

const generateHeadlineOptionsFlow = ai.defineFlow(
  {
    name: 'generateHeadlineOptionsFlow',
    inputSchema: GenerateHeadlineOptionsInputSchema,
    outputSchema: GenerateHeadlineOptionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    const headlines = output!.headlines;
    return {
      headlines: headlines,
    };
  }
);
