
/**
 * 弹窗
 * @param {String} type 
 * @param {String} text 
 */
$.alert=function(type,text){

  if(!type){
    return
  }

  text=text||'' // 默认文字为空

  let baseHtml=`
    <div class="alertBackground"></div>
  `

  switch (type) {
    // 菊花图
    case 'loading':
      baseHtml+=`<div class="alertLoading" flex="cross:center main:center">loading</div>`
      break;
    // 温馨提示
    case 'remind':
      baseHtml+=`<div class="alertRemind" flex="cross:center main:center">${text}</div>`
      break;
    // 警告
    case 'warning':
      baseHtml+=`<div class="alertWarning" flex="cross:center main:center">${text}</div>`
      break;
  }

  $('body').append($(baseHtml))
}

$.removeAlert=function(){
  $('.alertBackground').next('div').remove()
  $('.alertBackground').remove()
}
