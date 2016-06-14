import {backIn, backOut, backInOut} from './back.js'
import {bounceIn, bounceOut, bounceInOut} from './bounce.js'
import {circleIn, circleOut, circleInOut} from './circle.js'
import {cubicIn, cubicOut, cubicInOut} from './cubic.js'
import {elasticIn, elasticOut, elasticInOut} from './elastic.js'
import {expIn, expOut, expInOut} from './exp.js'
import {linear} from './linear.js'
import {polyIn, polyOut, polyInOut} from './poly.js'
import {quadIn, quadOut, quadInOut} from './quad.js'
import {sinIn, sinOut, sinInOut} from './sin.js'

const eases = {
  backIn, backOut, backInOut, 
  bounceIn, bounceOut, bounceInOut,
  circleIn, circleOut, circleInOut, 
  cubicIn, cubicOut, cubicInOut, 
  elasticIn, elasticOut, elasticInOut, 
  expIn, expOut, expInOut,
  linear, 
  polyIn, polyOut, polyInOut, 
  quadIn, quadOut, quadInOut, 
  sinIn, sinOut, sinInOut,
}

export default eases