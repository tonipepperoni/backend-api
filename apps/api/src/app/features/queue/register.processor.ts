import {MailService} from "../mail";
import {ConfigService} from "../config";
import {Processor, Process} from "@nestjs/bull";
import {Job} from "bull";

@Processor('register-queue')
export class RegisterProcessor {

  constructor(private readonly mail: MailService,
              private readonly config: ConfigService,){}

  @Process()
    async processFile(job: Job<any>) {
    const user = job.data;

    console.log(user);

    this.mail.sendGeneral({
      to: user.email,
      subject: 'Sign Up Confirmed',
      context: {
        siteUrl: this.config.siteUrl,
        hiddenPreheaderText: `Sign up confirmed for ${user.username}`,
        header: 'Welcome',
        subHeading: 'Sign Up Confirmed',
        body: `Thank you for signing up ${user.username}!`,
        footerHeader: '',
        footerBody: '',
      },
    });

  }

}
