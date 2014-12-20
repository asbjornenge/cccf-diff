var assert  = require('assert')
var example = require('cccf/example.json')
var cs      = require('cccf-scale')
var clone   = require('clone')
var cdiff   = require('../index')

var current = [
	clone(example),
	clone(example)
]
var wanted  = [
	clone(example),
	clone(example)
]
current[1].id = 'remove'
wanted[1].id = 'new'

describe('cccd-diff', function() {

	it('returns an object with keep, add and remove', function() {
		var diff = cdiff(current, wanted)
		assert(typeof diff == 'object')
		assert(diff.keep.length == 1)
		assert(diff.add.length == 1)
		assert(diff.remove.length == 1)
	})

	it('works with scales', function() {
		var _wanted      = clone(wanted)
		_wanted[1].scale = 5
		var scaled = cs.up(_wanted)
		var diff = cdiff(current, scaled)
		assert(typeof diff == 'object')
		assert(diff.keep.length == 1)
		assert(diff.add.length == 5)
		assert(diff.remove.length == 1)
	})

	// it validates ... ?

})