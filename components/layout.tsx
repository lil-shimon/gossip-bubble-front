import Head from "next/head";
import Link from "next/link";

//@ts-ignore
export default function Layout({children, title = "default Header"}: any) {
    return (
        <div className='flex justify-center items-center flex-col min-h-screen bg-gray-800 text-sm font-mono'>
            <Head>
                <title>{title}</title>
            </Head>
           <main className='flex flex-1 justify-center items-center flex-col w-screen'>
                {children}
            </main>
            <footer className='w-full h-6 flex justify-center items-center text-gray-500 text-sm'>
                @shimon
           </footer>
        </div>
    )
}
