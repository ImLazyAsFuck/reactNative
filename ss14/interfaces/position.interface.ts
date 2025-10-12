export interface Position {
    id: number;
    positionName: string;
    description: string;
    positionStatus: "ACTIVE" | "INACTIVE";
    createdAt: string;
    employeeCount: number;
    isDelete: boolean;
}