
export class Rider {

    uuid: string;
      rname: string;
      phone: number;
      imageUrl: string;
      nic: string;
      googleid: string;
      avgrating: string;
      active:boolean = true;

      addressnumber: string;
      subroad: string;
      mainroad: string;
      city: string;

      url: string;
      file:File;
      progress:number;
      name: string;
      constructor(file:File) {
        this.file = file;
      }
    }
