import { Product } from "@/app/types/Product";
import Image from "next/image";
import Link from "next/link";


interface ProductCardProps{
    product:Product;
}

export default function ProductCard ({product}:ProductCardProps){

    return(
        <div className="bg-[#121826] border border-gray-800 rounded-2xl p-5 flex flex-col justify-between transition-all hover:border-gray-700">
      <div>
       
        <span className="inline-block text-[10px] uppercase tracking-wider font-bold bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded mb-4">
          {product.category}
        </span>
        
       
        <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-[#161f30] flex items-center justify-center">
          <Image 
            src={product.image} 
            alt={product.name}
            width={200}
            height={200}
            className="object-contain p-4 hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-white">{product.name}</h3>
          <span className="font-bold text-indigo-400 whitespace-nowrap">{product.price} DH</span>
        </div>

        <p className="text-gray-400 text-xs line-clamp-2 mb-6">
          {product.description}
        </p>
      </div>

      <Link 
        href={`/products/${product.slug}`}
        className="w-full text-center bg-gray-950 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-xl border border-gray-800 text-sm transition"
      >
        View Details
      </Link>
    </div>
    )

}