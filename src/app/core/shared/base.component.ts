import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2'

export abstract class BaseComponent {

    constructor(protected spinner: NgxSpinnerService) {
            
    }

    loadStart(): void{
        this.spinner.show();
    }

    loadStop(): void{
        setTimeout(() => {
            this.spinner.hide();
          }, 1000);
    }

    errorMensage(msg:string){
        Swal.fire('Oops...', msg, 'error');
    }

    successMensage(msg:string){
        Swal.fire('Sucesso!', msg, 'success');
    }

}