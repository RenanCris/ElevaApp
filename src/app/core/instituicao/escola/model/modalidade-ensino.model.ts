import { ModelBase } from 'src/app/core/shared/model-base';
import { Subscriber } from 'rxjs';

export class ModalidadeEnsinoModel extends ModelBase {
    idModalidadeEnsino:number;
    
    constructor(id:number) {
     super();
     this.idModalidadeEnsino =    id;
    }
    
}