import { Component, OnInit } from '@angular/core';
import { CatService } from './../../../service/cat_service/cat-service.service';

@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrl: './get-category.component.css',
})
export class GetCategoryComponent implements OnInit {
  constructor(private cat: CatService) {}

  showAddCategoryPopup = false;
  showEditCategoryPopup = false;
  selectedCat: any = null;
  catData: any[] = [];

  // Refresh the list
  loadCategories() {
    this.cat.getAllCat().subscribe((data: any) => {
      this.catData = data;
    });
    // console.log('Categories loaded:', this.catData); // Debug log
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  refreshCategoryList() {
    this.loadCategories();
  }

  toggleAddCategoryPopup(): void {
    this.showAddCategoryPopup = !this.showAddCategoryPopup;
  }
  toggleEditCategoryPopup(cat?: any): void {
    this.selectedCat = cat || null;
    this.showEditCategoryPopup = !this.showEditCategoryPopup;
  }

  // Handle category update event
  onCategoryUpdated() {
    this.refreshCategoryList(); // Refresh the list when a category is updated
  }
  // Delete a category
  deleteCat(cat_id: any) {
    this.cat.deleteCatData(cat_id).subscribe(
      (result) => {
        // console.log('Delete result:', result);
        this.refreshCategoryList();
      },
      (error) => {
        console.error('Delete error:', error);
      }
    );
  }
}
