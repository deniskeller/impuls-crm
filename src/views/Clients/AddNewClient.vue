<template>
  <div class="add-new-client">
    <div class="container">
      <BaseHeaderContent class="add-new-client-header">
        <BaseButtonBack class="add-new-client-header__btn-back" to="/Clients/Clients">&lt; Назад</BaseButtonBack>
        <BaseHeadline class="add-new-client-header__title" title="Добавление клиента"/>
      </BaseHeaderContent>

      <div class="add-new-client-content">
        <div class="add-new-client-content__left">
          <BaseInput
            class="add-new-client-content__input"
            required
            label="Фамилия Имя"
            type="text"
            placeholder="Иванов Алексей"
          />
          <BaseInput
            class="add-new-client-content__input row-1"
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
            class="add-new-client-content__input"
            required
          >
            <div class="">Дет.сад 1</div>
          </BaseSelect>
          <BaseInput
            class="add-new-client-content__input row-1"
            required
            label="Дата рождения"
            type="date"
            placeholder="12.11.2008"
          />
          
          <div class="add-pay-client">
            <div class="add-pay-client__title">Добавление платящего клиента?</div>
            <BaseCheckboxSlider/>
          </div>
          
          <BaseInput
            class="add-new-client-content__input"
            :star="false"
            label="Число месяца для оплаты"
            type="date"
            placeholder="12.11.2008"
          />
        </div>

        <div class="add-new-client-content__right">
          <BaseInput
            class="add-new-client-content__input"
            :star="false"
            label="Фамилия Имя представителя"
            type="text"
            placeholder="Иванов Алексей"
          />
          <BaseInput
            class="add-new-client-content__input row-1"
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
            class="add-new-client-content__input"
          >
            <div class="">Самара</div>
          </BaseSelect>

          <BaseInput
            class="add-new-client-content__input row-1"
            :star="false"
            label="Школа"
            type="text"
            placeholder="Школа № 12"
          />
          <BaseInput
            class="add-new-client-content__input row-2"
            :star="false"
            label="Сумма оплаты, руб"
            type="text"
            placeholder="1200"
          />
        </div>
      </div>
      <BaseButton to type="primary">Добавить клиента</BaseButton>
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
import BaseCheckboxSlider from "@/components/base/BaseCheckboxSlider.vue";
export default {
  name: "AddNewClient",
  components: {
    BaseHeaderContent,
    BaseHeadline,
    BaseButton,
    BaseButtonBack,
    BaseInput,
    BaseSelect,
    BaseCheckboxSlider
  }
};
</script>

<style scoped lang="scss">
.add-new-client {
  padding-bottom: 100px;
  .add-new-client-header {
    margin-bottom: 20px;
    &__btn-back {
      margin-bottom: 10px;
    }
    &__title {
      margin-right: 20px;
    }
  }
  .add-new-client-content {
    width: 100%;
    max-width: 590px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
    .add-new-client-content__left {
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
    .add-new-client-content__right {
      width: 100%;
      max-width: 272px;
      display: flex;
      flex-direction: column;
    }
    .add-new-client-content__input {
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