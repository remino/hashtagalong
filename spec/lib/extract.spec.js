import extract from '../../lib/extract.js'

describe('lib/extract.js', () => {
	describe('extract()', () => {
		it('extracts hashtags out of a string untouched', () => {
			expect(extract('　　　日本　＃🇯🇵 #nihon Japan  #This-Is-Japan   '))
				.toEqual(['#🇯🇵', '#nihon', '#This-Is-Japan'])
		})

		it('extracts hashtags out of an array of strings untouched', () => {
			expect(extract([
				'　　　日本',
				['　＃🇯🇵', '#nihon'],
				'Japan  ',
				'#This-Is-Japan   ',
			])).toEqual([
				'#🇯🇵',
				'#nihon',
				'#This-Is-Japan',
			])
		})
	})
})
