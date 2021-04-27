import {expectType, expectError} from 'tsd'
import {Root, Element} from 'hast'
import {h, s} from './index.js'

expectType<Root>(h())
expectType<Root>(s())
expectError(h(true))
expectType<Root>(h(null))
expectType<Root>(h(undefined))
expectType<Element>(h(''))
expectType<Element>(s(''))
expectType<Element>(h('', null))
expectType<Element>(h('', undefined))
expectType<Element>(h('', 1))
expectType<Element>(h('', 'a'))
expectError(h('', true))
expectType<Element>(h('', [1, 'a', null]))
expectError(h('', [true]))

expectType<Element>(h('', {}))
expectType<Element>(h('', {}, [1, 'a', null]))
expectType<Element>(h('', {p: 1}))
expectType<Element>(h('', {p: null}))
expectType<Element>(h('', {p: undefined}))
expectType<Element>(h('', {p: true}))
expectType<Element>(h('', {p: false}))
expectType<Element>(h('', {p: 'a'}))
expectType<Element>(h('', {p: [1]}))
expectError(h('', {p: [true]}))
expectType<Element>(h('', {p: ['a']}))
expectType<Element>(h('', {p: {x: 1}})) // Style
expectError(h('', {p: {x: true}}))

expectType<Element>(
  s('svg', {xmlns: 'http://www.w3.org/2000/svg', viewbox: '0 0 500 500'}, [
    s('title', 'SVG `<circle` element'),
    s('circle', {cx: 120, cy: 120, r: 100})
  ])
)