<template>
  <div class="clients">
    <div class="container">
      <BaseHeaderContent class="clients-header-content">
        <div class="clients-header-content-top">
          <BaseHeadline class="clients-header-content-top__title" title="Клиенты"/>
          <BaseButton to="/Clients/AddNewClient" type="primary">Добавить клиента +</BaseButton>
        </div>
        
        <div class="clients-header-content__options">
          <BaseSearchField placeholder="Поиск" class="clients-header-content__options-search"/>
          <div class="clients-header-content__options-select">
            <BaseSelect
                :list="['Самара', 'Тольятти', 'Екб']"
                type="default"
                class="clients-header-content__options-select-item"
              >
              <div class="">Статус</div>
            </BaseSelect>
            <BaseSelect
              :list="['Самара', 'Тольятти', 'Екб']"
              type="default"
              class="clients-header-content__options-select-item"
            >
              <div class="">Группа</div>
            </BaseSelect>
          </div>
        </div>
        
      </BaseHeaderContent>
      <div class="clients-content-table">
        <AddClients/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeaderContent from "@/components/base/BaseHeaderContent.vue";
import BaseHeadline from "@/components/base/BaseHeadline.vue";
import BaseSearchField from "@/components/base/BaseSearchField.vue";
import BaseSelect from "@/components/base/BaseSelect.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import AddClients from "@/components/clients/AddClients.vue";
export default {
  name: "Clients",
  components: {
    BaseHeaderContent,
    BaseHeadline,
    BaseButton,
    BaseSearchField,
    BaseSelect,
    AddClients
  }
};
</script>

<style scoped lang="scss">
.clients {
  padding-bottom: 100px;
  .clients-header-content {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .clients-header-content-top {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 15px;
      &__title {
        margin-right: 20px;
      }
    }
    &__options {
      &-search {
        margin-bottom: 15px;
      }
      &-select {
        width: 100%;
        max-width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        &-item {
          width: 140px;
        }
      }
    }
  }
}
</style>