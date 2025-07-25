
'use server';

import { generateHeadlineOptions, type GenerateHeadlineOptionsInput } from '@/ai/flows/generate-headline-options';
import { z } from 'zod';

const GenerateHeadlineOptionsInputSchema = z.object({
  productName: z.string().min(2, { message: "Product name must be at least 2 characters."}),
  targetAudience: z.string().min(3, { message: "Target audience must be at least 3 characters." }),
  keyBenefit: z.string().min(10, { message: "Key benefit must be at least 10 characters." }),
});

type ActionState = {
    success: boolean;
    headlines?: string[];
    error?: string | z.ZodError<GenerateHeadlineOptionsInput>['formErrors'];
};

export async function generateHeadlinesAction(values: GenerateHeadlineOptionsInput): Promise<ActionState> {
    const parsed = GenerateHeadlineOptionsInputSchema.safeParse(values);

    if (!parsed.success) {
        return { success: false, error: parsed.error.formErrors };
    }

    try {
        const result = await generateHeadlineOptions(parsed.data);
        if (!result.headlines || result.headlines.length === 0) {
            return { success: false, error: "The AI could not generate headlines. Please try refining your input." };
        }
        return { success: true, headlines: result.headlines };
    } catch (e) {
        console.error("Error in generateHeadlinesAction:", e);
        return { success: false, error: "An unexpected error occurred while generating headlines. Please try again later." };
    }
}
