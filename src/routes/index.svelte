<!-- Introduction -->
<script lang="ts">
  import PageHeading from '../components/PageHeading.svelte';

  const introHref =
    'https://shawnrivers.notion.site/Svelte-Intro-d225f0173bc24dbbb9eb2b71488832ef';
</script>

<svelte:head>
  <title>Intro | Svelte WTS</title>
</svelte:head>

<PageHeading text="Svelte Intro" />

<p>
  Welcome to this week's WTS about <a
    href="https://svelte.dev/"
    target="_blank"
    rel="noopener noreferrer">Svelte</a
  >.
  <br />
  Please read the
  <a href={introHref} target="_blank" rel="noopener noreferrer">intro</a> first.
</p>

<style>
  p {
    font-size: 1.125rem;
    line-height: 1.25;
  }
</style>
