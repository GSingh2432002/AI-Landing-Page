import Stars from '@/components/Stars';
import { Button } from '@/components/Button';

export default function Hero() {
  return (
    <section className="relative h-[492px] md:h-[800px] flex items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
      <Stars />
      <div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]'></div>
      {/* Start Planet */}
      <div className='absolute h-64 w-64 md:w-96 md:h-96 bg-purple-500 rounded-full border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]'></div>
      {/* End Planet */}
      {/* Start of 1st Ring */}
      <div className='absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute h-5 w-5 left-full border border-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
            <div className='h-2 w-2 bg-white rounded-full'></div>
        </div>
      </div>
      {/* End of 1st Ring */}
      {/* Start of 2nd Ring */}
      <div className='absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed'></div>
      {/* End of 2nd Ring*/}
      {/* Start of 3rd Ring */}
      <div className='absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute h-2 w-2 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      </div>
      {/* End of 3rd Ring */}
      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Falcon AI
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
            Falcon AI — where speed meets precision to power smarter decisions.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Explore More</Button>
        </div>
      </div>
    </section>
  );
}