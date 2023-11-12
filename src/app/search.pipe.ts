import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?:any): any{
    if(!value) return null; //return null if search was not found
    if(!args) return value; // if search is not doing it show all the data
   
    args = args.toLowerCase();
    return value.filter((item:any)=>{
      return JSON.stringify(item).toLowerCase().includes(args)
    })
  }

}
