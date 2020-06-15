/**
 * 判断是不是纯对象
 *
 * @description isPlainObject函数是redux自己用来判断传递给reducer的action对象是一个plain object，
 * 也就是通过字面量方式或者Object构造函数的方式生成的对象，中间没有发生其他的继承情况，
 * 保持action对象是一个plain object的作用是，
 * 方便reducer进行处理，不用处理其他的情况（例如：promise/function/class实例等等），
 * 另一方面，也是方便的对状态进行记录或者回溯（比如说redux devtool工具里的action删除、跳过等操作）
 *
 * @param obj The object to inspect.
 * @returns True if the argument appears to be a plain object.
 * 
 * @see https://juejin.im/post/5c373f3a6fb9a049d4420461
 * @see https://yanni4night.github.io/js/2018/02/06/is-plainobject.html
 */
export default function isPlainObject(obj: any): boolean {
  if (typeof obj !== 'object' || obj === null) return false

  let proto = obj

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(obj) === proto
}
