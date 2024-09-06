import { useState, useCallback } from 'react';

type ToastVariant = "success" | "error";

type ToastState = {
    visible: boolean;
    message: string;
    variant: ToastVariant;
};

export function useToast() {
    const [toastState, setToastState] = useState<ToastState>({
        visible: false,
        message: "",
        variant: "success",
    });

    const showToast = useCallback((message: string, variant: ToastVariant) => {
        setToastState({ visible: true, message, variant });
        setTimeout(() => setToastState((prev) => ({ ...prev, visible: false })), 5000);
    }, []);

    return { toastState, showToast };
}