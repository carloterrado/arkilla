<script>
    import "../app.css";
</script>

<body class="bg-slate-400">
    <header class="flex items-center h-20 uppercase bg-teal-500 px-9 font-semibold shadow-md">
        <div class="mr-auto sm:m-0">
            <button class="sm:hidden">Nav</button>
            <span class="uppercase hidden sm:block"><a href="/">logo</a></span>
        </div>
        <nav class="hidden mx-auto fixed top-0 left-0 bg-slate-600 w-full h-screen p-6 sm:p-0 sm:h-auto sm:relative sm:grid sm:place-items-center sm:bg-transparent">
            <div class="mb-5 flex justify-between sm:hidden">
               <span><a href="/">Logo</a></span>
                <button>Close</button>
            </div>
            <ul class="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <li><a href="/" class="uppercase">Home</a></li>
                <li><a href="./product" class="uppercase">Product</a></li>
                <li><a href="./about" class="uppercase">About</a></li>
                <li><a href="./services" class="uppercase">Services</a></li>
            </ul>
        </nav>
        <button>Logout</button>
    </header>

<slot />

<footer class="h-20  bg-teal-500 grid place-items-center"><h1 class="text-base font-semibold">© 2022 arkilla.vercel.app</h1> </footer>
</body>
