import { Component, Prop, Provide, Vue } from 'vue-property-decorator'
import _template from './TestText.vue'

@Component({ mixins: [_template] })
export default class LlTestText extends Vue {
    @Provide() name: string = 'LlTestText'
    @Prop() private llTextStr !: String
}

// import Vue from 'vue'
// export default Vue.extend({
//     name: 'LlTestText',
//     props: { ll_text: { type: String, default: '' } },
//     data() {},
//     methods: {}
// })
