/** @module lib/extract */

/**
 * Returns an array of hashtags found in the specified string or array of strings.
 *
 * @example
 * // returns `['#a', '#c']`
 * extract('#a b #c')
 *
 * @example
 * // returns `['#a', '#c']`
 * extract(['#a', ['b', '#c'])
 *
 * @param {...string|string[]} input String or array of strings with hashtags.
 * @returns {string[]} Array of hashtag strings.
 */
export default (...input) => [
	...[input]
		.flat(Infinity)
		.join(' ')
		.matchAll(/[#＃]([^\s]+)/g),
].map(matches => `#${matches[1]}`)
