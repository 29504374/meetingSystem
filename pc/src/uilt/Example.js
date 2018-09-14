import provinces from "./Provincelist";
import uilt from "./Uilts"
export default
    {
        getMeetingRoom() {
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
            let provinceArray = provinces.getProvince();
            let array = []

            for (let i = 0; i < provinceArray.length; i++) {
                let temp = [];
                let node = {}
                node.name = provinceArray[i].name;
                node.selected = false;
                for (let j = 0; j < provinceArray[i].children.length; j++) {
                    let child = {};
                    child.name = uilt.justifyContent(provinceArray[i].children[j]);
                    child.selected = false;
                    temp.push(child);
                }
                node.children = temp;
                array.push(node);
            }
            return array;
        },
        getMeetingOrder()
        {
            let array = [
                {name:'王一明',phone:'18801001111',state:'已结束',height:'1',margin:0},
                {name:'王二明',phone:'18801001111',state:'未开始',height:'1',margin:1},
                {name:'王三明',phone:'18801001111',state:'未开始',height:'1',margin:2},
                {name:'王四明',phone:'18801001111',state:'进行中',height:'1',margin:3},
                {name:'王五明',phone:'18801001111',state:'未开始',height:'1',margin:4},
                {name:'王六明',phone:'18801001111',state:'未开始',height:'1',margin:5},
                {name:'王七明',phone:'18801001111',state:'未开始',height:'1',margin:6},
                {name:'王八明',phone:'18801001111',state:'未开始',height:'1',margin:7},
                {name:'王九明',phone:'18801001111',state:'未开始',height:'1',margin:8},
                {name:'王十明',phone:'18801001111',state:'未开始',height:'1',margin:9},
                
            ];
            return array;
        },

    }