import { ComponentModel } from './component-model';
import { UUID } from 'angular2-uuid';

export class ComponentGroup {

    UUID : string;
    componentGroupName : string;
    component : [ComponentModel];

}