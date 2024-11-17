import { Button } from '@/src/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';

export default function Page() {
    // Example of how to deal with form and API route
    // Cf app/api/citations/route.ts
    return (
        <Card>
            <CardHeader>
                <CardTitle>Create new citation</CardTitle>
            </CardHeader>
            <CardContent>
                <form
                    action='/api/citations'
                    method='POST'
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
                    <Button type='submit'>Create</Button>
                </form>
            </CardContent>
        </Card>
    );
}
