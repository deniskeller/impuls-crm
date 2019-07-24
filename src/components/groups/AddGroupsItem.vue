<template>
  <tr>
    <td aria-label="col-1">{{ name }}</td>
    <td aria-label="col-2">{{ incoming }}</td>
    <td aria-label="col-3">{{ in_work }}</td>
    <td aria-label="col-4">{{ payment }}</td>
    <td aria-label="col-5">{{ archive }}</td>
    <td aria-label="col-6" class="setting-group">
      <img src="@/images/dots.svg" alt>
    </td>
  </tr>
</template>

<script>
export default {
  name: "AddGroupsItem",
  components: {},
  props: {
    index: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: null
    },
    incoming: {
      type: Number,
      default: 0
    },
    in_work: {
      type: Number,
      default: 0
    },
    payment: {
      type: Number,
      default: 0
    },
    archive: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped lang="scss">
tr {
  background: #fff;
  padding: 0.35em;
}
tr td {
  font-size: 14px;
  color: #000;
}
table th,
table td {
  padding: 23px 20px;
  text-align: left;
}
tr:nth-child(2n + 1) td {
  background: lighten(#c6cbd4, 15%);
}
.setting-group {
  cursor: pointer;
  position: relative;
}
</style>