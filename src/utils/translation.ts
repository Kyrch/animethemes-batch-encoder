import translations from '../../lang';

const init = () => {
    global.__ = (key: string, replace: Record<string, string> = {}, locale: string = 'en'): string => {
        const keys = key.split('.');
        let translation = translations[locale] as any;
    
        for (const k of keys) {
            translation = translation?.[k];
            if (!translation) {
                return key;
            }
        }
    
        return Object.keys(replace).reduce((str, placeholder) => {
            return str.replace(`:${placeholder}`, replace[placeholder]);
        }, translation);
    };
}

export default init;