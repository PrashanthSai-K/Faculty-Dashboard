import react from 'react';
import { GoogleLogin, useGoogleOneTapLogin  } from '@react-oauth/google';
import axios  from 'axios';

const Login = () => {

    useGoogleOneTapLogin({
        onSuccess: credentialResponse => {
          console.log(credentialResponse);
        },
        onError: () => {
          console.log('Login Failed');
        },
      });
    
    const login=async(token)=>{
        const resp = await axios.get("http://localhost:8080/login", {headers:{Authorization:token}});
        console.log(resp);
    }


    return (
        <>
            <div className='p-10  h-screen w-full bg-slate-200 flex flex-col md:flex-row items-center justify-center'>
                <div className='p-8 md:p-0 w-5/12 bg-white h-full rounded-tl-3xl rounded-tr-3xl md:rounded-none   md:rounded-tl-3xl md:rounded-bl-3xl flex items-center justify-center border-r-2'>
                    <img src='./images/login.jpg' className='rounded-3xl' />
                </div>
                <div className='p-8 md:p-0 w-5/12 bg-white h-full text-center gap-10 rounded-bl-3xl rounded-br-3xl md:rounded-none  md:rounded-tr-3xl md:rounded-br-3xl flex flex-col items-center justify-center' >
                    <div className=' text-2xl font-bold'>
                        Welcome!! Please <span className=' text-red-600'>Login</span>
                    </div>
                    <div className='text-3xl font-semibold'>
                        BIT ProfPortal
                    </div>
                    <div class="flex items-center justify-center dark:bg-gray-800">
                        {/* <button class="px-4 py-2 border flex items-center justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                            <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                            <span>Login with Google</span>
                        </button> */}
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />;
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login;