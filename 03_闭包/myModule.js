/*
    闭包的应用2：创建自定义JS模块
    - 具有特定功能的JS模块
    - 将所有的数据和功能都封装在一个函数的内部(私有)
    - 只向外暴露一个包裹n个方法的对象或函数
    - 模块的使用者 只需要通过暴露的方法调用即可使用
 */

function myModule() {
    // 私有数据
    var msg = 'my atguigu'

    // 操作数据的函数
    function doSomething() {
        console.log('doSomething() ' + msg.toUpperCase());
    }

    function doOtherthing() {
        console.log('doOtherthing() ' + msg.toLowerCase());
    }

    // 向外暴露函数
    return {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
}