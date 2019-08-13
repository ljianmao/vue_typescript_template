import { Component, Prop, Provide, Vue } from 'vue-property-decorator'
import _template from './Test.vue'

@Component({ mixins: [_template] })
export default class LlTest extends Vue {
    @Provide() name: string = 'LlTest'
    @Prop({ type: String, default: '内容' }) llText !: String

}
