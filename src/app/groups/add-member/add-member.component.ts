import { Component,EventEmitter, OnInit, Output, Input} from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  closeModal='';
  memberDescription !: string;
  memberError=false;
  @Output() groupMemberToAdd = new EventEmitter<string>();
  @Input() selectedMembers: any;
  preSelectedUsers:any;
  @Input() allUserLists: any;

  constructor(private modalService: NgbModal ) { 
   
  }

  ngOnInit(): void {
    console.log("444444444444");
    console.log(this.preSelectedUsers);
    this.preSelectedUsers  = [...this.selectedMembers];
    //this.preSelectedUsers = this.selectedMembers;
  }

  open(content:any) {
    this.memberError=false;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

   

  private getDismissReason(reason: any): string {
     
    if (reason === ModalDismissReasons.ESC) {
      console.log("fff");
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      console.log("aaa");
      this.selectedMembers  = [...this.preSelectedUsers];
      console.log("----hhh-----");
      console.log(this.preSelectedUsers);
      console.log(this.selectedMembers);
      //this.selectedMembers = this.preSelectedUsers;
      //console.log(this.preSelectedUsers);
      //console.log(this.selectedMembers);
      return 'by clicking on a backdrop';
    } else {
      console.log("111");
      return `with: ${reason}`;
    }
  }

  onAddGroupMember(){
    
    this.memberError=false;
    if(this.selectedMembers.length>0){
      
        this.groupMemberToAdd.emit(this.selectedMembers);
        this.modalService.dismissAll();
    }else{
     
       this.memberError=true;
    }
  }

  checkedImage(user:any){
    
    let memberData = this.selectedMembers.filter((member: any) =>
        member.email.includes(user)
      );

    if(memberData.length >0) { 
      return true;
     }else{ 
      return false;
    };
  }

  clickMember(user:any, status:any){
    if(status){
      let memberData = this.selectedMembers.forEach((member: any, index:any) =>{
        console.log(index);
        console.log(member);
        if(member.email==user.email){
          this.selectedMembers.splice(index, 1);
        }
        
    });

     
      //this.allSelectedUsers.
    }else{
      this.selectedMembers.push({"email":user.email});
    }
    
  }

}
