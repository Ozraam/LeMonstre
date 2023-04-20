<script setup>
    const route = useRoute();


</script>

<template class="bg">
    <section class="container-fluid">
        
        <div class="row justify-content-center align-items-center vh-100">
            <InfoEndGame :state="route.params.state" class="col-auto" />
            
        </div>
    </section>
</template>

<style scoped>
    

    .container-fluid {
        background-image: url("~/public/images/background-start.png");
        height: 100vh;
        background-position: center;

    }
</style>