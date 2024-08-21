import { Product } from "@/types";
import Image from "next/image";

function Card({ product }: { product: Product }) {
  return (
    <div className="flex flex-col aspect-[4/5] w-52 border-slate-300 border rounded-xl overflow-hidden">
      <div className="flex-[5] w-full relative bg-red-600">
        <Image
          src={`/products/${product.preview}`}
          alt="product"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-[3]">
        <h3 className="text-xl">{product.name}</h3>
        <div>
          <span className="text-2xl text-primary">{product.price}€</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
