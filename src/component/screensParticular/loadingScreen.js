import Image from "next/image"

export default function LoadingScreen(){
    return(
<main className=" inset-0  items-center justify-center z-50 flex flex-col gap-5">
      <h2 className="font-extrabold text-2xl text-center">En cours de chargement ...</h2>
  <div className="relative w-100 h-100 flex items-center justify-center">
    

    <svg className="absolute inset-0 w-full h-full transform -rotate-90 bg-black rounded-full" viewBox="0 0 100 100">
      <title>Maman recharge </title>
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        className="stroke-slate-700" 
        strokeWidth="3" 
        fill="transparent" 
      />
    
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        className="stroke-indigo-500 animate-spin origin-center" 
        strokeWidth="3" 
        fill="transparent" 
        strokeDasharray="283" 
        strokeDashoffset="70"
        strokeLinecap="round"
      />
    </svg>

   
    <div className="rounded-full border-2 overflow-hidden border-slate-800 z-10 ">
      <Image 
        src="/assets/dors.jpeg" 
        width={150}
        height={150}
        alt="Loading..." 
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</main>)}