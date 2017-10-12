<template>
    <div class="ic-nav-light">
        <div class="ic-nav-left" @click="$emit('clickLeft')">
            <slot name="leftContent">
                 <ic-icon name="back" v-if="leftIcon"></ic-icon>
                 <span v-if="leftContent" v-text="leftContent"></span>
            </slot>
        </div>
        <div class="ic-nav-title">
            <slot name="title">{{ title }}</slot>
        </div>
        <div class="ic-nav-right">
            <slot name="rightContent">
                <ic-icon name="ellipsis" v-if="rightIcon"></ic-icon>
            </slot>
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
            },
            rightContent: {
                type: String,
                default:''
            },
            leftIcon :{
                type: Boolean,
                default:true
            },
            rightIcon :{
                type: Boolean,
                default:false
            }
        }
    }
</script>