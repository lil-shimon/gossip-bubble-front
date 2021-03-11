import {FC} from "react";
import Link from "next/link";

export const BackButton: FC = () => {
    return (
        <Link href='/main-page'>
            <div className='flex cursor-pointer mt-12 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     className='w-6 h-6 mr-3'>
                    <path fillRule="evenodd"
                          d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                          clipRule="evenodd"/>
                </svg>
                <span>Back to main page</span>
            </div>
        </Link>
    )
}
