<!-- Local State Management -->
<script lang="ts">
  import PageHeading from '../components/PageHeading.svelte';

  // Local state
  let counter = 0;
  const incrementCounter = () => {
    counter++;
  };

  // Reactive declarations
  // Kinda like React.useMemo and React.useEffect
  $: doubled = counter * 2;
  $: {
    console.log('Counter:', counter);
  }
</script>

<svelte:head>
  <title>Counter | Svelte WTS</title>
</svelte:head>

<PageHeading text="Counter" />

<p>Counter: {counter}</p>
<p>Doubled: {doubled}</p>
<div>
  <button on:click={incrementCounter}>Incremnet counter</button>
</div>

<style>
  div,
  p {
    margin-block: 1rem;
  }

  p {
    font-size: 1.125rem;
    margin-block: 1rem 0.25rem;
  }
</style>
