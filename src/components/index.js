// 物料加载器
// require.context - 指定文件读取
// 1. 加载初始组件
const req = require.context('./', false, /[^.]+\.vue/);

// 2. 加载初始化配置
const reqParser = require.context('./', false, /parser-[^.]+\.js/);


// 3. 模块分配
const componentsName = req.keys();

const components = componentsName.reduce((components, module) => {

    const mod = req(module);

    
    components[mod.default.name] = mod.default;

    return components;
}, {});

// 4. 配置分配
const parsersName = reqParser.keys();

const parsers = parsersName.reduce((parsers, module) => {
    const mod = reqParser(module);
    
    parsers[mod.default.name] = mod.default;
    return parsers;
}, {});

export {
    components,
    parsers
}