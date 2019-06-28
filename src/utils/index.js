/**
 * Created by gyx on 18/03/16.
 */

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}


function _newVals() {
  var deviceContent = $scope.deviceContent;
  var obj = [];
  for (var x in deviceContent) {
    var data = {};
    data.name = x;
    data.value = deviceContent[x];
    obj.push(data);
  }
  localStorage.setItem('valueDoms', JSON.stringify(obj));
}

function _changeVals(x) {
  var deviceContent = x;
  var obj = [];
  for (var x in deviceContent) {
    var data = {};
    data.name = x;
    data.value = deviceContent[x];
    obj.push(data);
  }
  var _vals = JSON.parse(localStorage.getItem('valueDoms')),
    changeObj = {};
  for (var i = 0; i < obj.length; i++) {
    var _id = obj[i].name,
      _val = obj[i].value;
    for (var j = 0; j < _vals.length; j++) {
      var _id2 = _vals[j].name,
        _val2 = _vals[j].value;
      if (_id === _id2) {
        if (_val != _val2) {
          changeObj[_id] = _val;
        }
      }
    }
  }
  return changeObj;
}

export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}
