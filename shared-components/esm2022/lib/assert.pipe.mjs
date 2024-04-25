import { Pipe } from '@angular/core';
import { Utilities } from './utilities';
import * as i0 from "@angular/core";
export class AssetUrlPipe {
    transform(value) {
        return Utilities.assetUrl(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AssetUrlPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.5", ngImport: i0, type: AssetUrlPipe, name: "assetUrl" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AssetUrlPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'assetUrl' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWQtY29tcG9uZW50cy9zcmMvbGliL2Fzc2VydC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBR3hDLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzhHQUhVLFlBQVk7NEdBQVosWUFBWTs7MkZBQVosWUFBWTtrQkFEeEIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVdGlsaXRpZXMgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbkBQaXBlKHsgbmFtZTogJ2Fzc2V0VXJsJyB9KVxuZXhwb3J0IGNsYXNzIEFzc2V0VXJsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFV0aWxpdGllcy5hc3NldFVybCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==