import * as print from './print'
import vue from 'vue'

let $div=document.createElement('div')

$div.innerHTML='123'

$div.onclick=print.one

document.body.appendChild($div)