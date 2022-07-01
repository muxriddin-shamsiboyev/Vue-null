<template>
    <div>
        <BooksList />

        <div class="row">
            <div class="col" >
                <PaginationsList />
            </div>
        </div>

    </div>
</template>

<script>
import BooksList from "@/components/BooksList";
import PaginationsList from "@/components/PaginationsList";
export default {
    name: "HomePage",
    components: {PaginationsList, BooksList}
}
</script>

<style scoped>

</style>