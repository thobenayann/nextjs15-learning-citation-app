'use client';

import { Button } from '@/src/components/ui/button';
import { useToast } from '@/src/hooks/use-toast';
import { ToastAction } from '@radix-ui/react-toast';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { deleteCitationAction } from './new/citation.action';

export function DeleteCitationButton(props: { id: number }) {
    const { toast } = useToast();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isLoading, setIsLoading] = useState(false);

    const onDelete = async () => {
        setIsLoading(true);
        try {
            await deleteCitationAction(props.id);
            startTransition(() => {
                router.refresh();
                toast({
                    title: 'Succès',
                    description: 'Citation supprimée avec succès',
                });
                setIsLoading(false);
            });
        } catch {
            setIsLoading(false);
            toast({
                title: 'Erreur',
                description: 'Erreur lors de la suppression',
                variant: 'destructive',
                action: (
                    <ToastAction altText='Réessayer'>Réessayer</ToastAction>
                ),
            });
        }
    };

    return (
        <Button
            onClick={onDelete}
            variant='outline'
            disabled={isLoading || isPending}
        >
            {isLoading || isPending ? (
                <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Suppression...
                </>
            ) : (
                'Supprimer'
            )}
        </Button>
    );
}
