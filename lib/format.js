/** @module lib/format */

/**
 * Returns a formatted string of hashtags from the keywords in the specified
 * string or array of strings.
 *
 * @example
 * // returns `#a #b #c`
 * extract('a #b c')
 *
 * @example
 * // returns `#a #b #c`
 * extract(['a', ['#b', 'c'])
 *
 * @param {...string|string[]} input String or array of strings with keywords.
 * @returns {string} String with formatted and sorted hashtags.
 */
export default (...input) => input
	.flat(Infinity)
	.join(' ')
	.trim()
	.toLowerCase()
	.split(/\s+/)
	.map(word => word.replace(/^[#＃]/g, '').replace(/-/g, ''))
	.sort()
	.map(word => `#${word}`)
	.join(' ')
