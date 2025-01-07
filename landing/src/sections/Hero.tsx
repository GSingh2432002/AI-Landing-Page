"use client";
import Stars from "@/components/Stars";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex md:h-[800px] items-center h-[492px] overflow-hidden relative [mask-image:linear-gradient(to_top,transparent,black_10%_90%,transparent)]">
      <Stars />
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/* Start Planet */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full bg-purple-500 top-1/2 left-1/2 border-white/20 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* End Planet */}
      {/* Start of 1st Ring */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute h-5 w-5 top-1/2 left-full border border-white rounded-full -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/* End of 1st Ring */}
      {/* Start of 2nd Ring */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "-1turn" }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      ></motion.div>
      {/* End of 2nd Ring*/}
      {/* Start of 3rd Ring */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full opacity-20 border border-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      >
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-y-1/2 -translate-x-1/2"></div>
      </motion.div>
      {/* End of 3rd Ring */}
      <div className="container relative mt-16">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-5xl md:text-[168px] font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center whitespace-nowrap"
        >
          Falcon AI
        </motion.h1>

        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Falcon AI — where speed meets precision to power smarter decisions.
        </p>
        <div className="flex justify-center mt-5">
          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 10px 20px rgba(140, 69, 255, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button>Explore Falcon</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
