import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import data from '@/base/data';

import { useEffect, useState } from 'react'

import Link from 'next/link';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const id = uuid.v4;
  const router = useRouter();
  const { cpf }: any = router.query;
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(data[`${cpf}`])
    console.log(user)
  }, [])

  return (
    <main
      className={`flex h-[100vh] flex-col items-center justify-center p-24 ${inter.className} bg-[url('/entregaflipped.png')] bg-cover bg-center`}
    >
      <div
        className={``}
      >
        {
          data[`${cpf}`] ?
          <div
          className='flex flex-col p-4 bg-white w-[380px] rounded-md shadow-xl'
        >
          <div className='mx-auto mb-4' ><img src="/logo.gif" alt="logo" /></div>
          <h1 className='text-slate-800 mb-2 text-center font-semibold text-xl'>Busque seu exame</h1>
          <p className='text-slate-800 mb-2 text-center text-sm'>Por segurança você ja foi identificado</p>
          <p className='text-slate-800 text-center text-sm'>O IP do seu equipamento é <span className='text-sky-600'>68.16.151.129</span></p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                CPF
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="CPF" type="text" placeholder="cpf" value={cpf}></input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Data de nascimento
              </label>
              {
                data[`${cpf}`] ?
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nasc" type="text" placeholder="nacimentos" value={data[`${cpf}`].data_nascimento}></input>
                  :
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nasc" type="text" placeholder="nacimentos"></input>
              }
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Protocolo (se houver)
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="protocol" type="text" placeholder="protocol" value={'8785547448548'}></input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Exame Feito em
              </label>

              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="protocol" placeholder="protocol">
                <option value="1">Este ano</option>
              </select>
            </div>

            <Link href={{ pathname: '/exame', query: { cpf: data[`${cpf}`].cpf } }} className="flex items-center justify-between">
              <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-medium py-1 px-1 rounded'>
                Buscar
              </button>
            </Link>
          </form>

        </div> : ""
        }
      </div>
    </main>
  )
}
