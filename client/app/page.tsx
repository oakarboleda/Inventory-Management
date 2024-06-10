
import {NextUIProvider} from "@nextui-org/react";
import NavBar from "@/components/atoms/NavBar";

export default async function Index() {



  return (
      <NextUIProvider>
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <NavBar />

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">

        <main className="flex-1 flex flex-col gap-6">
          <h1> Inventory Management App</h1>
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
      </NextUIProvider>
  );
}
