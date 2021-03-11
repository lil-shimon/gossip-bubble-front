import {ChangeEvent, FC} from "react";

export const UsernameField: FC<{username: string; setUsername: any}> = ({username, setUsername}) => {
    return (
        <input name="username" type="text" autoComplete="username" required
               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
               placeholder="User name"
               value={username}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        />
    )
}
