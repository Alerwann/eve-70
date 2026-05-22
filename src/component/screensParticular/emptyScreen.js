import Image from "next/image"
export default function EmptyScreen(){
    return(
        <main className="flex flex-col justify-center items-center">
            <span className="text-2xl font-bold ">Pas encore de post pour cette catégorie..</span>
          <Image
          src="/assets/voyage.jpeg"
          height={200}
          width={200}
          alt="attente de posts"
          className="rounded-full mt-3"
          /> 
        </main>
    )
}