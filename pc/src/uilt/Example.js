export default
{
    getMeetingRoom()
    {
        let array = [
            {label:"一号会议室",value:"01"},
            {label:"二号会议室",value:"02"},
            {label:"三号会议室",value:"03"},
        ]
        return array;
    },
    getMeetingType()
    {
        let array = [
            {label:"客户访问",value:"0"},
            {label:"面试",value:"1"},
            {label:"内部会议",value:"2"}
        ]
        return array;
    },
    getTimeStepOptions(state)
    {
        let object = {};
        if(state == 0)
        {
            object = {start: '09:00',step: '00:30',end: '18:00',minTime:''}; 
        }else
        {
            object = {start: '00:00',step: '00:30',end: '23:00',minTime:''}; 
        }
        return object;
    },

}