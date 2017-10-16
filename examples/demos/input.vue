<template>
    <div>
        <ic-flexbox>
            <ic-flexbox-item>
                <h1 class="title">Input输入</h1>
            </ic-flexbox-item>
        </ic-flexbox>
        <ic-group>
            <ic-input
             title="禁用验证"
             placeholder="I'm placeholder"
             :type="'text'"
             ></ic-input>
        </ic-group>
        <ic-group>
            <ic-input
                title="max=5"
                placeholder="I'm placeholder"
                :max="5"
                :type="'text'"
                ></ic-input>
        </ic-group>
        <ic-group>
            <ic-input
                title="节流"
                placeholder="I'm placeholder"
                :debounce="200"
                :type="'text'"
                @change="change"
                ></ic-input>
        </ic-group>
    </div> 
</template>
<script>
    export default {
        data (){
            return {

            }
        },
        methods: {
            change(val) {
                console.log(val)
            }
        }
    }
</script>

<style>
    
</style>