import org from "./OrgInfo"
import uilt from "./Uilts"
export default
    {
        getSelectRoomOptions() {
            let array = [
                { label: "一号会议室", value: "01" },
                { label: "二号会议室", value: "02" },
                { label: "三号会议室", value: "03" },
            ]
            return array;
        },
        getMeetingType() {
            let array = [
                { label: "客户访问", value: "0" },
                { label: "面试", value: "1" },
                { label: "内部会议", value: "2" }
            ]
            return array;
        },
        getTimeStepOptions(state) {
            let object = {};
            if (state == 0) {
                object = { start: '09:00', step: '00:30', end: '18:00', minTime: '' };
            } else {
                object = { start: '00:00', step: '00:30', end: '23:00', minTime: '' };
            }
            return object;
        },
        getOrganizationTree() {
            let orgArray = org.getProvince();
            let array = []

            for (let i = 0; i < orgArray.length; i++) {
                let temp = [];
                let node = {}
                node.name = orgArray[i].name;
                node.selected = false;
                for (let j = 0; j < orgArray[i].children.length; j++) {
                    let child = {};
                    child.name = uilt.justifyContent(orgArray[i].children[j]);
                    child.selected = false;
                    temp.push(child);
                }
                node.children = temp;
                array.push(node);
            }
            return array;
        },
        getMeetinglist(boolean)
        {
            let array = [];
            for(let i=0;i<=24;i++)
            {
                let obj={};
                obj.even = true;
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
                    obj.state = "未开始";
                    obj.type = "客户访问";
                }else
                {
                    obj.even = true;
                    obj.state = "进行中";
                    obj.type = "部门会议";
                }
                obj.name = "王"+i+"明";
                obj.phone = "18801001111";
                obj.height = "1";
                //obj.margin = i;
                array.push(obj);
            }
           if(boolean)
           {
               array = array.slice(9,19);
           }
            return array;
        },
        getMeetingWorklist()
        {
            let array = [];
            let list = this.getMeetinglist();
            
            
            for(let i=9;i<=18;i++)
            {
                let object = {};
                object.name = list[i].name;
                object.phone = list[i].phone;
                object.state = "已结束";
                object.height = 1;
                object.margin = i - 9;
                array.push(object);
            }
            
            return array;
        }

    }