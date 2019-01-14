<template>
    <div id="Dashboard">
    
        <ul class="collection with-header">
    
            <li class="collection-header">
    
                <h4>
    
                    Employees
    
                </h4>
    
                <!--  ?!!!!!!!!!!!!!!!!!!!!!!! How to make for in list correctly !!!!!!!!!!!!!!!!!!-->
    
            </li>
    
            <li v-for="employe in employes" v-bind:key="employe.id" class="collection-item">
    
                <div class="chip">{{employe.position}}</div>{{employe.employe_id}}:{{employe.name}}
    
                <router-link class="secondary-content" v-bind:to="{name:'ViewEmployee', params:{employee_id:employe.employe_id}}">
    
                    <i class="fa fa-eye"></i></router-link>
    
            </li>
    
        </ul>
    
        <div class="fixed-action-btn">
    
            <router-link to="/new" class="btn-floating btn-large green">
    
                <i class="fa fa-plus"></i>
    
            </router-link>
    
        </div>
    
    </div>
</template>
<script>
    // !<!--  ?!!!!!!!!!!!!!!!!!!!!!!! How to make for in list correctly !!!!!!!!!!!!!!!!!!-->
    
    import db from './firebaseInit'
    
    export default {
    
        name: 'Dashboard',
    
        data() {
    
            return {
    
                employes: []
    
            }
    
        },
    
        created() {
    
            db.collection('employes').orderBy('employee_id').get().then(querySnapshot => {
    
                querySnapshot.forEach(doc => {
    
    
    
                    const data = {
    
                        'id': doc.id,
    
                        'employe_id': doc.data().employee_id,
    
                        'name': doc.data().name,
    
                        'dept': doc.data().dept,
    
                        'position': doc.data().position
    
                    }
    
                    this.employes.push(data)
    
                })
    
            })
    
        }
    
    }
</script>
<!--  ?!!!!!!!!!!!!!!!!!!!!!!! How to make for in list correctly !!!!!!!!!!!!!!!!!!-->