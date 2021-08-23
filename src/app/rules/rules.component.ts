import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    const dialogRef = this.dialog.open(OpenedRulesDialog, {
      width: '420px',
      height: '420px',
      maxWidth: '100vw'

    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: {result}`)
    })
  }



  ngOnInit(): void {
  }

}

@Component({
  selector: 'opened-rules-dialog',
  templateUrl: 'opened-rules-dialog.html',
  styleUrls: ['./rules.component.css']
})
export class OpenedRulesDialog {

  constructor(public dialog: MatDialog) { }

  close(){
    this.dialog.closeAll();
  }
}

