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
 * 数组排序
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

export default{
  isNullOrEmpty,
  sortArr
}