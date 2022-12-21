import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LocationService} from "../../location.service";

@Component({
  selector: 'app-path-location',
  templateUrl: './path-location.component.html',
  styleUrls: ['./path-location.component.css']
})
export class PathLocationComponent implements OnInit {

  closeModal='';
  constructor(private modalService: NgbModal,private locationService:LocationService) { }

  ngOnInit(): void {
  }
  open(content:any) {
    this.modalService.open(content, {   windowClass: 'site_model_class',  backdrop: 'static' ,ariaLabelledBy: 'modal-site-location'}).result.then((res) => {
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

  openSiteModel(content:any) {
    this.modalService.open(content, {   windowClass: 'site_path_model',  backdrop: 'static' ,ariaLabelledBy: 'modal-site-path'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;

    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

}
