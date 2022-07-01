<template>
    <div id="app">
        <div class="container-fluid">

            <!-- header qatori start -->
            <div class="row">
                <div class="col">
                    <header>
                        <NavBar/>
                    </header>
                </div>
            </div>
            <!-- header qatori end -->

            <!-- main qatori start -->
            <div class="row mt-4">

                <!-- sideBar start -->
                <div class="col-12 col-md-2">
                    <CategoriesList/>
                </div>
                <!-- sideBar end -->

                <!-- kontent start -->
                <div class="col-12 col-md-10">

                    <!--                    &lt;!&ndash; kitoblar qatori start &ndash;&gt;-->
                    <!--                    <div class="row mt-4 mt-md-0">-->

                    <!--                        &lt;!&ndash; kitob start &ndash;&gt;-->
                    <!--                        <BooksList />-->
                    <!--                        &lt;!&ndash; kitob end &ndash;&gt;-->

                    <!--                    </div>-->
                    <!--                    &lt;!&ndash; kitoblar qatori end &ndash;&gt;-->

                    <!--                    &lt;!&ndash; pagination start &ndash;&gt;-->
                    <!--                    <div class="row">-->
                    <!--                        <div class="col">-->
                    <!--                            <PaginationsList />-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <!--                    &lt;!&ndash; pagination end &ndash;&gt;-->

                    <router-view />
                </div>
                <!-- kontent end -->

            </div>
            <!-- main qatori end -->


            <!-- footer start -->
            <div class="row">
                <div class="col bg-dark text-light p-5">
                    <FooterComponent/>
                </div>
            </div>
            <!-- footer end -->
        </div>
    </div>
</template>

<script>


import NavBar from "@/components/NavBar";
import CategoriesList from "@/components/CategoriesList";
import FooterComponent from "@/components/FooterComponent";

export default {
    name: 'App',
    components: {
        FooterComponent,
        CategoriesList,
        NavBar

    }
}
</script>

<style>

</style>
