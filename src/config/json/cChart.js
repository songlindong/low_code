const defaultJson = {
    type: 'cChart',
    placeholder: '请输入',
    sections: []
}

const json = {
    key: 'cChart',
    name: 'cChart',
    default() {
        return Object.assign({
            // 公用部分
        }, defaultJson)
    },
    panelCore: {
        model: [{
            field: 'placeholder',
            title: 'placeholder',
            type: 'el-input'
        }]
    }
}

export default json