import container from './container.vue'

export default {
    name: 'Container',

    components: {
        container
    },

    render(h, section, children) {
        const _this = this;
        const _props = {
            props: {
                jsonSchema: section
            }
        };
        // 传递参数
        const _propsOn = {
            nativeOn: {
                click: e => {
                    e.stopPropagation();
                    _this.$emit('pickType', 'container');
                }
            },
            on: {
                dragover: _this.handleDragOver,
                drop: _this.handleDrop
            }
        };

        return (
            <container
                { ..._propsOn }
                { ..._props }
            >
                { children }
            </container>
        )
    }
}