<template>
    <div class="col-12 col-sm-6 col-lg-3 mb-4">
        <div class="card">
            <img src="../../public/img/otkan-kunlar.jpg" class="card-img-top" alt="kitob rasmi">
            <div class="card-body">
                <h5 class="card-title">O'tkan kunlar</h5>
                <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
                <router-link to="/book-view" class="btn btn-primary">O'qish</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BooksList"
}
</script>

<style scoped>

</style>