import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        calendarAndInfoState: true,
        tabellist: false,
        organization: false,
        selectRoom:'',
        selectdate:'',
    },
    mutations: {
        setCalendarAndInfoState (state,boolean)  {
            state.calendarAndInfoState = boolean;
        },
        setTabelList(state,boolean) {
            state.tabellist = boolean;
        },
        setSelectRoom(state,value)
        {
            state.selectRoom = value;
        },
        setSelectDate(state,value)
        {
            state.selectdate = value;
        },
        setOrganization(state,boolean) {
            state.organization = boolean;
        },
    }
});
export default store;