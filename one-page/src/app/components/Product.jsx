import Link from 'next/link'
import Image from "next/image";

export default function Product() {
  return (
    <main id='product'> 

        

      <section className='flex-col justify-center items-center bg-grey-700 rounded-xl p-10 mt-10'>


      <div className='flex items-center justify-center gap-36'>

        <div className='w-1/2 h-80 bg-slate-200'></div>
        <h3 className='text-white w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni ab ullam illo id cupiditate dignissimos soluta deleniti enim quod in, corporis aut, neque assumenda adipisci. Exercitationem id eligendi quas.</h3>
      </div>

      <div className='flex items-center justify-center gap-36 mt-10'>

        <h3 className='text-white w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque sequi laborum repellendus quibusdam assumenda similique a, amet perspiciatis expedita molestias ipsa doloribus dolorem, voluptate saepe non quia! Excepturi, dolor?</h3>

        <div className='w-1/2 h-80 bg-slate-200'></div>

      </div>

      <div className='flex items-center justify-center gap-36 mt-10'>

        <div className='w-1/2 h-80 bg-slate-200'></div>

        <h3 className='text-white w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque sequi laborum repellendus quibusdam assumenda similique a, amet perspiciatis expedita molestias ipsa doloribus dolorem, voluptate saepe non quia! Excepturi, dolor?</h3>


      </div>


      </section>


    </main>
  );
}