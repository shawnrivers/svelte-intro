type AnimeListResponse = {
  data: {
    title_japanese: string;
    year: number;
    images: { jpg: { image_url: string } };
  }[];
};

export const fetchAnimeList = () =>
  fetch('https://api.jikan.moe/v4/top/anime')
    .then((res) => res.json())
    .then((data: AnimeListResponse) => data.data);
