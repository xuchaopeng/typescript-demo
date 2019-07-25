var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var c1 = {
    age: 1,
    a: '2'
};
var c13 = function (name, age) {
    return age;
};
var c2 = [2];
var c3 = [1, 2];
var c4 = [1, 2];
var c5;
c5 = {
    age: 20,
    name: 'xuchaopeng'
};
//联合类型
var c6 = '2';
c6 = 2;
c6 = true;
c6.toString(); //只能访问共有属性或方法
//定义类型
var c7 = 2;
var c8 = '2';
var c9 = false;
var c10 = 'ha';
var c11 = undefined; //只能等于
var c12 = null;
c7 = null;
c10 = null;
c7 = undefined; //null undefined值是其它类型的子类型
//声明类型的函数
function xcp(name, age) {
    return age;
}
var x1 = xcp('xxp', 10);
//表达式类型的函数
var x4 = function (name, age) {
    return age;
};
x4('x', 20);
var x5 = function (name, age) {
    return age;
};
x5('x', 20);
function x6(value) {
    return value;
}
var x7 = x6('1');
var x8 = x6(1);
//类型断言 在jsx用as语法
function xcp1(name) {
    return name.length;
    // return (<string>name).length;
}
var x9 = xcp1(2);
console.log(x9, '断言');
//第三方库
//枚举
var Days;
(function (Days) {
    Days[Days["sub"] = 0] = "sub";
    Days[Days["mon"] = 1] = "mon";
    Days[Days["tue"] = 2] = "tue";
    Days[Days["web"] = 3] = "web";
    Days[Days["tuh"] = 4] = "tuh";
})(Days || (Days = {}));
Days.sub == 0;
console.log(Days[0]);
//类的修饰符 public公开属性 private内部才可以访问,子类也无访问 protected 修饰属性是受保护的，但允许子类访问
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'xuchaopeng';
        this.age = 28;
    }
    Person.prototype.walk = function () {
        console.log('name:' + this.name, 'age:' + this.age);
    };
    Person.prototype.xcp = function () {
        console.log('name:' + this.name, 'age:' + this.age);
    };
    return Person;
}());
var p = new Person();
p.walk();
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.callParent = function () {
        console.log(_super.prototype.xcp);
    };
    //静态方法
    Child.test = function () {
        console.log('静态方法');
    };
    return Child;
}(Person));
var child = new Child();
child.callParent();
Child.test(); //静态方法不能用this，只有实例化的时候才能用
child.walk(); //子类拥有父类的一切方法,优先寻找自己的方法，无则向父类查找
function creatArray(length, value) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = value;
    }
    return arr;
}
var x2 = creatArray(3, '1');
//泛型，针对于不可以指定类型的函数设定的
function creatArray1(length, value) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = value;
    }
    return arr;
}
var x3 = creatArray1(3, 2);
var creatArray2;
creatArray2 = function (name, value) {
    return [];
};
//注意 ： 文件有jsx语法， 一定要以tsx文件格式
