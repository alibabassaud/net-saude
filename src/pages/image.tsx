import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaRegLightbulb, FaSearch, FaArrowsAlt, FaForward, FaExpandAlt, FaPlay, FaInfoCircle } from "react-icons/fa";
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main
            className={`flex min-h-screen h-[100vh] flex-col ${inter.className} bg-slate-950`}
        >
            <div
                className='flex items-center w-full h-14 bg-blue-800 p-2'
            >
                <div
                    className='flex flex-col mr-2 items-center'
                >
                    <FaRegLightbulb fontSize={18} />
                    <span className='font-thin text-[8px]'>Brightness</span>
                </div>
                <div
                    className='flex flex-col mr-2 items-center'
                >
                    <FaSearch fontSize={18} />
                    <span className='font-thin text-[8px]'>Zoom</span>
                </div>
                <div
                    className='flex flex-col mr-2 items-center'
                >
                    <FaArrowsAlt fontSize={18} />
                    <span className='font-thin text-[8px]'>Move</span>
                </div>
                <div
                    className='flex flex-col mr-2 items-center'
                >
                    <FaForward fontSize={18} />
                    <span className='font-thin text-[8px]'>Stake</span>
                </div>
                <div
                    className='flex flex-col mr-2 items-center'
                >
                    <FaExpandAlt fontSize={18} />
                    <span className='font-thin text-[8px]'>Notes</span>
                </div>
                <div
                    className='flex flex-col mr-2 items-center'
                >
                    <FaPlay fontSize={18} />
                    <span className='font-thin text-[8px]'>Play</span>
                </div>
                <div
                    className='flex flex-col mr-2 items-center'
                >
                    <FaInfoCircle fontSize={18} />
                    <span className='font-thin text-[8px]'>Info</span>
                </div>
            </div>
            <div
                className='flex h-full items-center justify-center'
            >
                <div className="p-3">
                <Image
                    src="/exames/col/1.jpeg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                </div>
                <div className="p-3">
                <Image
                    src="/exames/col/2.jpeg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                </div>
                
            
                
            </div>
        </main>
    )
}
