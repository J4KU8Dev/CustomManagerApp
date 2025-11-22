export interface customerModel {
    id:string,
    sex: 'male' | 'female',
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    orderTotal: number,
}