<!-- Condition & Loop Blocks -->
<script lang="ts">
  import PageHeading from '../components/PageHeading.svelte';

  let isTopicListVisible = false;

  type Topic = { id: number; text: string };
  const topicList: Topic[] = [
    { id: 1, text: 'The anatomy of a .svelte file' },
    { id: 2, text: 'State management' },
    { id: 3, text: 'Conditional & loop blocks' },
    { id: 4, text: 'Asynchronicity & data fetching' },
    { id: 5, text: 'Animation' },
    { id: 6, text: 'SvelteKit' },
  ];
</script>

<svelte:head>
  <title>Topics | Svelte WTS</title>
</svelte:head>

<PageHeading text="Topic List" />

{#if isTopicListVisible}
  <button on:click={() => (isTopicListVisible = false)}>Hide topic list</button>
{:else}
  <button on:click={() => (isTopicListVisible = true)}>Show topic list</button>
{/if}

{#if isTopicListVisible}
  <ul>
    {#each topicList as topic (topic.id)}
      <li>{topic.text}</li>
    {/each}
  </ul>
{/if}

<style>
  ul {
    list-style-type: disc;
    text-align: left;
    max-width: max-content;
    margin-inline: auto;
    margin-block: 1rem;
  }

  li {
    font-size: 1.125rem;
    margin-block: 0.25em;
  }

  button {
    min-width: 10rem;
  }
</style>
