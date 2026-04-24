import { DeviceId } from './devices';

export type { DeviceId };
export interface DeviceViewerProps {
    /** URL to load in the iframe. Default: '/' */
    url?: string;
    /** Devices to show. Default: ['pixel7pro', 'iphone15', 'ipadMini'] */
    devices?: DeviceId[];
    /** Layout mode. Default: 'grid' */
    layout?: 'grid' | 'single';
    /** Only relevant if layout='single'. Default: 'pixel7pro' */
    defaultDevice?: DeviceId;
    /** Show dimensions below each frame. Default: true */
    showDimensions?: boolean;
}
export interface DeviceFrameProps {
    deviceId: DeviceId;
    url: string;
    landscape?: boolean;
    showDimensions?: boolean;
}
