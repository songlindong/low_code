<script>
import { components, parsers } from '../components/index'
export default {
    name: 'renderEngine',
    props: {
        jsonSchema: {
            type: Object,
            default: () => {
                return {}
            }
        },
        addNode: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            page: undefined
        }
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.page = this.jsonSchema.page || {};
        },
        renderRoot(h) {
            let _page = this.page;
            // 拓展全局信息注入
            // * 网络层注入 => eject
            // * new Function => iframe sandbox
            return (
                <div class="root">
                    { this.renderComponents(h, _page) }
                </div>
            )
        },
        renderComponents(h, section) {
            let _children = null;

            if (section.children) {
                // 布局组件
                _children = this.renderChildren(h, section);
            }
            return this.startRender(h, section, _children);
        },
        renderChildren(h, section) {
            let _nodeArray = section.children || [].concat(section);
            
            // 在此可以拓展兄弟节点之间的逻辑
            return _nodeArray.map((n, i) => this.renderComponents(h, n, i));
        },
        startRender(h, section, _children) {
            const _type = section.type;
            const renderMod = parsers[_type];

            if (renderMod) {
                return renderMod.render.call(this, h, section, _children);
            }
            return null;
        },
        // 拖拽松手
        handleDrop(event, vm) {
            const _json = vm.jsonSchema;

            // 维护const列表，专门陈列所有布局组件
            if (_json && _json.type === 'Container') {
                if (!_json.children) {
                    this.$set(_json, 'children', []);
                }
                _json.children.push({
                    type: this.addNode
                })
            }
        },
        // 拖拽组件途径的过程
        handleDragOver() {
        }
    },
    components: {
        ...components,
        ...parsers
    },
    render(h) {
        // 后续可拓展预处理逻辑
        return this.renderRoot(h);
    }
}
</script>