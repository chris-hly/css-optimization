## 优先级 ##
+ 类型选择器
+ 类选择器
+ 属性选择器
+ ID选择器
+ !important
**优先级从上至下一次增强**

`通配选择符（universal selector）（*）关系选择符（combinators）（+, >, ~, ' ', ||）和 否定伪类（negation pseudo-class）（:not()）对优先级没有影响。（但是，在 :not() 内部声明的选择器会影响优先级）。`