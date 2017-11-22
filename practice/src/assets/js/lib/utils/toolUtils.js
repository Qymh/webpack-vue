/**
 * 数据是否为空
 * @param {*} item 
 */
function isNullOrEmpty(item){
  if(!item){
    return true
  }

  let type=typeof item
  let bool

  switch (type) {
    // 字符
    case 'string':
      if(item.trim===''||item.trim()==='null'||item.trim()=='undefined'){
        bool=true
      }else{
        bool=false
      }
      break;
    // 数字
    case 'number':
      if(item===0){
        bool=true
      }else{
        bool=false
      }
    // 对象
    case 'object':
      if(Object.keys(item).length===0||item===null){
        bool=true
      }else{
        bool=false
      }
      break;
    // undefined
    case 'undefined':
      bool=true
      break;
    case 'function':
      console.error('item can not be function')
      break;
    default:
      console.error('unkown type')
      break;
  }
}

/**
 * 数字的数组排序
 * @param {Array} arr 
 * @private {Number} order
 */
function sortArr(arr,order){

  function compare(a,b){
    if(order===-1){
      return b-a
    }else{
      return a-b
    }
  }

  // 参数不为数组
  if(typeof arr !=='array'){
    return arr
  }

  // 参数为空
  if(isNullOrEmpty(arr)){
    return []
  }

  return arr.sort(compare)
}

/**
 * 字符的数组排序
 * @param {Array} arr 
 */
function sort(arr,){
  return arr.sort()
}

/**
 * 获取当前时间(s)
 */
function getTiming(){
  return Math.round(new Date().getTime()/1000)
}

export default{
  isNullOrEmpty,
  sort,
  sortArr,
  getTiming
}