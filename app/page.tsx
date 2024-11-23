import { buttonVariants } from '@/src/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/src/components/ui/card';
import Link from 'next/link';

export default async function Home() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>URL : /</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
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
