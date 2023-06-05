<template>
    <div class="config-panel">
        <template>
            <config-module v-for="(modJson, name) in editorJson" ref="configModule" :key="name"
                :modJson="modJson"
                :value="currentValue"
            >
            </config-module>
        </template>
    </div>
</template>

<script>
import configModule from './configModule.vue'
import json from '../json'

let components = json.configs

function getJson(type) {
    let component = components[type] || {}
    let panelConfig = component.panelCore || {}
    let _json = panelConfig.model || {}

    return _json;
}

export default {
    components: {
        configModule
    },
    props: {
         currentPickType: {
            type: String,
            default: ''
        },
        value: {
            type: Object,
            default: function() {
                return {}
            }
        }
    },
    data() {
        let _json = getJson(this.currentPickType)
        let defaultVal = _json.default
        let currentValue = this.value

        if(!currentValue || Object.keys(currentValue).length === 0) {
            currentValue = defaultVal;
        }

        return {
            currentValue,
            editorJson: _json,
            store: {}
        }
    },
    watch: {
        currentPickType() {
            let _json = getJson(this.currentPickType)

            this.editorJson = _json;
        }
    }
}
</script>