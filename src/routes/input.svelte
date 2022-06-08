<!-- State Binding -->
<script lang="ts">
  import PageHeading from '../components/PageHeading.svelte';

  let name = '';
</script>

<PageHeading text="Input" />

<label>
  <div>Name</div>
  <input type="text" placeholder="Type in your name" bind:value={name} />
</label>
<div>
  <button disabled={name === ''}>Submit</button>
</div>

<style>
  div {
    margin-block: 1rem;
  }

  label {
    display: block;
    text-align: left;
    margin-inline: auto;
    width: max-content;
  }

  label > div {
    text-align: left;
    margin-block: 0.5rem;
  }

  input {
    padding: 0.5rem;
    border-radius: 4px;
    max-width: 8rem;
    border: 1px solid #71717a;
  }
</style>
