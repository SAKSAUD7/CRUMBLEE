export const isLowPowerDevice = (): boolean => {
    if (typeof window === 'undefined') return false;

    // Check for hardware concurrency (low core count often means mobile/low-end)
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
        return true;
    }

    // Check for save data mode
    if ((navigator as any).connection?.saveData) {
        return true;
    }

    return false;
};
