export interface SidebarModel {
    sectionTitle: string,
    section: SidebarSectionModel[]
}

export interface SidebarSectionModel {
    title: string,
    iconName: string,
    route: string
}