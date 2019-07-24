<template>
  <div class="client-card">
    
    <div class="client-card-header">
      
      <div class="client-card-header__reload">Обновлено тренером
        <span class="client-card-header__reload-trener">{{ trener }} </span>
        <span class="client-card-header__reload-date">{{ dayscomputed }} назад</span>
      </div>
      <div class="client-card-header__date">{{ date }} </div>
      
    </div>
    
    <div class="client-card-content">
      
      <div class="client-card-content__search">
        <span class="client-card-content__search-mark" :style="output">{{ search_mark }}</span>
        <span class="client-card-content__search-text"> {{ search_text }}</span>
      </div>
      <div
        :class="[ comment.charAt(0) === '+' ? 'client-card-content__comment-big' : 'client-card-content__comment' ]"
        class="client-card-content__comment"> {{ comment }}</div>
      
    </div>
    
  </div>
</template>

<script>

export default {
  name: "ClientCard",
  data() {
    return {
    };
  },
  props: {
    trener: {
      type: String,
      default: ""
    },
    days: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
    search_mark: {
      type: String,
      default: ""
    },
    search_text: {
      type: String,
      default: ""
    },
    comment: {
      type: String,
      default: ""
    },
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    },
    declOfNum(number, titles= ['день', 'дня', 'дней']) {  
      let cases = [2, 0, 1, 1, 1, 2];  
      return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
  },
  computed: {
    dayscomputed() {
      return this.days + ' ' + this.declOfNum(this.days);
    },
    output(){
      if (this.search_mark == 'Оплата') {
        return 'background:#7ed321;';
      }
      if (this.search_mark == 'Смена статуса') {
        return 'background:#9ab1ff;';
      }
      if (this.search_mark == 'Напоминание') {
        return 'background:#e99e86;';
      }
      if (this.search_mark == 'Изменение карточки' || 'Комментарий') {
        return 'background:#c6cbd4;';
      }
      return 'background:none;'
    }
  }
};

</script>

<style scoped lang="scss">
.client-card {
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  padding: 15px 12px 12px;
  &-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    &__reload {
      font-size: 14px;
      font-weight: 900;
      color: #333333;
      &-trener {
        color: #4a90e2;
      }
    }
    &__date {
      font-size: 14px;
      font-weight: 500;
      color: #333333;
    }
  }
  &-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &__search {
      &-mark {
        font-size: 14px;
        font-weight: 700;
        color: #333333;
        height: 24px;
        padding: 6px 10px;
        border-radius: 4px;
        background-color: #7ed321;
        margin-right: 10px;
      }
      &-text {
        font-size: 18px;
        font-weight: 900;
      }
    }
    &__comment {
      font-size: 18px;
      font-weight: 900;
      color: #333333;
    }
    &__comment-big {
      font-size: 24px;
      font-weight: 900;
      color: #333333;
    }
  }
}

</style>