import Enum from "Enums/Enum";

class VideoFilter extends Enum {
    private constructor(public filter: string, public name: string) { super() }

    public static readonly NO_FILTERS = new VideoFilter('', '');
    public static readonly DOWNSCALE_720P = new VideoFilter('scale=-1:720', '720p');
    public static readonly NUKED_720P = new VideoFilter('scale=-1:720,hqdn3d=0:0:3:3,gradfun,unsharp', 'filtered-720p');
    public static readonly NUKED = new VideoFilter('hqdn3d=0:0:3:3,gradfun,unsharp', 'filtered');
    public static readonly LIGHTDENOISE = new VideoFilter('hqdn3d=0:0:3:3', 'lightdenoise');
    public static readonly HEAVYDENOISE = new VideoFilter('hqdn3d=1.5:1.5:6:6', 'heavydenoise');
    public static readonly UNSHARP = new VideoFilter('unsharp', 'unsharp');
    public static readonly CUSTOM = new VideoFilter('', '');
};

export default VideoFilter;