import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        userId: -1,
        user: {},
        isLogged: false,
        equipmentForRent: {},
        dataForBooking: {},
        bookingId: -1
    }, 
    reducers: {
        authorizeUser(state, action) {
            state.user = action.payload
            state.userId = action.payload.id
            state.isLogged = true
        },
        unauthorizeUser(state, action) {
            state.user = {}
            state.userId = -1
            state.isLogged = false
            state.dataForBooking = {}
            state.equipmentForRent = {}
            state.bookingId = -1
        },
        setEquipmentForRent(state, action) {
            state.equipmentForRent = action.payload
        },
        setDataForBooking(state, action) {
            state.dataForBooking = action.payload
        },
        setBookingId(state, action) {
            state.bookingId = action.payload
        }
    },
});

export const {authorizeUser, unauthorizeUser, setEquipmentForRent, setDataForBooking, setBookingId} = userSlice.actions;

export default userSlice.reducer;