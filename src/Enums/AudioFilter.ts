import Enum from 'Enums/Enum';

type AudioFilterValues = (...args: any[]) => string;

class AudioFilter extends Enum {
    private constructor(public name: string, public getFilter: AudioFilterValues) { super() }

    public static readonly FADE_IN = new AudioFilter('Fade In', (value: number) => `afade=d=${value}:curve=exp`);
    public static readonly FADE_OUT = new AudioFilter('Fade Out', (start: number, value: number) => `afade=t=out:st=${start}:d=${value}`);
    public static readonly MUTE = new AudioFilter('Mute', (start: number, end: number) => `volume=enable='between(t,${start},${end})':volume=0`);
    public static readonly CUSTOM = new AudioFilter('Custom', (text: string) => text);
};

export default AudioFilter;