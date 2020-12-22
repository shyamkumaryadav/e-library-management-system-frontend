<template>
<div>
    <h1>Error 440</h1>
    <p>{{ data_test }}</p>
    </div>
</template>

<script>
export default {
    name:'Error404',
    created:function(){
        console.error("Error: 404")
        console.log(process.env.VUE_APP_API_URL)
        console.log(process.env.VUE_APP_TITLE)
    },
    computed:{
        data_test(){
            return process.env
        }
    }
}
</script>