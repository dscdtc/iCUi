<template>
<div>
    <ic-progress-bar :percent="percent" @percentChange="onProgressBarChange"></ic-progress-bar>
</div>
</template>

<script>
    export default {
        data() {
            return {
                percent:35
            }
        },
        methods: {
            onProgressBarChange() {

            }
        }
    }
</script>