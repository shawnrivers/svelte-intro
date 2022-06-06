<!-- Asynchronicity & Data Fetching -->
<script lang="ts">
  import PageHeading from '../components/PageHeading.svelte';
  import AnimeCard from '../components/AnimeCard.svelte';
  import { fetchAnimeList } from '../api/fetchAnimeList';

  const fetchAnimeListPromise = fetchAnimeList();
</script>

<svelte:head>
  <title>Anime | Svelte WTS</title>
</svelte:head>

<PageHeading text="Anime" />

{#await fetchAnimeListPromise}
  <p>Loading...</p>
{:then animeList}
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
{:catch error}
  <p class="error">{error.message ?? 'Something went wrong'}</p>
{/await}

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

  .error {
    color: #ef4444;
    font-weight: 600;
  }
</style>
