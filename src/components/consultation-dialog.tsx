
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type ConsultationDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ConsultationDialog({ open, onOpenChange }: ConsultationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border">
        <DialogHeader>
          <DialogTitle>Начать проект</DialogTitle>
          <DialogDescription>
            Готовы обсудить вашу идею? Свяжитесь с нами по почте{' '}
            <a href="mailto:start@polza.agency" className="text-primary hover:underline">
              start@polza.agency
            </a>{' '}
            и мы назначим встречу.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
