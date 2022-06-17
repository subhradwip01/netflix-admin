export const loginStart=()=>({
    type:"LOGIN_StART",
})
export const loginSuccess=(user)=>({
    type:"SUCESS",
    payload:user
})
export const loginFailer=()=>({
    type:"LOGIN_FAILURE",
})