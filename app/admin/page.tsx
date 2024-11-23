import { buttonVariants } from '@/src/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/src/components/ui/card';
import { prisma } from '@/src/lib/prisma';
import Link from 'next/link';
import { DeleteCitationButton } from './citations/delete-citation-button';

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // throw new Error('Invalid pathname');
    const citations = await prisma.citation.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>URL : /admin</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                {citations.map((citation) => (
                    <Card
                        className='p-4 hover:bg-muted transition-colors duration-200 flex items-start gap-4'
                        key={citation.id}
                    >
                        <div className='flex flex-col gap-2 flex-1'>
                            <p className='relative pl-8 italic before:content-["“"] before:absolute before:text-4xl before:text-primary/30 before:-left-1 before:-top-2 before:font-serif'>
                                {citation.text}
                            </p>
                            <p className='text-sm text-muted-foreground'>
                                -- {citation.author}
                            </p>
                        </div>
                        <DeleteCitationButton id={citation.id} />
                    </Card>
                ))}
                <Link
                    href={'/admin/citations/new'}
                    className={buttonVariants({
                        size: 'lg',
                        variant: 'outline',
                    })}
                >
                    Create new citation
                </Link>
            </CardContent>
        </Card>
    );
}
