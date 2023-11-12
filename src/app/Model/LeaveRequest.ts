export interface LeaveRequest
{
  leaveId: number,
  employeeId : number,
  projectCode: number,
  employeeName: string,
 
  startDate: string,
  endDate: string,
  leaveDescription: string,
  leaveStatus: string

}