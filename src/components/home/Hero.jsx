import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import dashboard from "../../assets/images/dashboard.jpeg";

export default function Hero(){

return(

<section className="min-h-[90vh] flex items-center">

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

<div>

<motion.h1

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:.7}}

className="text-6xl font-black leading-tight"

>

Complete Business
Management Software

</motion.h1>

<p className="mt-8 text-slate-400 text-lg leading-9">

Madonna Software HUB develops modern software solutions for Garments, Retail Shops, Schools and Businesses.

GST Billing • Inventory • Sales • Purchase • Reports • Cloud Backup
</p>

<div className="flex gap-5 mt-10">

<button className="bg-blue-600 px-8 py-4 rounded-xl flex items-center gap-2">

Download App

<ArrowRight size={20}/>

</button>

<button className="border border-slate-700 px-8 py-4 rounded-xl">

View Products

</button>

</div>

</div>

<div className="relative flex justify-center items-center">

  {/* Background Glow */}
  <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-500/20 blur-3xl"></div>

  {/* Phone Mockup */}
  <div className="relative bg-black rounded-[40px] p-3 border-[8px] border-slate-700 shadow-2xl">

    <img
      src={dashboard}
      alt="Garments POS Dashboard"
      className="w-[300px] rounded-[28px]"
    />

  </div>

</div>

</div>

</section>

);

}