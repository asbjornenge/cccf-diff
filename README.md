# cccf-diff

This module can diff two [cccf](https://github.com/asbjornenge/cccf) configs. It takes current and a wanted state and returns an object of containers to *add*, *remove* and *keep* in order to get you there.

## Install

	npm install cccf-diff

## Use

	var cdiff = require('cccf-diff')
	var diff  = cdiff.diff(current, wanted)
	// => { add : [], remove : [], keep : [] }

## Changelog

### 1.0.0

* Initial release