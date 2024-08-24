<script setup>
const list = ref([
    {
        href: '/',
        title: 'Home',
    },
    {
        href: '/carts',
        title: 'carts',
    },
    {
        href: '/users',
        title: 'users',
    },
])
</script>
<template>
    <NuxtLoadingIndicator :height="10" :duration="100" :throttle="400" />
    <div class="max-w-2xl mx-auto flex">
        <aside class="w-64" aria-label="Sidebar">
            <div class="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
                <ul class="space-y-2">
                    <li v-for="(val, index) in list" :key="index">
                        <NuxtLink
                            :href="val.href"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
                        >
                            <svg
                                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span class="ml-3">{{ val.title }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </aside>
        <p class="m-5">
            <slot />
        </p>
    </div>
    <footer class="max-w-2xl mx-auto flex">
      <p>open console then change the page, the api will be cancelled </p>
    </footer>
</template>
<style>
.router-link-active, .router-link-active svg{
  background-color: grey;
  color: #fff;
}
</style>