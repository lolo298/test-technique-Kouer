"use client";
import Card from "@/components/Card";
import { useUser, useProduct } from "@/utils/hooks";

function Home() {
  const user = useUser();
  const data = useProduct();

  if (!user) {
    return (
      <h2 className="text-4xl font-normal">
        merci de vous connecter pour voir nos produits
      </h2>
    );
  }

  return (
    <>
      <h2 className="text-4xl font-normal">Notre sélection</h2>
      <ul className="flex gap-4">
        {data?.map((product) => (
          <li key={product.id}>
            <Card product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
