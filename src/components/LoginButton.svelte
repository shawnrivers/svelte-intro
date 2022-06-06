<script lang="ts">
  import { loggedIn } from '../stores/loginStore';

  const switchLogin = () => {
    loggedIn.update((loggedIn) => !loggedIn);
  };
</script>

<button on:click={switchLogin}>{$loggedIn ? 'Log out' : 'Log in'}</button>

<style>
  button {
    min-width: 6rem;
  }
</style>
