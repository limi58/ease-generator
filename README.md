# ease-generator
generate ease value

# Usage
1. install 

```
npm install --save ease-generator
```

or 

```html 
<script type="text/javascript" src='./dist/ease-generator.min.js'></script>
```

2. run

generator('backIn', 50, 2, 4)

// [ 0, -0.093, -0.1988, -0.058, 0.5884, 2 ]

# API

## generator()

**Array getNumbers(fn ease, num count [,num times = 1] [,num point = 4])**

**ease** 缓动类型，支持 `backIn, backOut, backInOut, bounceIn, bounceOut, bounceInOut, circleIn, circleOut, circleInOut, cubicIn, cubicOut, cubicInOut, elasticIn, elasticOut, elasticInOut, expIn, expOut, expInOut, linear, polyIn, polyOut, polyInOut, quadIn, quadOut, quadInOut, sinIn, sinOut, sinInOut` , 参考：[here](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4)

**count** 

生成数据数量

**times**

可选，数据扩大倍数，默认为 1

**point** 

可选，数据保留小数点后位数，默认 4

