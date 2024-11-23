'use client';

import { Button } from '@/src/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { toast } from '@/src/hooks/use-toast';
import { Citation } from '@prisma/client';
import { Label } from '@radix-ui/react-label';
import { useFormStatus } from 'react-dom';
import { createCitationAction, updateCitationAction } from './citation.action';

export function CitationForm(props: { citation?: Citation }) {
    const onSubmit = async (formData: FormData) => {
        let error: null | string = null;
        // if citation is provided, it's an update
        if (props.citation) {
            const json = await updateCitationAction(props.citation.id, {
                author: String(formData.get('author')),
                text: String(formData.get('citation')),
            });
            error = json.error;
            // else it's a create
        } else {
            const json = await createCitationAction({
                author: String(formData.get('author')),
                text: String(formData.get('citation')),
            });
            error = json.error;
        }

        if (error) {
            toast({
                title: 'Erreur',
                description: error,
                variant: 'destructive',
            });
        }
    };
    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.citation ? 'Update' : 'Create'}</CardTitle>
            </CardHeader>
            <CardContent>
                <form
                    action={async (formData) => await onSubmit(formData)}
                    className='flex flex-col gap-2'
                >
                    <Label>
                        Citation
                        <Input
                            name='citation'
                            defaultValue={props.citation?.text}
                        />
                    </Label>
                    <Label>
                        Author
                        <Input
                            name='author'
                            defaultValue={props.citation?.author}
                        />
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
            {pending ? 'Loading ...' : 'Submit'}
        </Button>
    );
};
