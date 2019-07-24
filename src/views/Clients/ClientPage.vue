<template>
  <div class="client-page">
    <div class="container">
      
      <BaseHeaderContent class="client-page-header">
        
        <BaseButtonBack class="client-page-header__btn-back" to="/Clients/Clients">&lt; Назад</BaseButtonBack>
        
        <div class="client-page-header__title">
          <BaseHeadline class="client-page-header__title-name" title="Иванов Сергей, 10 лет"/>
          <BaseHeadline class="client-page-header__title-phone" title="+7 960 823 92 34"/>
        </div>
        
      </BaseHeaderContent>
      
      <div class="client-page-details">
        <div class="client-page-details__column">
          <BaseDetail subtitle="Статус" title="Абонемент" class="client-page-details__column-item"/>
          <BaseDetail subtitle="Группа" title="Школа 1" class="client-page-details__column-item"/>
          <BaseDetail subtitle="Следующая оплата" title="12.07.2019, 1200 руб." class="client-page-details__column-item"/>
          <BaseDetail subtitle="Осталось дней" title="4 дня" class="client-page-details__column-item"/>
        </div>
        <div class="client-page-details__column">
          <BaseDetail subtitle="День рождения" title="12.11.2008 (через 5 месяцев)" class="client-page-details__column-item"/>
          <BaseDetail subtitle="Школа" title="Школа №11" class="client-page-details__column-item"/>
          <BaseDetail subtitle="Город" title="Екатеринбург" class="client-page-details__column-item"/>
          <BaseDetail subtitle="Тренер" title="Гус Хидинг (вы)" class="client-page-details__column-item"/>
        </div>
        <div class="client-page-details__column">
          <BaseDetail subtitle="ФИО представителя" title="Иванова Антонина Петровна" class="client-page-details__column-item"/>
          <BaseDetail subtitle="Телефон представителя" title="+7 960 823 38 88" class="client-page-details__column-item"/>
          <BaseDetail subtitle="Договор" title="Заключен" class="client-page-details__column-item"/>
        </div>
        
      </div>
      <div class="client-page-actions">
        <BaseButton class="client-page-actions__btn" type="default">Добавить оплату</BaseButton>
        <BaseButton class="client-page-actions__btn" type="default">Добавить пропуск по уважительной причине</BaseButton>
        <BaseButton class="client-page-actions__btn" type="default">Редактировать</BaseButton>
        <BaseButton class="client-page-actions__btn" type="default">Изменить статус</BaseButton>
        <BaseButton class="client-page-actions__btn" type="default">Добавить напоминание</BaseButton>
        <BaseButton class="client-page-actions__btn" type="default">Добавить комментарий</BaseButton>
        <BaseButton class="client-page-actions__btn" type="default">Добавить договор</BaseButton>
      </div>
      
      <div class="client-page-sorting">
        <BaseButton2 class="client-page-sorting__btn" type="default">Все</BaseButton2>
        <BaseButton2 class="client-page-sorting__btn" type="payment">Оплата</BaseButton2>
        <BaseButton2 class="client-page-sorting__btn" type="primary">Смена статуса</BaseButton2>
        <BaseButton2 class="client-page-sorting__btn" type="reminder">Напоминание</BaseButton2>
        <BaseButton2 class="client-page-sorting__btn" type="comment">Изменение карточки</BaseButton2>
        <BaseButton2 class="client-page-sorting__btn" type="comment">Комментарий</BaseButton2>
      </div>
      
      <div class="client-page-cards">
        <ClientCard
          trener="Гус Хидинг"
          days="12"
          date="13:25 16.06.2019"
          search_mark="Оплата"
          search_text="Поступила оплата 1200 руб."
          comment="+ 1200 руб."
          class="client-page-cards__item"/>
          <ClientCard
          trener="Гус Хидинг"
          days="12"
          date="13:25 16.06.2019"
          search_mark="Напоминание"
          search_text="Поступила оплата 1200 руб."
          comment="+ 1200 руб."
          class="client-page-cards__item"/>
          <ClientCard
          trener="Гус Хидинг"
          days="12"
          date="13:25 16.06.2019"
          search_mark="Смена статуса"
          search_text="Поступила оплата 1200 руб."
          comment="Пробная тренировка > Абонемент"
          class="client-page-cards__item"/>
          <ClientCard
          trener="Гус Хидинг"
          days="12"
          date="13:25 16.06.2019"
          search_mark="Изменение карточки"
          search_text="Поступила оплата 1200 руб."
          comment="+ 1200 руб."
          class="client-page-cards__item"/>
          <ClientCard
          trener="Гус Хидинг"
          days="12"
          date="13:25 16.06.2019"
          search_mark="Комментарий"
          search_text="Поступила оплата 1200 руб."
          comment="+ 1200 руб."
          class="client-page-cards__item"/>
      </div>
      
    </div>
  </div>
</template>

<script>
import BaseHeaderContent from "@/components/base/BaseHeaderContent.vue";
import BaseHeadline from "@/components/base/BaseHeadline.vue";
import BaseButtonBack from "@/components/base/BaseButtonBack.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseButton2 from "@/components/base/BaseButton2.vue";
import BaseDetail from "@/components/base/BaseDetail.vue";
import ClientCard from "@/components/clients/ClientCard.vue";
export default {
  name: "ClientPage",
  components: {
    BaseHeaderContent,
    BaseHeadline,
    BaseButton,
    BaseButton2,
    BaseButtonBack,
    BaseDetail,
    ClientCard
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>

<style scoped lang="scss">
.client-page {
  padding-bottom: 100px;
  .client-page-header {
    &__btn-back {
      margin-bottom: 10px;
    }
    &__title {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .client-page-details {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: solid 1px #c6cbd4;
    &__column {
      width: 30%;
      text-align: left;
      &-item {
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
  .client-page-actions {
    padding-top: 20px;
    border-bottom: solid 1px #c6cbd4;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    &__btn {
      margin-right: 15px;
      margin-bottom: 20px;
    }
  }
  .client-page-sorting {
    padding-top: 20px;
    border-bottom: solid 1px #c6cbd4;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    &__btn {
      margin-right: 15px;
      margin-bottom: 20px;
    }
  }
  .client-page-cards {
    padding-top: 20px;
    padding-bottom: 20px;
    &__item {
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
}
</style>