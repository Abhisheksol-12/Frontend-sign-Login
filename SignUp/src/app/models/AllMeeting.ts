export interface AllMeetings{
    assigned:assigned[];
    created:created[];
}

export class assigned { 
    creationTime: any;
    creator: any;
    creatorName: any;
    description: any;
    meetingTime: any;
    meetingid:any;
    purpose: any;
    status: any;
}

export class created {
    accepted: any;
    creationTime: any;
    creator: any;
    creatorName: any;
    description: any;
    meetingAttendees:meetingAttendees | any; 
    meetingTime: any;
    meetingid: any;
    purpose: any;
    rejected: any;
}

export class meetingAttendees{
    name: any;
    status: any;
    username: any;
    constructor(){}
}
// creationTime: "2022-03-02T21:53:00"
// creator: 3
// creatorName: "aaa dharmin0 n hirapara"
// description: "java description"
// meetingTime: "2022-03-09T23:51:00"
// meetingid: 24
// purpose: "java"
// status: "Not responded"


// accepted: 0
// creationTime: "2022-03-02T21:53:00"
// creator: 3
// creatorName: "aaa dharmin0 n hirapara"
// description: "java description"

// meetingAttendees: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// name: "bacc dharmin5 n hirapara"
// status: "Not responded"
// username: "hirapara5.nileshbhai@peoplestrong.com"

// meetingTime: "2022-03-09T23:51:00"
// meetingid: 24
// purpose: "java"
//rejected: 0