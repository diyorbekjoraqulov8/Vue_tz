<template>
    
    <!-- <p v-for="user in users_data" :key="user">{{user.id}}</p> -->
    <div class="v-table">
        <div class="v-table__header">
            <transition name="id" mode="out-in">
                <p v-if="filterBool" class="id">
                    Id
                </p>
                <p v-else class="id" @click="sortByName('none')">
                    Id
                    <img src="../../assets/images/aronka.png" alt="">
                </p>
            </transition>
            <transition name="id" mode="out-in">
                <div v-if="filterBool" class="name" @click="sortByName('filter')">
                    Name
                    <img src="../../assets/images/aronka.png" alt="">
                </div>
                <div v-else class="name">
                    Name
                </div>
            </transition>
            <input class="nameFilter" type="text" v-model="nameValue">
            <p class="email">@email</p>
            <div class="body">
                Body
                <input class="body-input" type="text" v-model="bodyValue" placeholder="">
            </div>
        </div>
        <div class="v-table__body">
            <v-table-row 
                v-for="row in paginatedUsers"
                :key="row.id"
                :row_data="row"
            />
        </div>
        <div class="v-table__pagination">
            <div class="page" v-for="page in pages" :key="page" @click="pageClick(page)" :class="{'page__selected': page === pageNumber}">{{page}}</div>
        </div>
    </div>
</template>
<script>
import vTableRow from "./v-table-row.vue";
export default {
    components:{
        vTableRow,
    },
    props:{
        users_data:Array
    },
    data() {
        return {
            usersPerPage: 10,
            pageNumber: 1,
            filterBool: true,
            nameValue: "",
            bodyValue: ""
        }
    },
    computed:{
        notesFilter() {
            let array = this.users_data;
            let search = this.nameValue;
            if (!search) return array;
            search = search.trim().toLowerCase();
            array = array.filter((note) => {
                if (note.name.toLowerCase().indexOf(search) != -1) return note;
            });
            return array
        },
        pages(){
            return Math.ceil(this.bodyFilter.length / 10);
        },
        paginatedUsers(){
            let form = (this.pageNumber - 1) * this.usersPerPage;
            let to = form + this.usersPerPage;
            return this.bodyFilter.slice(form, to)
        },
        bodyFilter(){
            let body = this.notesFilter;
            let search = this.bodyValue;
            if (!search) return body;
            search = search.trim().toLowerCase();
            body = body.filter((note) => {
                if (note.body.toLowerCase().indexOf(search) != -1) return note;
            });
            return body
        }
    },
    methods: {
        pageClick(page){
            this.pageNumber = page
        },
        sortByName(val){
            if (val == 'filter') {
                this.users_data.sort((a,b)=>a.name.localeCompare(b.name))
                this.filterBool = false
            }else{
                this.users_data.sort((a,b)=>a.id - b.id)
                this.filterBool = true
            }
            
        }
    },
}
</script>
<style>
    .v-table{
        max-width: 1140px;
        margin: 0 auto;
    }
    .v-table__header{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e7e7e7;
    }
    .v-table__header p{
        text-align: left;
        cursor: pointer;
    }
    .v-table__pagination{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .page{
        padding: 8px;
        border: 1px solid #e7e7e7;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .page:hover{
        background: #aeaeae;
        cursor: pointer;
        color: #fff;
    }
    .page__selected{
        background: #aeaeae;
        cursor: pointer;
        color: #ffffff;
    }
    .id{
        margin-right: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .id img{
        width: 18px;
    }
    .name{
        margin-right: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .nameFilter{
        width: 100px;
        height: 20px;
        margin-right: 20px;
        outline: none;
    }
    .body-input{
        width: 100px;
        height: 20px;
        margin-left: 20px;
        outline: none;
    }
    .name img{
        width: 20px;
    }
    .email{
        margin-right: 230px;
    }
    .id-enter-active,
    .id-leave-active {
        transition: all 0.5s ease;
    }
    .id-enter-from,
    .id-leave-to {
        opacity: 0;
        transform: translateY(-30px);
    }
</style>