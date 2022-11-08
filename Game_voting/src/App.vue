<template>
  <div>
    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/products-list">Go to Products</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>
    <router-link></router-link>
    <GamesList v-bind:listLeft="listLeft" v-bind:listRight="listRight" />
    <button><router-link to="/">Додати голосування</router-link></button>
  </div>
</template>

<script>
import GamesList from "../components/GamesList";
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      listLeft: [
        {
          id: 1,
          imgSrc: "https://www.warframe.com/uk/landing",
          title: "WARFRAME",
          completed: false,
        },
        {
          id: 2,
          imgSrc:
            "https://logos-download.com/62296-fortnite-logo-download.html",
          title: "FORTNITE",
          completed: false,
        },
        {
          id: 3,
          imgSrc:
            "https://omori.fandom.com/ru/wiki/OMORI_%28%D0%B8%D0%B3%D1%80%D0%B0%29",
          title: "OMORI",
          completed: false,
        },
      ],
      listRight: [
        {
          id: 1,
          imgSrc: "https://www.teepublic.com/pin/7222168-genshin-impact-logo",
          title: "GENSHIN IMPACT",
          completed: false,
        },
        {
          id: 2,
          imgSrc:
            "https://sketchfab.com/3d-models/pubg-logo-5848769ca37f442eb9d100374d02be4b",
          title: "PUBG",
          completed: false,
        },
        {
          id: 3,
          imgSrc: "https://www.steamgriddb.com/logo/37764",
          title: "HELLO CHARLOTTE",
          completed: false,
        },
      ],
    };
  },
  components: {
    GamesList,
  },
  computed: {
    ...mapGetters(["getCount"]),
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
