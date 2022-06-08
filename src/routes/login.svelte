<!-- Global State -->
<script lang="ts">
  import PageHeading from '../components/PageHeading.svelte';
  import LoginButton from '../components/LoginButton.svelte';
  import { loggedIn } from '../stores/loginStore';
</script>

<PageHeading text="Login" />

<p>You are {$loggedIn ? 'logged in' : 'logged out'}</p>
<div>
  <LoginButton />
</div>

<style>
  div,
  p {
    margin-block: 1rem;
  }
</style>
