<template>
    <div class="v-table-row">
        <div class="row row__id"> {{row_data.id}} </div>
        <div class="row row__name"> {{ row_data.name }} </div>
        <div class="row row__email"> {{ row_data.email }} </div>
        <div class="row row__body"> {{ row_data.body }} </div>
    </div>
</template>
<script>
export default {
    props:{
        row_data: Object,
    }
}
</script>
<style>
    .v-table-row{
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid rgba(116, 163, 250, 0.384);
    }
    .row {
        padding: 8px 16px;
        text-align: left;
    }
    .row__name{
        max-width: 300px;
        width: 100%;
    }
    .row__email{
        max-width: 250px;
        width: 100%;
    }
</style>