export interface DashboardViewModel {
    bills: BillViewModel[]
}

export interface BillViewModel {
    amount: string,
    due: string
}   