export {};

declare global {
    function __(key: string, replace?: Record<string, string>, locale?: string): string;
}