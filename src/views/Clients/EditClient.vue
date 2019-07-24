<template>
  <div class="edit-client">
    <div class="container">
      <BaseHeaderContent class="edit-client-header">
        <BaseButtonBack class="edit-client-header__btn-back" to="/Clients/Clients">&lt; Назад</BaseButtonBack>
        <BaseHeadline class="edit-client-header__title" title="Редактирование клиента"/>
      </BaseHeaderContent>

      <div class="edit-client-content">
        <div class="edit-client-content__left">
          <BaseInput
            class="edit-client-content__input"
            required
            label="Фамилия Имя"
            type="text"
            placeholder="Иванов Алексей"
          />
          <BaseInput
            class="edit-client-content__input row-1"
            required
            label="Телефон"
            type="text"
            placeholder="+7 960 823 39 89"
          />
          <BaseSelect
            label="Группа"
            :star="true"
            :list="['Дет.сад 1', 'Дет.сад 2', 'Дет.сад 3']"
            type="default"
            class="edit-client-content__input"
            required
          >
            <div class="">Дет.сад 1</div>
          </BaseSelect>
          <BaseInput
            class="edit-client-content__input row-1"
            required
            label="Дата рождения"
            type="date"
            placeholder="12.11.2008"
          />
          
          <BaseInput
            class="edit-client-content__input"
            :star="false"
            label="Число месяца для оплаты"
            type="date"
            placeholder="12.11.2008"
          />
        </div>

        <div class="edit-client-content__right">
          <BaseInput
            class="edit-client-content__input"
            :star="false"
            label="Фамилия Имя представителя"
            type="text"
            placeholder="Иванов Алексей"
          />
          <BaseInput
            class="edit-client-content__input row-1"
            :star="false"
            label="Телефон дополнительный"
            type="text"
            placeholder="+7 960 823 39 89"
          />
          
          <BaseSelect
            label="Город"
            :star="false"
            :list="['Самара', 'Тольятти', 'Екб']"
            type="default"
            class="edit-client-content__input"
          >
            <div class="">Самара</div>
          </BaseSelect>

          <BaseInput
            class="edit-client-content__input row-1"
            :star="false"
            label="Школа"
            type="text"
            placeholder="Школа № 12"
          />
          <BaseInput
            class="edit-client-content__input row-2"
            :star="false"
            label="Сумма оплаты, руб"
            type="text"
            placeholder="1200"
          />
        </div>
      </div>
      <BaseButton to type="primary">Редактировать клиента</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseHeaderContent from "@/components/base/BaseHeaderContent.vue";
import BaseHeadline from "@/components/base/BaseHeadline.vue";
import BaseButtonBack from "@/components/base/BaseButtonBack.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseSelect from "@/components/base/BaseSelect.vue";
export default {
  name: "EditClient",
  components: {
    BaseHeaderContent,
    BaseHeadline,
    BaseButton,
    BaseButtonBack,
    BaseInput,
    BaseSelect
  }
};
</script>

<style scoped lang="scss">
.edit-client {
  padding-bottom: 100px;
  .edit-client-header {
    margin-bottom: 20px;
    &__btn-back {
      margin-bottom: 10px;
    }
    &__title {
      margin-right: 20px;
    }
  }
  .edit-client-content {
    width: 100%;
    max-width: 590px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
    .edit-client-content__left {
      width: 100%;
      max-width: 272px;
      display: flex;
      flex-direction: column;
      .add-pay-client {
        display: flex;
       flex-direction: row;
       margin-bottom: 15px;
       &__title {
         font-size: 14px;
          font-weight: 700;
          color: $black;
          margin-right: 10px;
       }
      }
    }
    .edit-client-content__right {
      width: 100%;
      max-width: 272px;
      display: flex;
      flex-direction: column;
    }
    .edit-client-content__input {
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
    .row-1 {
      margin-bottom: 40px;
    }
    .row-2 {
      margin-top: auto;
    }
  }
}
</style>