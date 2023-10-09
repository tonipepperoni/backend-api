import {MailService} from "../mail";
import {Processor, Process} from "@nestjs/bull";
import {Job} from "bull";

@Processor('reset-password-queue')
export class ResetPasswordProcessor {

  constructor(private readonly mail: MailService){}

  @Process()
  async processFile(job: Job<any>) {
    const user = job.data;
    console.log(user);
    this.mail.sendPasswordReset(user)
  }

}
