<template>
  <form>
    <div class="left" v-for="(games, index) in listLeft" :key="index">
      <GamesCard :imgSrc="games.imgSrc" :title="games.title" />
      <input
        type="radio"
        name="{{games.id}}"
        value="{{ left = 1 }}"
        v-show="!result"
      />
      <meter
        value="{{ scoreLeft() }}"
        min="0"
        max=" {{ scores() }} "
        v-show="result"
      ></meter>
    </div>
    <div class="right" v-for="(games, index) in listRight" :key="index">
      <GamesCard :imgSrc="games.imgSrc" :title="games.title" />
      <input
        type="radio"
        name="{{games.id}}"
        value="{{ right = 1 }}"
        v-show="!result"
      />
      <meter
        value="{{scoreRight()}}"
        min="0"
        max="{{ scores() }}"
        v-show="result"
      ></meter>
    </div>
    <button @click="result = true" v-show="!result">Відправити</button>
  </form>
</template>

<script>
import GamesCard from "@/components/GameCard";
export default {
  name: "GameList",
  components: { GamesCard },
  props: ["listLeft", "listRight"],
  data() {
    return {
      result: false,
    };
  },
  methods: {
    scoreLeft() {
      score_left = 0;
      return score_left + this.left;
    },
    scoreRight() {
      score_right = 0;
      return score_right + this.right;
    },
    scores() {
      return this.scoreLeft() + this.scoreRight();
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  align: center;
}
.left {
  align: left;
}
.right {
  align: right;
}
</style>
