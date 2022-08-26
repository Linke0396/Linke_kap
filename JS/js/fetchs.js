// 定义用来存储拦截请求和拦截响应结果的处理函数集合
let interceptors_req = [], interceptors_res = [];

function expand_fetch(input, init = {}) {
  // fetch默认请求方式设为GET
  if (!init.method) {
    init.method = 'GET';
  }

  // interceptors_req是拦截请求的拦截处理函数集合
  interceptors_req.forEach(interceptors => {
    init = interceptors(init);
  })

  // 在原生fetch外面封装一个promise，为了在promise里面可以对fetch请求的结果做拦截处理
  // 同时，保证expand_fetch函数返回的结果是个promise对象
  return new Promise(function (resolve, reject) {
    //发起fetch请求，fetch请求的形参是接收上层函数的形参
    fetch(input, init).then(res => {
      // interceptors_res是拦截响应结果的拦截处理函数集合
      interceptors_res.forEach(interceptors => {
        // 拦截器对响应结果做处理，把处理后的结果返回给响应结果
        res = interceptors(res);
      })
      // 将拦截器处理后的响应结果resolve出去
      resolve(res)
    }).catch(err => {
      reject(err);
    })
  })
}

// 在expand_fetch函数上面增加拦截器interceptors，拦截器提供request和response两种拦截器功能
// 并且提供了删除指定拦截器的eject方法
expand_fetch.interceptors = {
  request: {
    use: function (callback) {
      interceptors_req.push(callback);
      return callback;
    },
    eject: function (data) {
      if (interceptors_req.indexOf(data) !== -1) {
        interceptors_req.splice(interceptors_req.indexOf(data), 1);
      }
    }
  },
  response: {
    use: function (callback) {
      interceptors_res.push(callback);
      return callback;
    },
    eject: function (data) {
      if (interceptors_res.indexOf(data) !== -1) {
        interceptors_res.splice(interceptors_res.indexOf(data), 1);
      }
    }
  }
}

export default expand_fetch;