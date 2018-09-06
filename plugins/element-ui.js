import Vue from 'vue'

import locale from 'element-ui/lib/locale'
import english from 'element-ui/lib/locale/lang/en'

// Layout container components:
import Container from 'element-ui/lib/container'
import Header from 'element-ui/lib/header'
import Footer from 'element-ui/lib/footer'
import Main from 'element-ui/lib/main'
import Row from 'element-ui/lib/row'
import Col from 'element-ui/lib/col'

// Form components:
import Button from 'element-ui/lib/button'
import Form from 'element-ui/lib/form'
import FormItem from 'element-ui/lib/form-item'
import Input from 'element-ui/lib/input'

import Message from 'element-ui/lib/message'
import Alert from 'element-ui/lib/alert'

export default () => {
  locale.use(english)

  // Layout container components:
  Vue.component('el-container', Container)
  Vue.component('el-header', Header)
  Vue.component('el-footer', Footer)
  Vue.component('el-main', Main)
  Vue.component('el-row', Row)
  Vue.component('el-col', Col)

  // Form components:
  Vue.component('el-button', Button)
  Vue.component('el-form', Form)
  Vue.component('el-form-item', FormItem)
  Vue.component('el-input', Input)

  Vue.component('el-alert', Alert)
  Vue.prototype.$message = Message
}
