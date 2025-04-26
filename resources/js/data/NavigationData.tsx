import NavigationDataInterface from "@/interfaces/NavigationDataInterface"

const NavigationData:NavigationDataInterface[] = [
    {
        name:'home',
        type:'ID',
        id:"home",
        global:false
    },
    {
        name:'projects',
        type:'ID',
        id:'projects',
        global:false
    },
    {
        name:'experience',
        type:'ID',
        id:'experience',
        global:false
    },
    {
        name:'contact',
        type:'ID',
        id:'contact',
        global:true
    },
]

export default NavigationData
