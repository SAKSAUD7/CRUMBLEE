import React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            // Allow any property on any element to bypass R3F type strictness in mixed envs
            // [elemName: string]: any; 

            // Or specifically for common three elements if needed, but R3F normally handles this.
            // logic: if R3F types are failing, this catch-all helps.
            [elemName: string]: any;
        }
    }
}
