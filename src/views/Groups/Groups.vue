<template>
  <div class="groups">
    <div class="container">
      <BaseHeaderContent class="groups-header-content">
        <BaseHeadline class="groups-header-content__title" title="Группы"/>
        <BaseButton to="/Groups/AddNewGroup" type="primary">Добавить группу +</BaseButton>
      </BaseHeaderContent>
      <div class="groups-content-table">
        <AddGroups/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeaderContent from "@/components/base/BaseHeaderContent.vue";
import BaseHeadline from "@/components/base/BaseHeadline.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import AddGroups from "@/components/groups/AddGroups.vue";
export default {
  name: "Groups",
  components: {
    BaseHeaderContent,
    BaseHeadline,
    BaseButton,
    AddGroups
  }
};
</script>

<style scoped lang="scss">
.groups {
  padding-bottom: 100px;
  .groups-header-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    &__title {
      margin-right: 20px;
    }
  }
}
</style>