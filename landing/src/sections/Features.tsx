'use client';
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from 'next/image';
import productImage from "../assets/product-image.png";

const tabs = [
    {
        icon: "/assets/lottie/vroom.lottie",
        title: "User-friendly dashboard",
        isNew: false,
        backgroundPositionX: 0,
        backgroundPositionY: 0,
        backgroundSizeX: 150,
    },
    {
        icon: "/assets/lottie/click.lottie",
        title: "One-click optimization",
        isNew: false,
        backgroundPositionX: 98,
        backgroundPositionY: 100,
        backgroundSizeX: 135,
    },
    {
        icon: "/assets/lottie/stars.lottie",
        title: "Smart keyword generator",
        isNew: true,
        backgroundPositionX: 100,
        backgroundPositionY: 27,
        backgroundSizeX: 177,
    },
];

export const Features = () => {
    return (
        <section className="py-20 md:py-24">
            <div className="container">
                <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
                    Fly Smarter, Grow Faster with Falcon AI.
                </h2>
                <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
                    From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.
                </p>
                <div className="mt-10 flex flex-col gap-3 lg:flex-row">
                    {tabs.map((tab) => (
                        <div key={tab.title} className="border boder-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1">
                        <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                            <DotLottiePlayer src={tab.icon} className="h-5 w-5" autoplay/>
                        </div>
                            <div className="font-medium">{tab.title}</div>
                            {tab.isNew && (
                                <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
                                    new
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="border border-white/20 p-2.5 rounded-xl mt-3">
                    <div
                        className="aspect-video bg-cover border border-white/20 rounded-lg"
                        style={{
                            backgroundImage: `url(${productImage.src})`,
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};