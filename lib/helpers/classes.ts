function classes(...names: (string | undefined)[]): string {
  return names.filter(Boolean).join(' ')
}

export default classes

function scopedClassMaker(
  prefix: string
): (
  name?: string,
  more?: string | undefined | Array<string | undefined>
) => string {
  return (name, more) => {
    const _more = Array.isArray(more) ? more : [more]
    return [[prefix, name].filter(Boolean).join('-'), ..._more]
      .filter(Boolean)
      .join(' ')
  }
}

export { scopedClassMaker }
