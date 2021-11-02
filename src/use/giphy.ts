import { ref } from 'vue'

const baseUrlGIPHY = 'https://api.giphy.com/v1/gifs'
const apiKeyGIPHY = '0UTRbFtkMxAplrohufYco5IY74U8hOes'

export default function useGIPHY(tag: string, type = 'random', rating = 'g') {
  const url = encodeURI(`${baseUrlGIPHY}/${type}?api_key=${apiKeyGIPHY}&rating=${rating}&tag=${tag}`)
  const src = ref('')

  fetch(url)
    .then(response => response.json())
    .then((json) => {
      src.value = json.data.image_original_url
    })
    .catch((error) => {
      console.log(error)
    });

    return { src }
}