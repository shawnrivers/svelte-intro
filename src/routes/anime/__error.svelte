<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  export const load: Load = async ({ error }) => {
    return {
      props: {
        message: error ? `${error.message}` : 'Something went wrong',
      },
    };
  };
</script>

<script lang="ts">
  export let message: string;
</script>

<svelte:head>
  <title>Something goes wrong | Svelte WTS</title>
</svelte:head>

<p class="error">{message}</p>

<style>
  .error {
    color: #ef4444;
    font-weight: 600;
  }
</style>
