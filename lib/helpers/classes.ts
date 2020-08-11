function classes(...names: (string | undefined)[]): string {
	return names.filter(Boolean).join(' ')
}

export default classes

function scopedClassMaker(prefix: string): (name?: string) => string {
	return (name) => {
		return [prefix, name].filter(Boolean).join('-')
	}
}

export { scopedClassMaker }
