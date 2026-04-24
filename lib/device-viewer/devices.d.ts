export declare const DEVICES: {
    readonly pixel7pro: {
        readonly name: "Pixel 7 Pro";
        readonly width: 412;
        readonly height: 915;
        readonly dpr: 3;
    };
    readonly pixel7: {
        readonly name: "Pixel 7";
        readonly width: 412;
        readonly height: 915;
        readonly dpr: 2.625;
    };
    readonly iphone15: {
        readonly name: "iPhone 15";
        readonly width: 393;
        readonly height: 852;
        readonly dpr: 3;
    };
    readonly iphone15pm: {
        readonly name: "iPhone 15 Pro Max";
        readonly width: 430;
        readonly height: 932;
        readonly dpr: 3;
    };
    readonly iphoneSE: {
        readonly name: "iPhone SE";
        readonly width: 375;
        readonly height: 667;
        readonly dpr: 2;
    };
    readonly ipadMini: {
        readonly name: "iPad Mini";
        readonly width: 744;
        readonly height: 1133;
        readonly dpr: 2;
    };
    readonly ipadPro: {
        readonly name: "iPad Pro 11";
        readonly width: 834;
        readonly height: 1194;
        readonly dpr: 2;
    };
    readonly desktop: {
        readonly name: "Desktop";
        readonly width: 1440;
        readonly height: 900;
        readonly dpr: 1;
    };
};
export type DeviceId = keyof typeof DEVICES;
