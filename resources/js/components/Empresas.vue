<template>
    <div>
        <b-tabs type="is-boxed">
            <b-tab-item label="General" icon="silverware-fork-knife">
                <m-main></m-main>
            </b-tab-item>
            <b-tab-item label="Polleria" icon="food-drumstick">
                <pollo></pollo>
            </b-tab-item>
            <b-tab-item label="Restaurant" icon="food-variant">
                <restaurant></restaurant>
            </b-tab-item>
            <b-tab-item label="Pasteleria y Cafeteria" icon="coffee">
                <cafe></cafe>
            </b-tab-item>
            <b-tab-item label="Rest. Campestre" icon="food-steak">
                <campestre></campestre>
            </b-tab-item>
            <b-tab-item label="Pizzas" icon="pizza">
                <pizza></pizza>
            </b-tab-item>
            <b-tab-item label="Chifa" icon="noodles">
                <chifa></chifa>
            </b-tab-item>
            <b-tab-item label="Fast Food" icon="food">
                <fast></fast>
            </b-tab-item>
            <b-tab-item label="Bar" icon="glass-wine">
                <bar></bar>
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script>
import MMain from './tipo/Main.vue'
import Restaurant from './tipo/Restaurant.vue'
import Chifa from './tipo/Chifa.vue'
import Campestre from './tipo/Campestre.vue'
import Pizza from './tipo/Pizza.vue'
import Cafe from './tipo/Cafe.vue'
import Fast from './tipo/Fast.vue'
import Pollo from './tipo/Polleria.vue'
import Bar from './tipo/Bar.vue'

export default {
    components: {
        MMain,
        Restaurant,
        Chifa,
        Campestre,
        Pizza,
        Cafe,
        Fast,
        Pollo,
        Bar
    }
}
</script>

<style lang="scss">
.b-tabs .tab-content {
    padding: 0;
}
</style>