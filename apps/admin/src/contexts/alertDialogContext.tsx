import { CustomAlertDialog } from '@/components/common/CustomAlertDialog';
import React, { createContext, useState, useContext, useCallback } from 'react';
import { createPortal } from 'react-dom';

type AlertDialogOptions = {
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
};

type AlertDialogContextType = {
  showAlertDialog: (options: AlertDialogOptions) => void;
};

const AlertDialogContext = createContext<AlertDialogContextType | undefined>(undefined);

export const useAlertDialog = () => {
  const context = useContext(AlertDialogContext);
  if (!context) {
    throw new Error('useAlertDialog은 AlertDialogProvider안에서 사용되어야 합니다!!');
  }
  return context;
};

type AlertDialogProviderProps = {
  children: React.ReactNode;
};

export function AlertDialogProvider({ children }: AlertDialogProviderProps) {
  const [dialogState, setDialogState] = useState<AlertDialogOptions & { isOpen: boolean }>({
    isOpen: false,
    title: '',
    description: '',
    cancelText: 'Cancel',
    confirmText: 'Confirm',
    onConfirm: () => {},
  });

  const showAlertDialog = useCallback((options: AlertDialogOptions) => {
    setDialogState({ ...options, isOpen: true });
  }, []);

  const closeDialog = useCallback(() => {
    setDialogState(prev => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <AlertDialogContext.Provider value={{ showAlertDialog }}>
      {children}
      {createPortal(
        <CustomAlertDialog
          isOpen={dialogState.isOpen}
          onClose={closeDialog}
          title={dialogState.title}
          description={dialogState.description}
          cancelText={dialogState.cancelText || 'Cancel'}
          confirmText={dialogState.confirmText || 'Confirm'}
          onConfirm={dialogState.onConfirm}
        />,
        document.body,
      )}
    </AlertDialogContext.Provider>
  );
}
