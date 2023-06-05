<script>
import { components } from '../config';

export default {
    name: 'configPanel',
    props: {
        currentPickType: {
            type: String,
            default: 'cButton'
        }
    },
    components: {
        ...components
    },
    methods: {
        // 配置面板的渲染
        renderPanel(h, type) {
            if(!type) return;
            const components = this.$options.components;

            // 公用类型的注入
            return (
                components[type].render.call(this, h)
            )
        }
    },
    render(h) {
        const _type = this.currentPickType;
        let _panel = this.renderPanel(h, _type);
        
        // 数据进行加工解析，可在此处拓展
        return _panel;
    }
}
</script>
