import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@recipic-packages/ui';
import type { AlertDialogContentProps, AlertDialogTitleProps, AlertDialogDescriptionProps } from '@recipic-packages/ui';

type CustomAlertDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  contentProps?: Omit<AlertDialogContentProps, 'children'>;
  titleProps?: Omit<AlertDialogTitleProps, 'children'>;
  descriptionProps?: Omit<AlertDialogDescriptionProps, 'children'>;
};

export function CustomAlertDialog({
  isOpen,
  onClose,
  title,
  description,
  cancelText,
  confirmText,
  onConfirm,
  contentProps,
  titleProps,
  descriptionProps,
}: CustomAlertDialogProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const showFooter = cancelText || confirmText;

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-80 rounded-lg" {...contentProps}>
        <AlertDialogHeader>
          <AlertDialogTitle {...titleProps}>{title}</AlertDialogTitle>
          <AlertDialogDescription className="whitespace-pre-wrap" {...descriptionProps}>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        {showFooter && (
          <AlertDialogFooter>
            {cancelText && <AlertDialogCancel onClick={onClose}>{cancelText}</AlertDialogCancel>}
            {confirmText && <AlertDialogAction onClick={handleConfirm}>{confirmText}</AlertDialogAction>}
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}
