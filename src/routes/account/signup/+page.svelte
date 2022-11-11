<script>
    import {user} from '$lib/stores.js';
    import {goto} from '$app/navigation';

    let email = '';
    let password = '';
  
    function submitHandler()
    {
        if(email != '')
        {
            $user = {email};
            goto('/');
        }   
    }
</script>


<div class="h-[calc(100vmax-10rem)] sm:h-[calc(100vmin-10rem)] grid text-white text-xs sm:text-base" >
    <div class="m-auto p-4 rounded-md bg-slate-900/70 w-full max-w-[400px]">
        <form on:submit|preventDefault={submitHandler} class="flex flex-col gap-4">
            <h2 class="text-center font-semibold">Sign up</h2>
            <input class="rounded-lg px-3 py-2 text-black" type="email" name="email" bind:value={email} placeholder="Enter your email">
            <input class="rounded-lg px-3 py-2 text-black" type="password" name="password" bind:value={password} placeholder="Enter your password">
            <div class="flex justify-center gap-4">
                <button class="rounded-lg px-3 py-2 bg-green-600 hover:bg-green-700" type="submit">Submit</button>
                <button class="rounded-lg px-3 py-2 bg-gray-600 hover:bg-gray-400"><a href="/account/login">Login</a> </button>
            </div>
        </form>
    </div>
</div>