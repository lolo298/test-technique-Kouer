import Image from "next/image";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-full">
      <div className="flex-1 p-16 flex flex-col items-center">
        <div className="w-32 h-16 relative">
          <Image src="/logo.svg" alt="logo" fill />
        </div>
        {children}
      </div>
      <div className="flex-[2] relative">
        <Image src="/grange.svg" alt="grange" fill className="object-cover" />
      </div>
    </main>
  );
}

export default Layout;
