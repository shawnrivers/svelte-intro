<!-- SSR -->
<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import type { AnimeListResponse } from 'src/api/fetchAnimeList';

  export const load: Load = async ({ fetch }) => {
    const response = await fetch('https://api.jikan.moe/v4/top/anime');

    return {
      status: response.status,
      props: {
        animeList:
          response.ok && ((await response.json()) as AnimeListResponse).data,
      },
    };
  };
</script>

<script lang="ts">
  import AnimeCard from '../../components/AnimeCard.svelte';

  // Data generated through SSR
  export let animeList: AnimeListResponse['data'];
</script>

<svelte:head>
  <title>Anime (SSR) | Svelte WTS</title>
</svelte:head>

<ul>
  {#each animeList as anime (anime.title_japanese)}
    <li>
      <AnimeCard
        title={anime.title_japanese}
        image={anime.images.jpg.image_url}
      />
    </li>
  {/each}
</ul>

<style>
  ul {
    text-align: left;
    max-width: 600px;
    margin-inline: auto;
    margin-block: 1rem;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
