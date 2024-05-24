import Link from 'next/link'

export default function Navbar() {
  return (
    <main className='flex gap-20 align-center justify-center'>
      <section className='flex gap-96'>

        <div>
          <h1 className="text-center p-4 bg-blue-800 p-2 mt-3 rounded-lg">Navbar</h1>
        </div>

        <div className='align-center justify-center'>

          <ul className='flex gap-20 align-bottom justify-center mt-5'>

            <li><a href="#product" id='nav-link'>Product</a></li>
            <li><a href="#" id='nav-link'>About</a></li>
            <li><a href="#" id='nav-link'>Contact</a></li>

          </ul>

        </div>

      </section>
    </main>
  );
}