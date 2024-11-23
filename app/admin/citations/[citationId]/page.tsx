import { Card, CardHeader, CardTitle } from '@/src/components/ui/card';
import { prisma } from '@/src/lib/prisma';
import { CitationForm } from '../citation-form';

export default async function Page(props: {
    params: Promise<{ citationId: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    // Example of how to deal with params or searchParams
    const params = await props.params;
    // test the pattern "?search=value"
    // const searchParams = await props.searchParams;

    const citation = await prisma.citation.findUnique({
        where: {
            id: Number(params.citationId),
        },
    });

    if (!citation) {
        <Card>
            <CardHeader>
                <CardTitle>The citation was not found</CardTitle>
            </CardHeader>
        </Card>;
    }

    return <CitationForm citation={citation!} />;
}
