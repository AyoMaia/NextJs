import Link from 'next/link'

export default function Forms() {
  return (
    <main>
      <section className='p-12 items-center justify-center h-screen flex gap-10'>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3468605822513!2d-46.70367059999999!3d-23.555982800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57b685590325%3A0xae81018a241d2d5d!2sAv.%20Pedroso%20de%20Morais%2C%202274%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005420-003!5e0!3m2!1spt-BR!2sbr!4v1716572532010!5m2!1spt-BR!2sbr" width="600" height="450" className='border-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        

        <div className='w-1/2 h-screen flex items-center justify-center flex-col'>


            <div className='rounded-xl border-solid border-white px-36 py-10 border-2 flex-col items-center justify-center flex'>
                
                <h1 className='text-center font-semibold text-white text-4xl my-8'>Contact Form</h1>

                <form action="#" method='POST' className='flex flex-col justify-center gap-6'>
                <input type="text" name='name' placeholder='Digite seu nome' className='p-1' />
                <input type="text" name='email' placeholder='Digite seu E-mail' className='p-1' />
                <input type="text" name='tel' placeholder='Digite seu Telefone' className='p-1' />
                <textarea name="message" id="message" placeholder='Digite uma mensagem'></textarea>

                <button type='submit' className='py-3 px-4 bg-slate-200'>Send</button>

                </form>
                

            </div>

        </div>
      </section>
    </main>
  );
}