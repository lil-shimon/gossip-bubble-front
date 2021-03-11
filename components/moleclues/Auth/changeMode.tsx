import {FC} from "react";

export const ChangeMode: FC<{ isLogin: boolean; setIsLogin: any }> = ({isLogin, setIsLogin}) => {
    return (
        <div className="text-sm">
                    <span className="cursor-pointer font-medium text-white hover:text-indigo-500"
                          onClick={() => setIsLogin(!isLogin)}
                    >
                        change mode?
                    </span>
        </div>
    )
}
