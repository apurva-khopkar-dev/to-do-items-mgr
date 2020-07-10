import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoItemsComponent } from './to-do-items.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToDoListService } from '../to-do-list-services/to-do-list/to-do-list.service';
import { ToDoListOperationsService } from '../to-do-list-services/to-do-list-operations/to-do-list-operations.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ToDoItem } from '../to-do-item.model';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { CommonModule } from '@angular/common';
import { ToDoEditComponent } from './to-do-edit/to-do-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoAddModalComponent } from './to-do-add-modal/to-do-add-modal.component';
import { ToDoListServicesModule } from '../to-do-list-services/to-do-list-services.module';

describe('ToDoItemsComponent', () => {
  let component: ToDoItemsComponent;
  let fixture: ComponentFixture<ToDoItemsComponent>;

  const items: ToDoItem[] = [
    { id: 12312,  label: 'Groceries', priority: 1},
    { id: 45343, label: 'Bike repair', priority: 2},
    { id: 45454, label: 'Bill payments', priority: 3},
    { id: 67677, label: 'Car servicing', priority: 4},
    { id: 68997, label: 'Call plumber', priority: 5},
    { id: 24545, label: 'Fund transfer to bank', priority: 6},
    { id: 78686, label: 'Annual medical checkup', priority: 7},
    { id: 69893, label: 'Society meeting', priority: 8},
    { id: 35576, label: 'School reunion planner', priority: 9},
    { id: 79002, label: 'UPS replacement', priority: 10},
    { id: 15853, label: 'Mobile recharge', priority: 11},
    { id: 85754, label: 'Technology meetup', priority: 12},
    { id: 56799, label: 'Read a book', priority: 13}
];

  @Injectable()
  class MockToDoListService extends ToDoListService{
   getAllToDoItems(): Observable<ToDoItem[]> {
            return of(items);
    }
}
  @Injectable()
  class MockToDoListOperationsService extends ToDoListOperationsService{
    public addItem(item: ToDoItem): Observable<ToDoItem[]>  {
      items.push(item);
      return of(items);
    }
}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        OverlayModule,
        A11yModule,
        ClipboardModule,
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        PortalModule,
        ScrollingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToDoListServicesModule
      ],
      declarations: [ ToDoItemsComponent ],
      providers: [ MatDialog, FormBuilder,
      { provide: ToDoListService, useClass: MockToDoListService },
      { provide: ToDoListOperationsService, useClass: MockToDoListOperationsService },
      { provide: MAT_DIALOG_DATA, useValue: {} },
      {provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
