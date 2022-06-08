<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import PageHeading from '../../components/PageHeading.svelte';

  const navLinks: { text: string; href: string }[] = [
    { text: 'CSR', href: '/anime/csr' },
    { text: 'SSR', href: '/anime/ssr' },
    { text: 'SSG', href: '/anime/ssg' },
  ];

  let currentPathname: string | null = null;
  afterNavigate(({ to }) => {
    currentPathname = to.pathname;
  });
</script>

<PageHeading text="Anime" />

<div class="tabs">
  <nav>
    {#each navLinks as { href, text } (href)}
      <a {href} class={currentPathname === href ? 'current' : undefined}
        >{text}</a
      >
    {/each}
  </nav>
</div>

<slot />

<style>
  .tabs {
    margin-block-end: 1rem;
  }

  nav {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-inline: auto;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #e3e3e3;
  }

  a {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    font-size: 1.25rem;
    text-decoration: none;
    color: #000000;
  }

  a:hover {
    background-color: #c1bff2;
  }

  a.current {
    color: #ffffff;
    background-color: #4f46e5;
  }
</style>
