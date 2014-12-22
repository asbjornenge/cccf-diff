var cccf = require('cccf')

var unify = function(config) { return (config instanceof Array) ? config : [config] }

module.exports = function(current, wanted) {
	current = cccf.validate(unify(current))
	wanted  = cccf.validate(unify(wanted))

	var currentIds = current.map(function(container) { return container.id })
	var wantedIds = wanted.map(function(container)   { return container.id })
	var keep = wanted.filter(function(container)     { return currentIds.indexOf(container.id) >= 0 }) // keep   - in wanted & current
	var keepIds = keep.map(function(container)       { return container.id })
	var add = wanted.filter(function(container)      { return keepIds.indexOf(container.id) < 0 })     // add    - in wanted & not in keep
	var remove = current.filter(function(container)  { return keepIds.indexOf(container.id) < 0 })     // remove - in current & not in keep

	// console.log('keep',keep)
	// console.log('add',add)
	// console.log('remove', remove)

	return {
		add : add,
		keep : keep,
		remove : remove
	}
}