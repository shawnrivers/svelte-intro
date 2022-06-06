<script lang="ts">
  export let title: string;
  export let image: string;
</script>

<div class="container">
  <img src={image} alt="" role="presentation" />
  <div class="title">{title}</div>
</div>

<style>
  .container {
    text-align: center;
    padding: 4px;
  }

  img {
    margin-block-end: 0.5rem;
    aspect-ratio: 3 / 4;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
    border: 3px solid #52525b;
  }

  .title {
    font-size: 1.125rem;
    font-weight: 600;
  }
</style>
