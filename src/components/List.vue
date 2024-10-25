<template>
    <div>
       <button v-on:click="increment">Pencet Aku Sayang</button>
       <button v-on:click="decrement">Mines</button>
       <p> {{ counter }} </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0

        };
    },
    methods: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        }
    }
}
</script>