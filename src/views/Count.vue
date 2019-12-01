<template>
    <div class="count">
        <h1>This is an count page</h1>
        <!--Vuexで管理されているstateを取得-->
        {{$store.state.count}}

        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementWithDelay">+…?</button>
    </div>
</template>

<script>
    export default {
        name: "Count.vue",
        methods: {
            //commitメソッドで、Vuex.storeに記述したmutationsにアクセス。
            increment() {
                this.$store.commit("increment");
            },
            decrement() {
                this.$store.commit("decrement");
            },
            incrementWithDelay(){
                this.$store.dispatch("increment");
            }
        }
    };
</script>

<style scoped>

</style>