import { Inject, Injectable } from "@angular/core";
import { CallRegist } from "./callRegist";

export class CallRegistService {

    // Save the call regist
    // Status reffer to declinedRemote:0, declinenRemote: 1, catchedLocal: 2, 
    // catchedRemote: 3
    private callRegist: CallRegist[] = [new CallRegist(3118818838, "Thu", "Claro", "Colombia", 0),
    new CallRegist(3015794422, "Mon", "Tigo", "Colombia", 2), 
    new CallRegist(3015797422, "Thu", "Movistar", "Colombia", 1),
    new CallRegist(3226115798, "Fri", "Claro", "Colombia", 3),
    new CallRegist(3178516045, "Mon", "Claro", "Colombia", 0),
    new CallRegist(3145293894, "Whd", "Claro", "Claro", 0),
    new CallRegist(3225370674, "Thr", "Claro", "Colombia", 3)];

    getCall(){
        return this.callRegist;
    }

    setCall(call: CallRegist) {
        this.callRegist.push(call);
    }
}