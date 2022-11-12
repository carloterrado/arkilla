<script>
    import "../app.css";
    import {user} from '../lib/stores.js'
    let showNavBar = false;
    function logout()
    {
        $user = null;
    }
</script>


<body class="bg-slate-400">
    <header class="flex items-center h-20 uppercase bg-teal-500 px-9 font-semibold shadow-md">
        <div class="mr-auto sm:m-0">
            <button class="sm:hidden" on:click="{() => showNavBar = true}">Nav</button>
            <span class="uppercase hidden sm:block"><a href="/">logo</a></span>
        </div> 
        <nav class="{showNavBar === true ? 'translate-x-0' : '-translate-x-full'} mx-auto fixed left-0 top-0 sm:translate-x-0 transition duration-1000 bg-slate-600 w-full h-screen p-6 sm:p-0 sm:h-auto sm:relative sm:grid sm:place-items-center sm:bg-transparent">
            <div class="mb-5 flex justify-between sm:hidden">
               <span><a href="/" on:click="{() => showNavBar = false}">Logo</a></span>
                <button on:click="{() => showNavBar = false}">Close</button>
            </div>
            <ul class="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <li><a href="/" class="uppercase relative before:absolute before:content-[''] before:left-0 before:h-[2px] before:w-full before:-bottom-[2px] before:bg-black before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500" on:click="{() => showNavBar = false}">Home</a></li>
                <li><a href="/product" class="uppercase relative before:absolute before:content-[''] before:left-0 before:h-[2px] before:w-full before:-bottom-[2px] before:bg-black before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500" on:click="{() => showNavBar = false}">Product</a></li>
                <li><a href="/about" class="uppercase relative before:absolute before:content-[''] before:left-0 before:h-[2px] before:w-full before:-bottom-[2px] before:bg-black before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500" on:click="{() => showNavBar = false}">About</a></li>
                <li><a href="/services" class="uppercase relative before:absolute before:content-[''] before:left-0 before:h-[2px] before:w-full before:-bottom-[2px] before:bg-black before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500" on:click="{() => showNavBar = false}">Services</a></li>
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

    <footer class="h-20  bg-teal-500 grid place-items-center"><h1 class="text-base font-semibold">© 2022 arkilla.vercel.app</h1> </footer>
</body>
