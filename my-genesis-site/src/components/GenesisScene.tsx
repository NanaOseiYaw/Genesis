'use client';

export default function GenesisScene() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <iframe
        src="https://my.spline.design/yoursceneurl"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute inset-0 w-full h-full z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center p-8 backdrop-blur-sm">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide drop-shadow-[0_0_1rem_#fff]">
          Let There Be Light
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
          And God said, “Let there be light,” and there was light.
        </p>
      </div>
    </main>
  );
}
