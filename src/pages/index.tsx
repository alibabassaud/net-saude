import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react'
import uuid from 'uuid';
import axios from 'axios';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const id = uuid.v4;
  const router = useRouter();
  const { cpf, nasc }: any = router.query;
  const [ip, setIp] = useState()

  useEffect(() => {

    

  }, [])


  const nascimento = new Date(nasc)
  return (
    <main
      className={`flex h-[100vh] flex-col items-center justify-center p-24 ${inter.className} bg-[url('/entregaflipped.png')] bg-cover bg-center`}
    >
      <div
        className={``}
      >

        <div
          className='flex flex-col p-4 bg-white w-[380px] rounded-md shadow-xl'
        >
          <div className='mx-auto mb-4' ><img src="/logo.gif" alt="logo" /></div>
          <h1 className='text-slate-800 mb-2 text-center font-semibold text-xl'>Busque seu exame</h1>
          <p className='text-slate-800 mb-2 text-center text-sm'>Por segurança você ja foi identificado</p>
          <p className='text-slate-800 text-center text-sm'>O IP do seu equipamento é <span className='text-sky-600'>68.17.151.129</span></p>
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
                nasc ?
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nasc" type="text" placeholder="nacimentos" value={new Intl.DateTimeFormat('pt-BR').format(nascimento)}></input>
                  :
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nasc" type="text" placeholder="nacimentos"></input>
              }
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Protocolo (se houver)
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="protocol" type="text" placeholder="protocol" value={'4654684683454879548'}></input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Exame Feito em
              </label>

              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="protocol" placeholder="protocol">
                <option value="1">Este ano</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-medium py-1 px-1 rounded'>
                Buscar
              </button>
            </div>
          </form>

        </div>
      </div>
    </main>
  )
}
