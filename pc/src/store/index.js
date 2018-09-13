import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        indexRightState: [true, false, false],
        tabellist: false,
        organization: false,
        selectRoom: '',
        selectdate: '',
        today: '',
        orglistArray: [],
    },
    mutations: {
        setIndexRightState(state, type) {
            switch (type) {
                case "default":
                    state.indexRightState = [true, false, false];
                    break;
                case "tabel":
                    state.indexRightState = [false, true, false];
                    break;
                case "org":
                    state.indexRightState = [false, false, true];
                    break;
            }
        },
        setToday(state, value) {
            state.today = value;
            state.selectdate = value;
        },
        setTabelList(state, boolean) {
            state.tabellist = boolean;
        },
        setSelectRoom(state, value) {
            state.selectRoom = value;
        },
        setSelectDate(state, value) {
            state.selectdate = value;
        },
        setOrganization(state, boolean) {
            state.organization = boolean;
        },
        setOrglistArray(state, array) {
            state.orglistArray = array;
        },
        resetOrglistArray(state, array) {
            state.orglistArray = [];
            state.orglistArray = array;
            console.log(array)
        },
        setOrglistItem(state, array) {
            state.orglistArray[array[0]].children[array[1]].selected = false;
            state.orglistArray[array[0]].selected = false;
        }
    }
});
export default store;