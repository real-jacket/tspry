function classes(...names: (string | undefined)[]): string {
  return names.filter(Boolean).join(' ')
}

export default classes

interface ClassToggles {
  [k: string]: Boolean
}

function scopedClassMaker(
  prefix: string
): (
  // {
  //   '':true,
  //   hasAside:false
  // }
  name?: string | ClassToggles,
  more?: string | Array<string | undefined>
) => string {
  return (name = '', more) =>
    [
      [prefix]
        .concat(
          Object.entries(name instanceof Object ? name : { [name]: name })
            .filter((item) => item[1])
            .map((item) => item[0])
        )
        .filter(Boolean)
        .join('-'),
    ]
      .concat(more as Array<string>)
      .filter(Boolean)
      .join(' ')
}

export { scopedClassMaker }
