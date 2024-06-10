import Link from 'next/link'

export default function Aboutus() {
  return (
    <main>
      <section className='h-screen p-10 flex bg-gray-700 items-center justify-center mt-36'>
        <div className='w-1/2 bg-slate-200 h-96'>

        </div>

        <div className='w-1/2 items-center flex flex-col justify-center p-8'>
          <h3 className='text-center text-white text-xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <p className='text-gray-300 mt-8 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae reprehenderit veritatis? Harum, ut dolorem vero quos iusto id ipsum at rerum veniam? Earum modi magni minima eius.</p>
          <button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 py-4 px-8 mt-10 text-white text-xl shadow-xl'>Contact</button>
        </div>
      </section>
    </main>
  );
}