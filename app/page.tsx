import Image from "next/image";

'use client';
import { useRef, useState } from 'react'; 
import { FaPlay, FaPause, FaMusic } from 'react-icons/fa';  // 导入播放、暂停和音乐图标


export default function Home() {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);  // 明确指定引用类型为 HTMLAudioElement


  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };


  return (
<section> {/* Container */} <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"> {/* Component */} <div className="flex flex-col items-center"> {/* Heading Div */} <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
        <h2 className="text-3xl font-semibold capitalize md:text-5xl">Pick an<span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center px-4 text-white">instrument</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">Everyone can play an instrument</p>
      </div> {/* Blog Div */} <div className="mb-6 grid grid-cols-1 justify-items-center gap-8 sm:justify-items-stretch md:mb-10 md:grid-cols-3 md:gap-4 lg:mb-12"> {/* Blog Item */} <a href="#" className="flex flex-col gap-4 rounded-2xl border border-solid border-[#b1b1b1] bg-[#f5f8ff] p-6 font-bold text-black transition hover:[box-shadow:rgb(0,_0,_0)_7px_7px]">
          <img src="guitar.jpg" alt="" className="inline-block h-60 w-full object-cover" />
          <div className="w-full pt-4">
            <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">lifestyle</p>
            <p className="mb-4 text-xl font-semibold">Guitar</p>
            <p className="mb-5 font-normal text-[#636262] lg:mb-8">A versatile string instrument popular in many music genres, ideal for both solo and ensemble play.</p>
        {/* 音乐播放  */}
      <div style={{ padding: 20, textAlign: 'center' }}>
      <audio ref={audioRef} src="/englishpod_B0001rv.mp3" preload="none"></audio>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <FaMusic size={30} />
        <button onClick={togglePlayPause} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
        </button>
      </div>


    </div>

            {/* <div className="mx-auto flex max-w-[480px] flex-row items-center text-left">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63919c4a64bf2667d0775e71_Ellipse%2027.png" alt="" className="mr-4 inline-block h-16 w-16 rounded-full object-cover" />
              <div className="flex flex-col items-start">
                <h6 className="text-base font-semibold">Laila Bahar</h6>
                <div className="flex items-start max-[991px]:flex-col lg:items-center">
                  <p className="text-sm text-[#636262]">Sept 28, 2022</p>
                  <p className="ml-2 mr-2 text-sm text-[#636262] max-[991px]:hidden">-</p>
                  <p className="text-sm text-[#636262]">6 mins read</p>
                </div>
              </div>
            </div> */}
          </div>
        </a> {/* Blog Item */} <a href="#" className="flex flex-col gap-4 rounded-2xl border border-solid border-[#b1b1b1] bg-[#f5f8ff] p-6 font-bold text-black transition hover:[box-shadow:rgb(0,_0,_0)_7px_7px]">
          <img src="piano.jpg" alt="" className="inline-block h-60 w-full object-cover" />
          <div className="w-full pt-4">
            <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">lifestyle</p>
            <p className="mb-4 text-xl font-semibold">Piano</p>
            <p className="mb-5 font-normal text-[#636262] lg:mb-8">A keyboard instrument with a broad range, essential for both solo performances and ensemble involvement.</p>
            
            
            {/* <div className="mx-auto flex max-w-[480px] flex-row items-center text-left">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390542e809b5c72a0cdcb99_Ellipse.jpg" alt="" className="mr-4 inline-block h-16 w-16 rounded-full object-cover" />
              <div className="flex flex-col items-start">
                <h6 className="text-base font-semibold">Laila Bahar</h6>
                <div className="flex items-start max-[991px]:flex-col lg:items-center">
                  <p className="text-sm text-[#636262]">Sept 28, 2022</p>
                  <p className="ml-2 mr-2 text-sm text-[#636262] max-[991px]:hidden">-</p>
                  <p className="text-sm text-[#636262]">6 mins read</p>
                </div>
              </div>
            </div> */}
          </div>
        </a> {/* Blog Item */} <a href="#" className="flex flex-col gap-4 rounded-2xl border border-solid border-[#b1b1b1] bg-[#f5f8ff] p-6 font-bold text-black transition hover:[box-shadow:rgb(0,_0,_0)_7px_7px]">
          <img src="violin.jpg" alt="" className="inline-block h-60 w-full object-cover" />
          <div className="w-full pt-4">
            <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">lifestyle</p>
            <p className="mb-4 text-xl font-semibold">Violin</p>
            <p className="mb-5 font-normal text-[#636262] lg:mb-8">A high-pitched string instrument, known for its vibrant tone, crucial in orchestras and chamber music.</p>
            {/* <div className="mx-auto flex max-w-[480px] flex-row items-center text-left">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905435069fb009d43abbb1_Ellipse-2.jpg" alt="" className="mr-4 inline-block h-16 w-16 rounded-full object-cover" />
              <div className="flex flex-col items-start">
                <h6 className="text-base font-semibold">Laila Bahar</h6>
                <div className="flex items-start max-[991px]:flex-col lg:items-center">
                  <p className="text-sm text-[#636262]">Sept 28, 2022</p>
                  <p className="ml-2 mr-2 text-sm text-[#636262] max-[991px]:hidden">-</p>
                  <p className="text-sm text-[#636262]">6 mins read</p>
                </div>
              </div>
            </div> */}
          </div>
        </a>
      </div>
      <a href="#" className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]">Switch</a>
    </div>
  </div>
  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639832e3e7aba393eeeba215_plain6.svg" alt="" className="absolute bottom-auto left-0 right-auto top-0 inline-block sm:bottom-auto sm:left-4 sm:right-auto sm:top-8 md:left-20 md:top-16" />
</section>
  );
}



