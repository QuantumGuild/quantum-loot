import {Member} from "../types/Member";


export const MemberView = ({member}: { member: Member }) => {

    return <div>
        {member.name} {member.class} {member.type}
    </div>
}