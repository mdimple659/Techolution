import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'result-board',
  templateUrl: './result-board.component.html',
  styleUrls: ['./result-board.component.css']
})

export class ResultBoardComponent implements OnInit {
  cols: any[];
  records: Student[] = [];
  marks: any[] = []
  student: Student;
  max
  color;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData()  {
    let url = 'assets/data.json';
    this.http.get(url).subscribe(response => {
      this.convertServerToLocal(response);
    })
    
  }

  sortData(arr) {
    arr.sort((a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
  }

  convertServerToLocal(response) {
    let tmp = <Student[]>response
    let tmp_marks
    let max_total= -1;
    tmp.forEach(data => {
      this.student = new Student;
      tmp_marks = [];
      this.student.name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
      this.student.rollNumber = data.rollNumber;
      
      this.student.total = Number(data.marks.English) + Number(data.marks.Maths) + Number(data.marks.Science);
      max_total = Math.max(max_total, this.student.total)
      tmp_marks.push(this.student.total);
      if (Number(data.marks.English) < 20 || Number(data.marks.Maths) < 20 || Number(data.marks.Science) < 20) {
        this.student.status = "Fail";
      } else {
        this.student.status = "Pass";
      }
      
      this.records.push(this.student)
      this.sortData(this.records)

    })
    if (max_total != -1) {
      this.student.status = "Topper";
    }
  }

  getColor(status) { 
    if (status == "Fail")
      return 'red';
    if (status == "Topper")
      return 'green';
  }
}

export class Student{
  name: String;
  marks = new Marks;
  rollNumber: String;
  status: String;
  total: number;
}

export class Marks {
  Maths: number;
  English: number;
  Science: number;
}
