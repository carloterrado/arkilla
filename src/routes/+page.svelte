<script>
    import {user} from '$lib/stores.js';
</script>
<div class="flex flex-col gap-4 items-center justify-center min-h-full">
    {#if $user != null}
    <p class="text-center text-lg font-semibold">Hello <em class="font-bold">{$user.email}</em></p>
    <p class="text-center text-lg font-semibold">Welcome to</p>
    {/if}
    <h1 class="text-4xl text-center font-bold lg:text-7xl ">
        Arkilla Home Page 
    </h1>
</div>
