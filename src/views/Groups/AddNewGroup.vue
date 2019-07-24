<template>
  <div class="add-new-group">
    <div class="container">
      <BaseHeaderContent class="add-new-group-header">
        <BaseButtonBack class="add-new-group-header__btn-back" to="/Groups/Groups">&lt; Назад</BaseButtonBack>
        <BaseHeadline class="add-new-group-header__title" title="Добавление группы"/>
      </BaseHeaderContent>
      <div class="add-new-group-content">
        <BaseInput
          class="add-new-group-content__input"
          required
          label="Добавление группы"
          type="text"
          placeholder="Введите название группы"
        />
        <BaseButton to type="primary">Добавить группу</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeaderContent from "@/components/base/BaseHeaderContent.vue";
import BaseHeadline from "@/components/base/BaseHeadline.vue";
import BaseButtonBack from "@/components/base/BaseButtonBack.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput.vue";
export default {
  name: "AddNewGroup",
  components: {
    BaseHeaderContent,
    BaseHeadline,
    BaseButton,
    BaseButtonBack,
    BaseInput
  }
};
</script>

<style scoped lang="scss">
.add-new-group {
  .add-new-group-header {
    margin-bottom: 20px;
    &__btn-back {
      margin-bottom: 10px;
    }
    &__title {
      margin-right: 20px;
    }
  }
  .add-new-group-content {
    .add-new-group-content__input {
      margin-bottom: 35px;
    }
  }
}
</style>