import Vue from 'vue'
import LlTest from './components/ll-test/Test'
import LlTestText from './components/ll-test-text/TestText'

declare global {
    interface Window { Vue: any }
}

window.Vue = window.Vue || Vue || {}

const components = {
    LlTest,
    LlTestText
}
const llvue: any = Object.assign({}, components)

const install: any = function (Vue: any, opts: any): any {
    if (install.installed) return

    Object.keys(components).forEach(component => {
        Vue.component(component, component)
    })
}

// 用于script标签引入
// tslint:disable-next-line: strict-type-predicates
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue, null)
}

llvue.install = install

// 输出default变量，用于全量引入
export default 'll-vue'
// 输出各个组件，用于按需引入
export {
    LlTest,
    LlTestText
}
