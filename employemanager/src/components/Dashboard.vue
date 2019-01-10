<template>
    <div id="Dashboard" >
        <ul class="collection with-header">
            <li class="collection-header"> 
                <h4>
                    Employees
                </h4>  
<!--  ?!!!!!!!!!!!!!!!!!!!!!!! How to make for in list correctly !!!!!!!!!!!!!!!!!!-->
            </li>
            <li v-for="employe in employes" v-bind:key="employe.id" class="collection-item" >{{employe.id}}:{{employe.name}}</li>
        </ul>
        <div class="fixed-action-btn">
           <router-link to="/new" class="btn-floating btn-large green" >
               <i class="fas fa-cart-plus    "></i>
            </router-link>
        </div>
    </div>
</template>
<script>
// !<!--  ?!!!!!!!!!!!!!!!!!!!!!!! How to make for in list correctly !!!!!!!!!!!!!!!!!!-->
import db from './firebaseInit'
export default {
    name:'Dashboard',
    data () {
        return {
            employes:[]
        }
    },
    created (){
        db.collection('employes').get().then
        (querySnapshot =>{querySnapshot.forEach(doc => { 
           
            const data ={ 
                'id': doc.id,
                'employe_id': doc.data().employe_id,
                'name': doc.data().name,
                'dept':doc.data().dept,
                'position': doc.data().position
            }
            this.employes.push(data)
        })
        })
    }
}
</script>
<!--  ?!!!!!!!!!!!!!!!!!!!!!!! How to make for in list correctly !!!!!!!!!!!!!!!!!!-->