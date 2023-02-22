<template>
  <vue-word-cloud
    v-if="reload"
    style="height: 400px; width: 400px"
    font-family="Roboto"
    :words="countryData"
    :color="
      ([, weight]) =>
        weight > 3 ? 'DeepPink' : weight > 2 ? 'RoyalBlue': weight > 1 ? 'Green' : 'Indigo'
    "
    :spacing="1"
  />
</template>

<script>
import VueWordCloud from "vuewordcloud";
import axios from "axios";

export default {
  components: {
    VueWordCloud,
  },
  data() {
    return {
      reload : false,
      countryData: [],

    };
  },
  async created() {
    const cd = await axios
      .get(process.env.VUE_APP_API + "/api/data/all-nation")
      .then((res) => {
        const countries = res.data.result;

        const frequency = {};

        countries.forEach(function (country) {
          frequency[country] = frequency[country] ? frequency[country] + 1 : 1;
        });

        const frequencyArray = Object.entries(frequency).map(
          ([country, count]) => [country, count]
        );

        const sortedFrequencyArray = frequencyArray.sort((a, b) => b[1] - a[1]);

        const topFive = sortedFrequencyArray.slice(0, 5);
        const randomTopFive = topFive.map(([country]) => [
          country,
          Math.floor(Math.random() * 4) + 1,
        ]);
        return randomTopFive;
      })
      .catch((error) => {
        console.log(error);
      });
      this.countryData = cd
      setTimeout(() =>{this.reload = true
      },1000)
  },
  setup() {
  },
};
</script>
