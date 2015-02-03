# cccf-diff

[![NPM](https://nodei.co/npm/cccf-diff.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/cccf-diff/)

This module can diff two [cccf](https://github.com/asbjornenge/cccf) configs / states. It takes current and a wanted state and returns an object of containers to *add*, *remove* and *keep* in order to get you there.

## Install

	npm install cccf-diff

## Use

	var diff = require('cccf-diff')(current, wanted)
	// => { add : [], remove : [], keep : [] }

## Changelog

### 2.0.1

* Updated docs

### 2.0.0

* Using cccf v3.0.0

### 1.0.0

* Initial release
