<template>
  <div class="table">
    <table>
      <thead class="table-thead">
        <tr>
          <th class="table-title" v-for="column in columns" :key="column.id" :class="[{active: sortKey == column.name}, column.name]">
            <span
            class="arrow1"
            @click="sortBy(column.name)"
            
            :class="[{ascending : sortKey == column.name && !reverse, descending: sortKey == column.name && reverse}, column.name]">{{ column.title }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in orderedRows" :key="row.id">
          <td aria-label="col-1">{{ row.number }}</td>
          <td aria-label="col-2">{{ row.name }}</td>
          <td aria-label="col-3">{{ row.phone }}</td>
          <td aria-label="col-4">{{ row.groups }}</td>
          <td aria-label="col-5"><span class="dot"></span>{{ row.status }}</td>
          <td aria-label="col-6">{{ row.comment }}</td>
          <td aria-label="col-7">{{ row.remainder }}</td>
          <td aria-label="col-8" class="setting-group" @click="isShowing ^= true">
            <img src="@/images/dots.svg" alt>
            <div class="setting-group-popup" v-show="isShowing">
              <div class="setting-group-popup__item" @click="goTo('/Clients/ClientPage');">Подробнее</div>
              <div class="setting-group-popup__item" @click="goTo('/Clients/EditClient');">Редактировать</div>
              <div class="setting-group-popup__item">Удалить</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "AddClients",
  data() {
    return {
      columns: [
        {name:'number', title:'Номер'}, 
        {name:'name', title:'Ф.И.'},
        {name:'phone', title:'Телефон'},
        {name:'groups', title:'Группа'},
        {name:'status', title:'Статус'},
        {name:'comment', title:'Комментарий'},
        {name:'remainder', title:'Осталось дней'},
        {name:'setting', title:''},
      ],
      isShowing: false,
      reverse: false, 
      sortKey: null,
      rows: [
          {
            "number": 90584,
            "name": "Иванов Сергей",
            "phone": "+7 (960) 823-92-31",
            "groups": "Дошкольники",
            "status": "Абонемент",
            "comment": "Стабильно ходит",
            "remainder": "23 (до 15.07)"
          },
          {
            "number": 12390584,
            "name": "Иванов Стас",
            "phone": "+7 (960) 323-92-31",
            "groups": "Дошкольники",
            "status": "Новый",
            "comment": "Стабильно ходит",
            "remainder": "-"
          },
          {
            "number": 490584,
            "name": "Петя Иванов",
            "phone": "+7 (960) 423-92-31",
            "groups": "Школа 1",
            "status": "Абонемент",
            "comment": "Пробная тренировка 12.07  в 12:30",
            "remainder": "13 (до 15.07)"
          }
        ]
    };
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    },
    sortBy: function(sortKey) {
      this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;

      this.sortKey = sortKey;
    },
  },
  computed: {
    orderedRows: function () {
      if (this.reverse) {
        return this._.orderBy(this.rows, this.sortKey, 'asc');
      } else {
        return this._.orderBy(this.rows, this.sortKey, 'desc');
      }
    }
  }
};

</script>

<style scoped lang="scss">

.number {
  width: 7%;
}
.name {
  width: 12%;
}
.phone {
  width: 13%;
}
.groups {
  width: 11%;
}
.status {
  width: 10%;
}
.comment {
  width: 14%;
}
.remainder {
  width: 12%;
}
.setting {
  width: 4%;
} 
.arrow1 {
  width: 100%;
  position: relative;
}
.ascending {
  position: relative;
  width: 100%;
  color: #4b74ff;
}
.ascending:before { 
  content: '';
  display: block;
  width: 100%;
  position: absolute;
  right: -15px;
  top: 1px;
  width: 9px;
  height: 13px;
  background: url('../../images/arrow.svg') no-repeat;
}    
.descending {
  position: relative;
  width: 100%;
  color: #4b74ff;
}
.descending:before {
  content: '';
  display: block;
  width: 100%;
  position: absolute;
  right: -15px;
  top: 1px;
  width: 9px;
  height: 13px;
  background: url('../../images/arrow.svg') no-repeat;
  transform: rotate(180deg);
}
.table {
  background: #fff;
  .table-thead tr {
    height: 65px;
    background: #fff;
    .table-title {
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      position: relative
      
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
tr {
  background: #fff;
  padding: 0.35em;
}
tr td {
  font-size: 14px;
  font-weight: 500;
  color: #000;
}
table th,
table td {
  padding: 23px 20px;
  text-align: left;
  /*white-space: nowrap;*/
}
tr:nth-child(2n + 1) td {
  background: lighten(#c6cbd4, 15%);
}
.setting-group {
  cursor: pointer;
  position: relative;
  .setting-group-popup {
    font-size: 14px;
    position: absolute;
    left: -100px;
    top: -45px;
    z-index: 1000;
    background: $white;
    border-radius: 2px;
    border: solid 1px #c6cbd4;
    &__item {
      width: 100%;
      cursor: pointer;
      padding: 10px;
      &:hover {
        background: $grey;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
.dot {
    display: inline-block;
    width: 8px;
    height: 9px;
    border-radius: 50%;
    background: $grey;
    margin-right: 5px;
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

.arrow {
  position: absolute;
  width: 10px;
  height: 5px;
  background-repeat: no-repeat;
  background-size: contain;
  float: left;
}
.arrow_up {
  content: '';
  width: 10px;
  height: 5px;
  position: absolute;
  right: -20px;
  top: 6px;
  background: #001548;
  background-repeat: no-repeat;
  background-size: contain;
}
.arrow_down {
  content: '';
  width: 10px;
  height: 5px;
  position: absolute;
  right: -20px;
  bottom: 8px;
  background: #001548;
  background-repeat: no-repeat;
  background-size: contain;
}
.sortable{
  position: relative;
  cursor: pointer;
}
.before-arrow:after{
  content: '';
  width: 10px;
  height: 5px;
  position: absolute;
  right: -20px;
  top: 6px;
  background: url('/images/arrow.svg');
  background-repeat: no-repeat;
  background-size: contain;
}
.before-arrow:before{
  content: '';
  width: 10px;
  height: 5px;
  position: absolute;
  right: -20px;
  bottom: 8px;
  background: url('/images/arrow.svg');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>