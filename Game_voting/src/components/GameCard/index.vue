<template>
  <table>
    <tbody>
      <tr>
        <td>
          <img :src="imgSrc" />
          <h3>{{ title }}</h3>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    imgSrc: String,
    title: String,
  },
};
</script>

<style>
table,
th,
td {
  border: 3px;
  text-align: center;
}
th,
td {
  padding: 10px;
}
caption {
  font-size: 20px;
}
h3 {
  align: center;
}
img {
  align: center;
  width: 300px;
}
</style>
