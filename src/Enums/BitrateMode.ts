import Enum from "Enums/Enum";

type PassRateControlFunction = (bitrate: number, maxBitrate: number, crf: number) => string;

class BitrateMode extends Enum {
    private constructor(
        public name: string,
        public value: number,
        public firstPassRateControl: PassRateControlFunction,
        public secondPassRateControl: PassRateControlFunction,
    ) { 
        super()
    }

    public static readonly CBR = new BitrateMode(
        'CBR',
        0,
        (bitrate, maxBitrate, crf) => `-b:v ${bitrate} -maxrate ${maxBitrate} -qcomp 0.3`,
        (bitrate, maxBitrate, crf) => `-b:v ${bitrate} -maxrate ${maxBitrate} -bufsize 6000k -qcomp 0.3`,
    );

    public static readonly VBR = new BitrateMode(
        'VBR', 
        1,
        (bitrate, maxBitrate, crf) => `-crf ${crf} -b:v 0 -qcomp 0.7`,
        (bitrate, maxBitrate, crf) => `-crf ${crf} -b:v 0 -qcomp 0.7`,
    );

    public static readonly CQ = new BitrateMode(
        'CQ',
        2,
        (bitrate, maxBitrate, crf) => `-crf ${crf} -b:v ${bitrate} -qcomp 0.7`,
        (bitrate, maxBitrate, crf) => `-crf ${crf} -b:v ${bitrate} -qcomp 0.7`,
    );
};

export default BitrateMode;