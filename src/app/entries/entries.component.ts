import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { EntryElement } from '../interfaces/EntryElement';
import { UpdateEntryComponent } from '../update-entry/update-entry.component';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<EntryElement>;

  constructor(private service: EntryService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.service.getAll().subscribe( (data) => {
        console.log("Data: ", data);
        this.dataSource = new MatTableDataSource<EntryElement>(data as EntryElement[]);
      }
    );
    this.displayedColumns = ['Description', 'IsExpense', 'Value', 'Actions'];
  }

  updateEntry(entry) {
    this.dialog.open(UpdateEntryComponent, {
      data: {
        Id: entry.Id,
        Description: entry.Description,
        isExpense: entry.IsExpense,
        Value: entry.Value,
      }
    });
  }

}
