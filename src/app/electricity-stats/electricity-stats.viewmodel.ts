export interface ElectricityStatsViewModel {
    coreStats: CoreStatsModel[]
}

export interface CoreStatsModel {
    title: string,
    consumption: string,
    production: string
}