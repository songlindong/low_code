<template>
    <div class="container" @dragover.prevent @drop.stop="handleDrop">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'container',
    data() {
        return {
            btn: '我是按钮'
        }
    },
    props: {
        jsonSchema: {
            type: Object,
            default: function() {
                return {}
            }
        }
    },
    methods: {
        handleDrop(e) {
            this.$emit('drop', e, this)
        }
    }
}
</script>

<style scoped>
    .container {
        border: 1px solid #ccc;
        background-color: #eee;
        min-height: 300px;
        width: 100%;
    }
</style>