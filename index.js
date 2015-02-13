var cccf = require('cccf')

var unify     = function(config)    { return (config instanceof Array) ? config : [config] }
var stringify = function(container) { return JSON.stringify(container) }

module.exports = function(current, wanted) {
	current = cccf.validate(unify(current)).map(stringify)
	wanted  = cccf.validate(unify(wanted)).map(stringify)

	var keep   = wanted.filter(function(container)  { return current.indexOf(container) >= 0 }) // keep   - in wanted & current
	var add    = wanted.filter(function(container)  { return keep.indexOf(container) < 0 })     // add    - in wanted & not in keep
	var remove = current.filter(function(container) { return keep.indexOf(container) < 0 })     // remove - in current & not in keep

	// console.log('keep',keep)
	// console.log('add',add)
	// console.log('remove', remove)

	return {
		add : add,
		keep : keep,
		remove : remove
	}
}
