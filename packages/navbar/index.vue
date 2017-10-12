<template>
    <div class="ic-nav-light">
        <div class="ic-nav-left" @click="$emit('clickLeft')">
            <span class="ic-icon ic-icon-back"></span>
            <span>
                <slot name="leftContent">{{ leftContent }}</slot>
            </span>
        </div>
        <div class="ic-nav-title">
            <slot name="title">{{ title }}</slot>
        </div>
        <div class="ic-nav-right">
            
        </div>
    </div>
</template>

<script>
    const COMPONENT_NAME = 'ic-navbar'
    export default {
        name: COMPONENT_NAME,
        props: {
            title: {
                type: String,
                default:''
            },
            leftContent: {
                type: String,
                default:''
            }
        }
    }
</script>