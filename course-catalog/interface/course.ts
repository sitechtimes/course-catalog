export default interface course{
    name: string
    freshman: boolean
    sophomore: boolean
    junior: boolean
    senior: boolean
    ap: boolean
    courseCode: string
}

export default interface courseNode{
    node:course
}