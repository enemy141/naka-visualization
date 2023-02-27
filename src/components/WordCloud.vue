<template>
  <Skeleton active  v-if="reload != true"/>
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
import {Skeleton} from "ant-design-vue";
import axios from "axios";

export default {
  components: {
    VueWordCloud,
    Skeleton
  },
  data() {
    return {
      reload : false,
      countryData: [],

    };
  },
  async created() {
    const cd = await axios
      .get(process.env.VUE_APP_API + "/api/data/all-username")
      .then((res) => {
        const username = res.data.result;
        const frequency = {};

        username.forEach(function (username) {
          frequency[username] = frequency[username] ? frequency[username] + 1 : 1;
        });

        const frequencyArray = Object.entries(frequency).map(
          ([username, count]) => [username, count]
        );

        const sortedFrequencyArray = frequencyArray.sort((a, b) => b[1] - a[1]);

        const topFive = sortedFrequencyArray.slice(0, 5);
        const randomTopFive = topFive.map(([username]) => [
        username,
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
