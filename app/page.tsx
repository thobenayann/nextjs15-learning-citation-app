import { buttonVariants } from '@/src/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/src/components/ui/card';
import Link from 'next/link';

export default function Home() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>URL : /</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <Link
                    href={'/admin/citations/1'}
                    className={buttonVariants({
                        size: 'lg',
                        variant: 'outline',
                    })}
                >
                    Citation 1
                </Link>
                <Link
                    href={'/admin/citations/QZDQDS'}
                    className={buttonVariants({
                        size: 'lg',
                        variant: 'outline',
                    })}
                >
                    Citation QZDQDS
                </Link>
                <Link
                    href={'/admin/citations/5522-33223-4424'}
                    className={buttonVariants({
                        size: 'lg',
                        variant: 'outline',
                    })}
                >
                    Citation 5522-33223-4424
                </Link>
            </CardContent>
        </Card>
    );
}
