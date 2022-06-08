<script lang="ts">
  import LoginButton from '../components/LoginButton.svelte';
  import { afterNavigate } from '$app/navigation';

  type NavLink = { text: string; href: string };
  const navLinks: NavLink[] = [
    { text: 'Intro', href: '/' },
    { text: 'Counter', href: '/counter' },
    { text: 'Input', href: '/input' },
    { text: 'Login', href: '/login' },
    { text: 'Topics', href: '/topics' },
    { text: 'Anime (CSR)', href: '/anime' },
    { text: 'Anime (SSR)', href: '/anime/ssr' },
    { text: 'Anime (SSG)', href: '/anime/ssg' },
  ];

  let currentPathname: string | null = null;
  afterNavigate(({ to }) => {
    currentPathname = to.pathname;
  });
</script>

<header>
  <div class="login-button-container">
    <LoginButton />
  </div>
  <nav>
    {#each navLinks as { href, text } (href)}
      <a {href} class={currentPathname === href ? 'current' : undefined}
        >{text}</a
      >
    {/each}
  </nav>
</header>
<main class="container">
  <slot />
</main>

<style>
  header {
    margin-block: 0.5rem 1rem;
  }

  header > nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-inline: auto;
  }

  header > .login-button-container {
    text-align: right;
    padding-inline-end: 1rem;
    margin-block-end: 0.5rem;
  }

  a {
    font-size: 1.25rem;
  }

  a.current {
    color: #e11d48;
  }

  .container {
    text-align: center;
    margin: 0 auto 4rem;
    padding: 0 1.5rem;
  }
</style>
