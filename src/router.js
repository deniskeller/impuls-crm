import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard/Dashboard.vue";
import Groups from "./views/Groups/Groups.vue";
import AddNewGroup from "./views/Groups/AddNewGroup.vue";
import Clients from "./views/Clients/Clients.vue";
import AddNewClient from "./views/Clients/AddNewClient.vue";
import EditClient from "./views/Clients/EditClient.vue";
import ClientPage from "./views/Clients/ClientPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Dashboard/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/Groups/Groups",
      name: "Groups",
      component: Groups
    },
    {
      path: "/Groups/AddNewGroup",
      name: "AddNewGroup",
      component: AddNewGroup
    },
    {
      path: "/Clients/Clients",
      name: "Clients",
      component: Clients
    },
    {
      path: "/Clients/AddNewClient",
      name: "AddNewClient",
      component: AddNewClient
    },
    {
      path: "/Clients/EditClient",
      name: "EditClient",
      component: EditClient
    },
    {
      path: "/Clients/ClientPage",
      name: "ClientPage",
      component: ClientPage
    }
  ]
});
