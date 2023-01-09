import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {LocationService} from "../location.service";

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})

export class EditLocationComponent implements OnInit {
  closeModal='';
  showEditInput=false;

  @Input() selectLocation: any;
  @Input() selectedIndex: any;
  @Output() locationToEdit = new EventEmitter<string>();
  @Output() editLocationData = new EventEmitter<string>();
  constructor(private modalService: NgbModal,private locationService:LocationService) {

  }

  ngOnInit(): void {

  }

  open(content:any) {

    this.modalService.open(content, {size: 'lg', backdrop: 'static' ,ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  allowEditLocationTitle(){
    alert('fsfsdf');
    alert(this.selectLocation.description);
    this.showEditInput=true;
  }

  onSaveLocationTitle(){
    alert('dfsfsfsdf');
    console.log("inside edit component");
    console.log(this.selectLocation);
    this.editLocationData.emit(this.selectLocation);
  }

  onDeleteLocation(location:any ){

    if(window.confirm('Are sure you want to delete this location?')){

      this.locationToEdit.emit(location);
      this.modalService.dismissAll();
    }
  }

  checked(){
    (<HTMLInputElement>document.getElementById("checked")).style.display='none';
    (<HTMLInputElement>document.getElementById("unchecked")).style.display='inline';
  }

  unchecked(){
    (<HTMLInputElement>document.getElementById("unchecked")).style.display='none';
    (<HTMLInputElement>document.getElementById("checked")).style.display='inline';

  }

}
