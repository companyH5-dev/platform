import {
  Message
} from 'element-ui';



let verify = {
  nullFun: function(t) {
    return (t.use() === 'ch' ? 　"不能为空！" : " can not be empty!");
  },
  formatErrorFun: function(t) {
    return (t.use() === 'ch' ? 　"格式错误！" : " wrong format!");
  },
  fe: function(m, a, b) {
    return (m + "只能为" + (a + "") + " ~ " + (b + '') + "之间的数字！");
  },
  isNull: function(a) {
    return (a === "" || a.length === 0 || a === null || a === undefined ? true : false);
  },
  isNumber: function(a) {
    return !this.isNull(a) && !isNaN(a) ? true : false;
  },
  between: function(a, b, c) {
    return (!this.isNull(a) && !this.isNull(b) && !this.isNull(c) && this.isNumber(a) && this.isNumber(b) && this.isNumber(c) && b <= a && c >= a) ? true : false;
  },
  betweenN: function(a, b, c) {
    return (this.isNumberN(a) && this.isNumberN(b) && this.isNumberN(c) && b <= a && c >= a) ? true : false;
  },
  isNumberN: function(a) {
    return !isNaN(a) ? true : false;
  },

  isBianMa: function(str) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/g;
    return !re.test(str) ? true : false;
  },



}

function validachangePWD(str) {

  if (!str || verify.isNull(str.newPwd)) {
    Message({
      message: '密码不能为空！',
      type: 'error'
    });
    return false;
  }
  if (!str || verify.isBianMa(str.newPwd)) {
    Message({
      message: '密码必须包含至少一个字母和一个数字,长度大于6位！',
      type: 'error'
    });
    return false;
  }
  if (!str || verify.isNull(str.rePassword)) {
    Message({
      message: '请再次输入密码！',
      type: 'error'
    });
    return false;
  }

  return true;
}
//success/warning/info/error
export default {
  validachangePWD,
}
