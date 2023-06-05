const defaultJson = {
    type: 'cButton',
    disabled: false,
    sections: []
}

const json = {
    key: 'cButton',
    name: 'cButton',
    default() {
        return Object.assign({
            // 公用部分
        }, defaultJson)
    },
    panelCore: {
        model: [{
            field: 'disabled',
            title: '是否禁用',
            type: 'el-checkbox'
        }]
    }
}

export default json