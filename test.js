const test = require('tape')
const rooch = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(rooch)
})
