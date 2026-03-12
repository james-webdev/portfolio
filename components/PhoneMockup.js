export default function PhoneMockup() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative">
        {/* Phone outer case */}
        <div className="relative w-[300px] h-[610px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[50px] p-2 shadow-2xl">

          {/* Side button (power) */}
          <div className="absolute right-0 top-[120px] w-1 h-16 bg-gray-700 rounded-l" />

          {/* Volume buttons */}
          <div className="absolute left-0 top-[100px] w-1 h-8 bg-gray-700 rounded-r" />
          <div className="absolute left-0 top-[140px] w-1 h-8 bg-gray-700 rounded-r" />

          {/* Inner bezel */}
          <div className="relative w-full h-full bg-black rounded-[44px] p-1">

            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-20">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <div className="w-14 h-1.5 bg-gray-800 rounded-full" />
                <div className="w-2 h-2 bg-gray-800 rounded-full" />
              </div>
            </div>

            {/* Screen */}
            <div className="relative w-full h-full bg-black rounded-[40px] overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                <source src="/videos/AO-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Shine/reflection effect */}
        <div className="absolute inset-0 rounded-[50px] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
