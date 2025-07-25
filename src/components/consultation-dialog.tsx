
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request a Consultation</DialogTitle>
          <DialogDescription>
            We're excited to learn about your needs. Please contact us at{' '}
            <a href="mailto:contact@altitudecloud.com" className="text-primary hover:underline">
              contact@altitudecloud.com
            </a>{' '}
            to schedule a consultation with our experts.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
