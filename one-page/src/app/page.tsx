import Image from "next/image";


//components
import Product from './components/Product'
import Aboutus from './components/Aboutus'
import Forms from './components/Forms'

export default function Home() {
  return (
    <main className="">
      <section className="h-screen">
        <h1 className="text-center m-20 text-white z-10 text-6xl font-semibold">Your Dream is Here</h1>

        <div className=" flex align-center justify-center">
         <Image src='/postimage/black-bg.jpg' alt="Background image" className="bg-img " fill></Image>


        </div>
      </section>

      <section id="Product">

        <div><h2 className="text-4xl text-center text-white font-semibold -mt-24 p-2">Technology and comfort from another world</h2></div>

        <div className="flex justify-center items-center gap-10 mt-10">

          <div className="cursor-pointer">
            <div id="card" className="w-80 h-80 rounded-xl flex justify-center -z-20 m-4 items-center overflow-hidden cursor-pointer">

              <Image className="relative -z-5 scale-110 transition-all duration-300 hover:scale-100 cursor-pointer" src='/postimage/interior-aventador.jpg' alt='interior' width={400} height={900}></Image>

              <div className="absolute text-center flex items-center justify-center flex-col mt-40">
                <h3 className=" text-white font-semibold text-3xl ">Interior</h3>
                <p className="text-white w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <div className="cursor-pointer">
            <div id="card" className="w-80 h-80 rounded-xl flex justify-center -z-20 m-4 items-center overflow-hidden cursor-pointer">
              
              <Image  id="motor" className="relative -z-5 scale-110 transition-all duration-300 hover:scale-100 cursor-pointer w-max" src='/postimage/motorv12.jpg' alt='motor' width={600} height={500}></Image> 

              

              <div className="absolute text-center flex items-center justify-center flex-col mt-40">
                <h3 className=" text-white font-semibold text-3xl ">Motor</h3>
                <p className="text-white w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <div className="cursor-pointer">
            <div id="card" className="w-80 h-80 rounded-xl flex justify-center -z-20 m-4 items-center overflow-hidden cursor-pointer">

              <Image className="relative -z-5 scale-110 transition-all duration-300 hover:scale-100 cursor-pointer" src='/postimage/brake.jpeg' alt='brake' width={400} height={300}></Image>

              <div className="absolute text-center flex items-center justify-center flex-col mt-40">
                <h3 className=" text-white font-semibold text-3xl ">Brake</h3>
                <p className="text-white w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

  

        </div>

      </section>

      <Product/>
      <Aboutus/>
      <Forms/>
    </main>
  );
}
