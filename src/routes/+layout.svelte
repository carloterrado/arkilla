<script>
    import "../app.css";
    import {user} from '$lib/stores';
    import {signOut} from 'firebase/auth';
    import {auth} from '$lib/firebase';
    import {goto} from '$app/navigation';
   
 
    let showNavBar = false;
    async function logout()
    {
       await signOut(auth).then(() => {
            $user = null;
       }).catch((error) => {
            goto('/'); 
       })
      
    }
</script>


<header class="flex items-center h-20 uppercase bg-teal-500 px-9 font-semibold shadow-md">
    <div class="mr-auto sm:m-0">
        <button on:click="{() => showNavBar = true}"  class="sm:hidden w-[25px] h-[25px]">
            <span class="block relative h-[2px] bg-white my-auto before:content-[''] before:h-[2px] before:w-full before:bg-white before:absolute before:left-0 before:top-[8px] after:content-[''] after:h-[2px] after:w-full after:bg-white after:absolute after:left-0 after:bottom-[8px]"></span>
        </button>
        <a href="/" class="hidden sm:block relative w-[50px]">
            <span class="absolute bottom-[5px] left-[10px] w-[25px] h-[5px] bg-white rounded-t-[4px] before:content-[''] before:absolute before:top-[2px] before:left-[13%] before:bg-black before:w-3/4 before:h-[6px] before:rounded-lg z-10"></span>
            <span class="absolute -bottom-[10px] left-0 w-[50px] h-[15px] bg-white rounded-t-[8px] rounded-b-[4px] before:content-[''] before:absolute before:top-[50%] before:left-[5px] before:bg-black before:h-[15px] before:w-[15px] before:rounded-full after:content-[''] after:absolute after:top-[50%] after:right-[5px] after:bg-black after:h-[15px] after:w-[15px] after:rounded-full"></span>
        </a>
    </div> 
    <nav class="{showNavBar === true ? 'translate-x-0' : '-translate-x-full'} mx-auto fixed left-0 top-0 sm:translate-x-0 transition duration-1000 bg-slate-600 w-full h-screen p-6 sm:p-0 sm:h-auto sm:relative sm:grid sm:place-items-center sm:bg-transparent">
        <div class="mb-5 flex justify-between sm:hidden">
            <a href="/" on:click="{() => showNavBar = false}" class="relative bottom-3 w-[50px]">
                <span class="absolute bottom-[5px] left-[10px] w-[25px] h-[5px] bg-white rounded-t-[4px] before:content-[''] before:absolute before:top-[2px] before:left-[13%] before:bg-black before:w-3/4 before:h-[4px] before:rounded-lg z-10"></span>
                <span class="absolute -bottom-[10px] left-0 w-[50px] h-[15px] bg-white rounded-t-[8px] rounded-b-[4px] before:content-[''] before:absolute before:top-[50%] before:left-[5px] before:bg-black before:h-[15px] before:w-[15px] before:rounded-full after:content-[''] after:absolute after:top-[50%] after:right-[5px] after:bg-black after:h-[15px] after:w-[15px] after:rounded-full"></span>
            </a>
            <button on:click="{() => showNavBar = false}" class="w-[25px] h-[25px]">
                <span class="block relative h-[2px] bg-white my-auto rotate-45 before:content-[''] before:h-[2px] before:w-full before:bg-white before:absolute before:left-0 before:top-1/2 before:-translate-y-[50%] before:rotate-90"></span>
            </button>
        </div>
        <ul class="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <li><a on:click="{() => showNavBar = false}" href="/" class="uppercase relative before:absolute before:left-0 before:-bottom-[2px] before:content-[''] before:h-[2px] before:w-full before:bg-black before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-500">Home</a></li>
            <li><a on:click="{() => showNavBar = false}" href="/product" class="uppercase relative before:absolute before:left-0 before:-bottom-[2px] before:content-[''] before:h-[2px] before:w-full before:bg-black before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-500">Product</a></li>
            <li><a on:click="{() => showNavBar = false}" href="/about" class="uppercase relative before:absolute before:left-0 before:-bottom-[2px] before:content-[''] before:h-[2px] before:w-full before:bg-black before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-500">About</a></li>
            <li><a on:click="{() => showNavBar = false}" href="/services" class="uppercase relative before:absolute before:left-0 before:-bottom-[2px] before:content-[''] before:h-[2px] before:w-full before:bg-black before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-500">Services</a></li>
        </ul>
    </nav>
    {#if $user != null}
        <button class="rounded-lg px-3 py-2 bg-red-400 hover:bg-red-500" on:click={logout}>Logout</button>
    {:else}
        <button class="rounded-lg px-3 py-2 bg-green-600 hover:bg-green-700"><a href="/account/login">Login</a></button>
    {/if}
</header>

<main class="px-5 h-[calc(100vmax-10rem)] sm:h-[calc(100vmin-10rem)] min-h-[calc(100vmax-10rem)]  sm:min-h-[calc(100vmin-10rem)]">
    <slot />
</main>

<footer class="h-20  bg-teal-500 grid place-items-center">
    <h1 class="text-base font-semibold">© 2022 arkilla.vercel.app</h1> 
</footer>

