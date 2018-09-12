
export default
{
    timeline()
    {
        let array=[];
        
        for(let i=0;i<=24;i++)
        {
            let obj={};
            obj.even = true;
            obj.meetingTime = "";
            obj.meetingType = "";
            obj.meetingState = "";
            let time = "";
            if(i<10)
            {
                time = "0"+i+":00";
            }else
            {
                time = i+":00";
            }
            obj.time = time;
            if(i % 2)
            {
                obj.even = false;
            }else
            {
                obj.even = true;
            }
            if(i==9)
            {
                obj.meetingTime = "09:00-10:00";
                obj.meetingType = "客户访问";
                obj.meetingState = "进行中";
            }
            array.push(obj);
        }
        return array;
    },
    justifyContent(value)
    {
        let name ="";
        if(value.length == 2)
        {
            name = value.charAt(0)+"　"+value.charAt(1);
        }else
        {
            name = value;
        }
        return name;
    }
}