import { Component, OnInit } from '@angular/core';
import { CatService } from './../../../service/cat_service/cat-service.service';

@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrl: './get-category.component.css',
})
export class GetCategoryComponent implements OnInit {
  showAddCategoryPopup = false;
  showEditCategoryPopup = false;
  selectedCat: any = null;
  // selectedCatId: string | null = null;

  toggleAddCategoryPopup(): void {
    this.showAddCategoryPopup = !this.showAddCategoryPopup;
  }
  toggleEditCategoryPopup(cat?: any): void {
    this.selectedCat = cat || null;
    this.showEditCategoryPopup = !this.showEditCategoryPopup;
  }
  constructor(private cat: CatService) {}
  catData: any = [];
  ngOnInit(): void {
    this.cat.getAllCat().subscribe((allData) => {
      console.log(allData);
      this.catData = allData;
    });
  }

  deleteCat(cat_id: any) {
    // console.log(cat_id);
    this.cat.deleteCatData(cat_id).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });
  }
}
