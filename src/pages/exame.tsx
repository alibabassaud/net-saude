import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MdArrowBack, MdWallpaper, MdAssignment } from "react-icons/md";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import data from '@/base/data';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const router = useRouter();
    const { cpf }: any = router.query;
    const [user, setUser] = useState()

    useEffect(() => {
    }, [])

    return (
        <main
            className={`flex min-h-screen flex-col items-center  justify-center p-24 ${inter.className} bg-[url('/entregaflipped.png')] bg-cover bg-center`}
        >
            <button className='bg-blue-500 mb-4 w-32 hover:bg-blue-700 text-white font-normal py-1 px-1 rounded'>
                <div className='flex justify-center items-center '>
                    <MdArrowBack fontSize={20} /> <span>Voltar</span>
                </div>
            </button>

            <h1 className='text-white text-center mb-8 font-semibold text-xl'>Bem vindo a sua lista de exames</h1>

            <div
                className={``}
            >
                <div
                    className='flex flex-col p-4 bg-white w-[380px] rounded-md shadow-xl'
                >
                    {
                    data[`${cpf}`] ?
                    <h1 className='text-slate-900 font-semibold text-xl'>{data[`${cpf}`].nome}</h1> : ""
                    }
                    <p className='text-slate-500 mb-2  text-sm'>idade:</p>
                    {
                        data[`${cpf}`] ? 
                        <p className='text-slate-500 mb-2  text-sm'>Estudo:   : {data[`${cpf}`].exame}</p> : ""

                    } 
                    {
                        data[`${cpf}`] ? 
                        <p className='text-slate-500 mb-4  text-sm'>Data de realização: {data[`${cpf}`].data_realizacao}, 12:54</p> : ""
                    }
                    <div className='flex'>
                        <button className='bg-green-500 mb-4 px-4 w-full hover:bg-green-700 text-white font-normal py-1 rounded'>
                            <div className='flex justify-center items-center '>
                                <MdWallpaper fontSize={18} /> <span className='ml-2' onClick={() => { router.push('/image') }}>Imagens</span>
                            </div>
                        </button>
                        {
                            data[`${cpf}`] ? 
                            <button className='bg-green-500 mb-4 ml-2 w-full hover:bg-green-700 text-white font-normal py-1 rounded'>
                            <div className='flex justify-center items-center '>
                                <MdAssignment fontSize={18} /> <span className='ml-2' onClick={() => { router.push(`${data[`${cpf}`].cpf}.pdf`) }} >Laudo</span>
                            </div>
                        </button> : ""
                        }
                    </div>
                    <button className='bg-blue-500 mb-4 px-4 hover:bg-blue-700 text-white font-normal py-1 rounded' onClick={() => { alert('Função indisponivel no momento tente mais tarde') }}>
                        <div className='flex justify-center items-center '>
                            <MdAssignment fontSize={18} /> <span className='ml-2'>email</span>
                        </div>
                    </button>
                </div>
            </div>
        </main>
    )
}
