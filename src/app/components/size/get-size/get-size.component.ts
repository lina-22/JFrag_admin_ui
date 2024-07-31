import { Component, OnInit } from '@angular/core';
import { SizesService } from './../../../service/size_service/size.service';

@Component({
  selector: 'app-get-size',
  templateUrl: './get-size.component.html',
  styleUrl: './get-size.component.css',
})
export class GetSizeComponent implements OnInit {
  constructor(private size: SizesService) {}
  sizeData: any = [];
  showAddSizePopup = false;
  showEditSizePopup = false;
  selectedSize: any = null;
  // dtOptions: Settings = {};
  // dtOptions: DataTables.Settings = {};
  toggleAddSizePopup(): void {
    this.showAddSizePopup = !this.showAddSizePopup;
  }
  toggleEditSizePopup(size?: any): void {
    this.selectedSize = size || null;
    this.showEditSizePopup = !this.showEditSizePopup;
  }
  ngOnInit(): void {
    this.size.getAllSize().subscribe((allData) => {
      console.log(allData);
      this.sizeData = allData;
    });
  }

  deleteSize(size_id: any) {
    // console.log(size_id);
    this.size.deleteSizeData(size_id).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });
  }
}
