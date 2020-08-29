function classes(...names: (string | undefined)[]): string {
  return names.filter(Boolean).join(' ')
}

export default classes

interface ClassToggles {
  [k: string]: Boolean
}

const scopedClassMaker = (prefix: string) => (
  name: string | ClassToggles = '',
  more?: string | Array<string | undefined>
) =>
  Object.entries(name instanceof Object ? name : { [name]: name })
    .filter((item) => item[1] !== false)
    .map((item) => item[0])
    .map((item) => [prefix, item].filter(Boolean).join('-'))
    .concat(more as Array<string>)
    .filter(Boolean)
    .join(' ')

export { scopedClassMaker }
