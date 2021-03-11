import {ChangeEvent, FC} from "react";

export const PasswordField: FC<{ password: string; setPassword: any }> = ({password, setPassword}) => {
    return (
        <input id="password" name="password" type="password" autoComplete="current-password"
               required
               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
               value={password}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
               placeholder="Password"/>
    )
}
