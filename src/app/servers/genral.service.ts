import { Injectable } from '@angular/core';;
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenralService {

  constructor(private http:HttpClient) { }

mygetdata()
{
  return this.http.get('https://jsonplaceholder.typicode.com/posts');
}

singledata(id:any)
{
  const myid = id;
  return this.http.get(`https://jsonplaceholder.typicode.com/posts/${myid}`);
}

}
