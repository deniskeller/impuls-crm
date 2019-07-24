<template>
  <div class="table">
    <table>
      <thead class="table-thead">
        <tr>
          <th class="table-title table-title__name" scope="col-1">Название</th>
          <th class="table-title" scope="col-2">Входящих</th>
          <th class="table-title" scope="col-3">В работе</th>
          <th class="table-title" scope="col-4">Платящих</th>
          <th class="table-title" scope="col-5">Архив</th>
          <th class="table-title" scope="col-6"></th>
        </tr>
      </thead>
      <tbody>
        <AddGroupsItem
          v-for="(item, index) in addGroupsData"
          :key="index"
          :index="index"
          :name="item.name"
          :incoming="item.incoming"
          :in_work="item.in_work"
          :payment="item.payment"
          :archive="item.archive"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import AddGroupsItem from "@/components/groups/AddGroupsItem.vue";
import addGroupsData from "@/assets/data/add-groups-data.json";
export default {
  name: "AddGroups",
  components: {
    AddGroupsItem
  },
  data() {
    return {
      addGroupsData
    };
  },
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
      default: null
    },
    in_work: {
      type: Number,
      default: null
    },
    payment: {
      type: Number,
      default: null
    },
    archive: {
      type: Number,
      default: null
    }
  }
};
</script>

<style scoped lang="scss">
.table {
  background: #fff;
  .table-thead tr {
    height: 65px;
    background: #fff;
    .table-title {
      font-size: 14px;
      font-weight: 500;
    }
    .table-title__name {
      width: 30%;
    }
  }
}
table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}
table tr {
  /* background: #f8f8f8; */
  padding: 0.35em;
}
table thead tr th {
  font-size: 14px;
  font-weight: 900;
  color: #9b9b9b;
}
table th,
table td {
  padding: 23px 20px;
  text-align: left;
}
table tbody tr:nth-child(2n + 1) td {
  background: #c6cbd4;
}
/* @media screen and (max-width: 600px) {
  table {
    border: 0;
  }
  table caption {
    font-size: 1.3em;
  }
  table thead {
    display: none;
  }
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }
  table td:before {
    content: attr(aria-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  table td:last-child {
    border-bottom: 0;
  }
} */
</style>