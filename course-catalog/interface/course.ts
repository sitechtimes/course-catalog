export default interface course {
    id: number,
    name: string,
    freshman: boolean,
    sophomore: boolean,
    junior: boolean,
    senior: boolean,
    subject: string,
    description: string,
    ap: boolean,
    honors: boolean,
    mandatoryCourse: boolean,
    doublePeriod: boolean,
    prerequisites: string[],
    codes: string[]
}

export default interface courseNode {
    node: course;
}