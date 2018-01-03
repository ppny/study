# promise
Es6规定，Promise对象是一个构造函数，用来生成Promise实例。

const ajax = model => { 
  //拼接url  
  model.url = "https://t.api.fdid.fangde.com" + model.url;
  //返回Promise对象  
  return new Promise(
    function (resolve) {
      wx.request({
        method: model.method,
        url: model.url,
        data: model.data,
        success: (res) => {
          wx.hideLoading()
          if (res.statusCode == 200) {
            resolve(res.data);
          } else {
            //错误信息处理  
            wx.showModal({
              title: '提示',
              content: '服务器错误，请联系客服',
              showCancel: false,
            })
          }
        }
      })
    }
  )
}

## promise.prototype.then(f1,[f2])
Promise实例具有then方法，then方法是定义在原型对象Promise.prototype上的。
作用：为Promise实例添加状态改变时的毁掉函数。
参数：then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。
返回：then方法返回的是一个新的promise实例
## promise.prototype.catch ===> promise.prototype.then(null,f2)

## promise.all()
作用：将多个Promise实例包装成一个新的Promise实例
参数：接受一个数组作为参数
状态决定：由参数中的promise对象共同决定

const p = Promise.all([p1,p2,p3])

例子：
##### 生成一个promise对象的数组

<code>
  const promise = [2,3,4,5,6].map(function(id){</br>
    return getJSON('/post/' + id + ".json");</br>
 })</br>
</code>
<code>
    Promise.all(promises).then(function(posts){</br>
        ...</br>
    }).catch(function(reason){</br>
        ...</br>
    })
</code>
promises是包含6个 Promise 实例的数组，只有这6个实例的状态都变成fulfilled，或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数。
