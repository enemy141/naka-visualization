<template>
  <vue-word-cloud
    style="height: 400px; width: 400px"
    :words="[
      ['romance', 5],
      ['horror', 8],
      ['fantasy', 3],
      ['adventure', 12],
    ]"
    :color="
      ([, weight]) =>
        weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'
    "
    font-family="Roboto"
  />
</template>

<script>
import VueWordCloud from "vuewordcloud";

export default {
  components: {
    VueWordCloud,
  },
};
</script>
