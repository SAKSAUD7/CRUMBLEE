export const WHATSAPP_NUMBER = "917411091256"; // Clean number without special chars
export const DEFAULT_MESSAGE = "Hi CRUMBELLE, I'd like to place an order.";

export const getWhatsAppLink = (message: string = DEFAULT_MESSAGE): string => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const openWhatsApp = (message?: string) => {
    if (typeof window !== 'undefined') {
        window.open(getWhatsAppLink(message), '_blank');
    }
};
