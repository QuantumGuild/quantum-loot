import {Box, Typography} from "@mui/material";
import members from "../data/members.json"
import {Member} from "../types/Member";
import {MemberView} from "./MemberView";

export const Members = () => {

    return <Box>
        <Typography variant={"h4"}>Members</Typography>
        {members.map(member => <MemberView key={member.name} member={member as Member}/>)}
    </Box>
}