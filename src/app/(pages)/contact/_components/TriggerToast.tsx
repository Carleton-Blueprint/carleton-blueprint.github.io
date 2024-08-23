import { useToast } from '@/components/ui/use-toast';
export default function triggertoast(status: boolean) {
  const { toast } = useToast();
  if (status) {
    toast({ title: 'Success', description: 'success' });
  } else {
    toast({ title: 'Error', description: 'error' });
  }
};