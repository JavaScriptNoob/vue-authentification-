<template>
  <div id="VieweEployee" style="margin:10px;">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{name}}</h4>
      </li>
      <li class="collection-item">Employee ID#:{{employee_id}}</li>
      <li class="collection-item">Department:{{dept}}</li>
      <li class="collection-item">Position:{{position}}</li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button @click="deleteEmployee" to="/" class="btn red">Delete</button>
    <div class="fixed-action-btn">
   
      <router-link v-bind:to="{name:'EditEmployee',params:{employee_id:employee_id}}" class="btn-floating btn-large green">
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
import db from "./firebaseInit.js";
export default {
  name: "ViewEmployee",
  data() {
    return {
      employe_id: null,
      name: null,
      dept: null,
      position: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("employes")
      .where("employee_id", "==", to.params.employee_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.employee_id = doc.data().employee_id;
            vm.name = doc.data().name;
            vm.dept = doc.data().dept;
            vm.position = doc.data().position;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("employes")
        .where("employee_id", "==", this.$route.params.employee_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.employee_id = doc.data().employee_id;
            this.dept = doc.data().dept;
            this.name = doc.data().name;
            this.position = doc.data().position;
          });
        });
    },
    deleteEmployee() {
      if (confirm("are you sure?")) {
        db.collection("employes")
          .where("employee_id", "==", this.$route.params.employee_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/");
            });
          });
      }
    }
  }
};
</script>
