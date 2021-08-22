export class CallRegist {
    constructor(public number: number = 0, public date: string = "",
                public operator: string = "", public source: string ="",
                 public status: number = 0) {
    }

    // Status reffer to declinedLocal:0, declinenRemote: 1, catchedLocal: 2, 
    // catchedRemote: 3
}