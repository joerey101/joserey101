"use client";

interface DevicePreviewProps {
    url: string;
    mode: "mobile" | "desktop";
    className?: string;
}

export default function DevicePreview({ url, mode, className = "" }: DevicePreviewProps) {
    if (mode === "mobile") {
        return (
            <div className={`flex flex-col items-center gap-4 ${className}`}>
                <span className="text-[10px] uppercase tracking-widest font-bold text-carbon/40">Pixel 7 Pro View (412px)</span>
                <div className="relative w-[412px] h-[915px] bg-background-light border-[12px] border-carbon rounded-[2.5rem] shadow-2xl overflow-hidden ring-4 ring-black/5 z-10">
                    {/* Camera Hole Punch */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 size-4 bg-black rounded-full z-[100] pointer-events-none" />

                    {/* Screen Content - Isolated via Iframe */}
                    <iframe
                        src={url}
                        className="w-full h-full border-none no-scrollbar bg-white"
                        title="Mobile Preview"
                    />

                    {/* Navbar Line (Android) */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[140px] h-[4px] bg-black/20 rounded-full z-[100] pointer-events-none" />
                </div>
            </div>
        );
    }

    return (
        <div className={`flex flex-col items-center gap-4 w-full ${className}`}>
            <span className="text-[10px] uppercase tracking-widest font-bold text-carbon/40">Desktop View (Responsive)</span>
            <div className="relative w-full aspect-[16/10] bg-background-light border-[16px] border-carbon rounded-[2rem] shadow-2xl overflow-hidden ring-4 ring-black/5 z-10">
                {/* Camera Dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[24px] bg-black rounded-b-xl z-[100] flex justify-center items-center pointer-events-none">
                    <div className="size-2 bg-gray-800 rounded-full" />
                </div>

                {/* Screen Content - Isolated via Iframe */}
                <iframe
                    src={url}
                    className="w-full h-full border-none no-scrollbar bg-white"
                    title="Desktop Preview"
                />
            </div>
            {/* Base */}
            <div className="w-full max-w-[90%] h-[20px] bg-gray-300 rounded-b-xl shadow-lg -mt-8 z-0 mx-auto" />
        </div>
    );
}
