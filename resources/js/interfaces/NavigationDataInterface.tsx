type NavigationDataType = 'ID' | 'Link' | 'Blank'

export default interface NavigationDataInterface{
    name:string;
    type:NavigationDataType;
    id?:string | '';
    link?:string | '';
    global:boolean
}
