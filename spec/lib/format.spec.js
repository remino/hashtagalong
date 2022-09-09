import format from '../../lib/format.js'

describe('lib/format.js', () => {
	describe('format()', () => {
		it('formats every keyword in a string into hashtags', () => {
			expect(format('　　　日本　🇯🇵 #nihon Japan  #This-Is-Japan   '))
				.toBe('#japan #nihon #thisisjapan #日本 #🇯🇵')
		})

		it('formats every keyword in multiple arrays into hashtags', () => {
			expect(format([
				'　　　日本',
				['　🇯🇵 #nihon', 'Japan'],
				'  #This-Is-Japan   ',
			])).toBe('#japan #nihon #thisisjapan #日本 #🇯🇵')
		})
	})
})
