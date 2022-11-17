interface ILeftMenuPartItem {
  name: string
  link: string
}

interface ILeftMenuPart extends ILeftMenuPartItem {
  subParts?: ILeftMenuPartItem[]
}

export const parts: ILeftMenuPart[] = [
  {name: "Part 1", link: "#", subParts: [{name: "Part 1 sub 1", link: "#"}] },
  {name: "Part 2", link: "#"},
  {name: "Part 3", link: "#", subParts: [
    {name: "Part 3 sub 1", link: "#"}, {name: "Part 3 sub 2", link: "#"}, {name: "Part 3 sub 3", link: "#"}]
  },
]
