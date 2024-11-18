'use client';

import { Button } from '@/src/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { useFormStatus } from 'react-dom';
import { createCitationAction } from './citation.action';

export default function Page() {
    // Example of how to deal with form and API route
    // Cf app/api/citations/route.ts

    const createCitation = async (formData: FormData) => {
        const json = await createCitationAction({
            author: String(formData.get('author')),
            text: String(formData.get('citation')),
        });

        console.log(json);
    };
    return (
        <Card>
            <CardHeader>
                <CardTitle>Create new citation</CardTitle>
            </CardHeader>
            <CardContent>
                <form
                    action={async (formData) => await createCitation(formData)}
                    className='flex flex-col gap-2'
                >
                    <Label>
                        Citation
                        <Input name='citation' />
                    </Label>
                    <Label>
                        Author
                        <Input name='author' />
                    </Label>
                    <SubmitButton />
                </form>
            </CardContent>
        </Card>
    );
}

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} type='submit'>
            {pending ? 'Loading ...' : 'Create'}
        </Button>
    );
};
