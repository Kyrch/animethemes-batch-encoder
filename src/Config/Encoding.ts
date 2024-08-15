import BitrateMode from "Enums/BitrateMode";
import VideoFilter from "Enums/VideoFilter";

class EncodingConfig {
    // Config keys
    public static readonly configAllowedFiletypes = 'AllowedFileTypes';
    public static readonly configEncodingModes = 'EncodingModes';
    public static readonly configCrfs = 'CRFs';
    public static readonly configCbrBitrates = 'CBRBitrates';
    public static readonly configCbrMaxBitrates = 'CBRMaxBitrates';
    public static readonly configThreads = 'Threads';
    public static readonly configLimitSizeEnable = 'LimitSizeEnable';
    public static readonly configAlternateSourceFiles = 'AlternateSourceFiles';
    public static readonly configCreatePreview = 'CreatePreview';
    public static readonly configIncludeUnfiltered = 'IncludeUnfiltered';

    // Default config keys
    public static readonly configDefaultVideoStream = 'DefaultVideoStream';
    public static readonly configDefaultAudioStream = 'DefaultAudioStream';

    // Default config values
    public static readonly defaultAllowedFiletypes = '.avi,.m2ts,.mkv,.mp4,.wmv';
    public static readonly defaultEncodingModes = `${BitrateMode.VBR.name},${BitrateMode.CBR.name}`;
    public static readonly defaultCrfs = '12,15,18,21,24';
    public static readonly defaultCbrBitrates = '5600';
    public static readonly defaultCbrMaxBitrates = '6400';
    public static readonly defaultThreads = '4';
    public static readonly defaultLimitSizeEnable = true;
    public static readonly defaultAlternateSourceFiles = false;
    public static readonly defaultCreatePreview = false;
    public static readonly defaultIncludeUnfiltered = true;
    public static readonly defaultVideoFilters = {
        'filtered': VideoFilter.NUKED.filter,
        'lightdenoise': VideoFilter.LIGHTDENOISE.filter,
        'heavydenoise': VideoFilter.HEAVYDENOISE.filter,
        'unsharp' : VideoFilter.UNSHARP.filter,
    };

    public constructor(
        public allowedFiletypes,
        public encodingModes,
        public crfs,
        public cbrBitrates,
        public cbrMaxBitrates,
        public threads,
        public limitSizeEnable,
        public alternateSourceFiles,
        public createPreview,
        public includeUnfiltered,
        public videoFilters,
        public defaultVideoStream,
        public defaultAudioStream,
    ) {}

    getDefaultStream(streamType: string): string|null {
        switch (streamType) {
            case 'video':
                return this.defaultVideoStream;
            case 'audio':
                return this.defaultAudioStream;
            default:
                return null;
        }
    }
};

export default EncodingConfig;