import {useRouter} from "next/router";
import {ChangeEvent, FormEvent, useState} from "react";
import Cookie from "universal-cookie";
import {PasswordField} from "../moleclues/Auth/passwordField";
import {UsernameField} from "../moleclues/Auth/usernameField";
import {ChangeMode} from "../moleclues/Auth/changeMode";
import {SubmitButton} from "../moleclues/Auth/submitButton";

const cookie = new Cookie()

export default function Auth() {
    const router = useRouter()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLogin, setIsLogin] = useState<boolean>(true)

    //login func
    const login = async () => {
        try {
            await fetch(
                `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/auth/jwt/create`,
                {
                    method: "POST",
                    body: JSON.stringify({username: username, password: password}),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                }
            )
                .then((res) => {
                    if (res.status === 400) {
                        throw "authenticate failed"
                    } else if (res.ok) {
                        return res.json()
                    }
                })
                .then((data) => {
                    const options = {path: '/'}
                    cookie.set('access_token', data.access, options)
                })
            await router.push('/main-page')
        } catch (err) {
            alert(err)
        }
    }

    const authUser = async (e: FormEvent<HTMLFontElement>) => {
        e.preventDefault()
        if (isLogin) {
            login()
        } else {
            try {
                await fetch(
                    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/register/`,
                    {
                        method: "POST",
                        body: JSON.stringify({username: username, password: password}),
                        headers: {
                            "Content-Type": 'application/json'
                        }
                    }
                )
                    .then((res) => {
                        if (res.status === 400) {
                            throw "authenticate failed"
                        } else if (res.ok) {
                            return res.json()
                        }
                    })
            } catch (err) {
                alert(err)
            }
            login()
        }
    }

    return (
        <div className="max-w-md w-full space-y-8">
            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                 alt="Workflow"/>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                {isLogin ? "login" : "sign up"}
            </h2>
            <form className="mt-8 space-y-6" onSubmit={authUser}>
                <input type="hidden" name="remember" value="true"/>
                <div className="rounded-md shadow-sm -space-y-px">
                    <UsernameField username={username} setUsername={setUsername}/>
                    <PasswordField password={password} setPassword={setPassword}/>
                </div>
                <div className='flex items-center justify-center'>
                    <ChangeMode isLogin={isLogin} setIsLogin={setIsLogin}/>
                </div>
                <SubmitButton isLogin={isLogin}/>
            </form>
        </div>
    )
}
