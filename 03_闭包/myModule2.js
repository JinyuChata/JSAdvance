/*
匿名函数自调用
添加为window的属性即可
更倾向于使用这一种: 只要引入这个文件即可"向window注册"模块
 */


(function (window) {    // 也可以不传参 会自动向外层找
    // 私有数据 -- 相当于创建了一个函数作用域 保存私有信息
    var msg = 'my atguigu'

    // 操作数据的函数
    function doSomething() {
        console.log('doSomething() ' + msg.toUpperCase());
    }

    function doOtherthing() {
        console.log('doOtherthing() ' + msg.toLowerCase());
    }

    // 匿名函数自调用：添加为window的属性
    // 暴露多个数据/函数: 封装成对象
    window.myModule2 = {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
})(window);