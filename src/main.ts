/// <reference path="./greet.ts">
//接口约束对象
interface CreatO {
  age?: number;
  [propName: string]: any;
}
var c1: CreatO = {
  age: 1,
  a: '2'
};

//接口约束函数
interface CreatF {
  (name: string, age: number): number;
}
var c13: CreatF = function(name: string, age: number): number {
  return age;
};
//接口数组
interface CreatA {
  [index: number]: number;
}
var c2: CreatA = [2];
var c3: Array<number> = [1, 2];
var c4: number[] = [1, 2];
//接口只读
interface CreatB {
  age: number;
  readonly name: string;
}
var c5: CreatB;
c5 = {
  age: 20,
  name: 'xuchaopeng'
};

//联合类型
var c6: string | number | boolean = '2';
c6 = 2;
c6 = true;
c6.toString(); //只能访问共有属性或方法

//定义类型
var c7: number = 2;
var c8: string = '2';
var c9: boolean = false;
var c10: any = 'ha';
var c11: undefined = undefined; //只能等于
var c12: null = null;
c7 = null;
c10 = null;
c7 = undefined; //null undefined值是其它类型的子类型

//声明类型的函数
function xcp(name: string, age: number): number {
  return age;
}
var x1: number = xcp('xxp', 10);
//表达式类型的函数
var x4 = function(name: string, age: number): number {
  return age;
};
x4('x', 20);
var x5: (name: string, age: number) => number = function(name: string, age: number): number {
  return age;
};
x5('x', 20);

//重载 输入什么类型 返回什么类型
function x6(value: string): string;
function x6(value: number): number;
function x6(value: number | string): number | string {
  return value;
}
var x7: string = x6('1');
var x8: number = x6(1);

//类型断言 在jsx用as语法
function xcp1(name: string | number) {
  return (name as string).length;
  // return (<string>name).length;
}
var x9 = xcp1('2');
console.log(x9, '断言');
//第三方库

//枚举
enum Days {
  sub,
  mon,
  tue,
  web,
  tuh
}
Days.sub == 0;
console.log(Days[0]);

//类的修饰符 public公开属性 private内部才可以访问,子类也无访问 protected 修饰属性是受保护的，但允许子类访问
class Person {
  private name = 'xuchaopeng';
  protected age = 28;
  walk() {
    console.log('name:' + this.name, 'age:' + this.age);
  }
  protected xcp() {
    console.log('name:' + this.name, 'age:' + this.age);
  }
}

var p = new Person();
p.walk();

class Child extends Person {
  callParent() {
    console.log(super.xcp);
  }
  //静态方法
  static test() {
    console.log('静态方法');
  }
}
var child = new Child();
child.callParent();
Child.test(); //静态方法不能用this，只有实例化的时候才能用
child.walk(); //子类拥有父类的一切方法,优先寻找自己的方法，无则向父类查找

function creatArray(length: number, value: any): Array<any> {
  let arr = [];
  for (var i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
}
var x2: string[] = creatArray(3, '1');

//泛型，针对于不可以指定类型的函数设定的
function creatArray1<T>(length: number, value: T): Array<T> {
  let arr = [];
  for (var i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
}
var x3: number[] = creatArray1(3, 2);
//接口方式的泛型
interface ICreat {
  <T>(name: string, value: T): Array<T>;
}
var creatArray2: ICreat;
creatArray2 = function<T>(name: string, value: T): Array<T> {
  return [];
};

//注意 ： 文件有jsx语法， 一定要以tsx文件格式
