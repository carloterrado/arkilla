<script>
    import {goto} from '$app/navigation';
    import {signInWithEmailAndPassword} from 'firebase/auth';
    import {auth} from '$lib/firebase';
    import {user,error_msg} from '$lib/stores.js';

    let email = '';
    let password = '';

    async function submitHandler()
    {
            await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                $user = userCredential.user;
                goto('/'); 
            }).catch((error)=>{
                $error_msg =  error.message;
                goto('/account/login'); 
            })
            setTimeout(() => {
                if($error_msg != null)
                {
                    $error_msg = null;
                }
            },2000)
            
    }
</script>


<div class="min-h-full grid text-white text-xs sm:text-base my-auto">
    <div class="m-auto p-4 rounded-md bg-slate-900/70 w-full max-w-[400px]">
       {#if $error_msg != null}
            <p class="py-2 px-3 bg-red-400 text-center">{$error_msg}</p>
       {/if}
        <form on:submit|preventDefault={submitHandler} action="#" class="flex flex-col gap-4">
            <h2 class="text-center font-semibold">Login</h2>
            <input class="rounded-lg px-3 py-2 text-black" type="email" name="email" bind:value={email} placeholder="Enter your email">
            <input class="rounded-lg px-3 py-2 text-black" type="password" name="password" bind:value={password} placeholder="Enter your password">
            <div class="flex justify-center gap-4">
                <button class="rounded-lg px-3 py-2 bg-green-600 hover:bg-green-700" type="submit">Submit</button>
                <button class="rounded-lg px-3 py-2 bg-gray-600 hover:bg-gray-400"><a href="/account/signup">Signup</a> </button>
            </div>
        </form>
    </div>
</div>